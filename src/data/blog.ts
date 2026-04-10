/**
 * Blog data layer — reads .mdx files from disk and parses frontmatter.
 *
 * All functions are async and run on the server (Node.js `fs`).
 * Next.js calls them at build time for static pages or at request time for dynamic ones.
 *
 * Pipeline:
 *   .mdx file  →  gray-matter (split frontmatter + content)
 *              →  raw MDX source returned to the page component
 *              →  next-mdx-remote/rsc compiles MDX with remark/rehype plugins
 *              →  React elements rendered with custom MDX components
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import { createHighlighter } from "shiki";
import { visit } from "unist-util-visit";
import type { Root, Element } from "hast";
import type { PluggableList } from "unified";

export type BlogPostMetadata = {
  title: string;
  publishedAt: string;
  summary: string;
  tags?: string[];
  image?: string;
  draft?: boolean;
};

export type BlogPost = {
  slug: string;
  metadata: BlogPostMetadata;
  source: string; // raw MDX content (rendered by next-mdx-remote in the page)
};

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

/** Wraps <table> in a scrollable div so wide tables don't break layout on small screens. */
function rehypeWrapTables() {
  return (tree: Root) => {
    visit(tree, "element", (node, index, parent) => {
      if (node.tagName !== "table" || typeof index !== "number" || !parent) return;
      const el = parent as Element;
      const cls = el.properties?.className;
      if (el.type === "element" && el.tagName === "div" && Array.isArray(cls) && cls.includes("overflow-x-auto")) return;
      const wrapper: Element = {
        type: "element",
        tagName: "div",
        properties: { className: ["overflow-x-auto", "my-4"] },
        children: [node],
      };
      (parent as Element).children[index] = wrapper;
    });
  };
}

/**
 * MDX compilation options shared between the page renderer and any other
 * consumer. Passed to next-mdx-remote's options.mdxOptions.
 */
export const mdxOptions = {
  remarkPlugins: [remarkGfm] as PluggableList,
  rehypePlugins: [
    rehypeSlug,
    [
      rehypePrettyCode,
      {
        theme: {
          light: "min-light",
          dark: "min-dark",
        },
        keepBackground: false,
        getHighlighter: (options: Parameters<typeof createHighlighter>[0]) =>
          createHighlighter({
            ...options,
            langAlias: { prompt: "shellscript" },
          }),
      },
    ],
    rehypeWrapTables,
  ] as PluggableList,
};

/**
 * Reads a single post by slug. Throws if the file doesn't exist.
 */
export async function getPost(slug: string): Promise<BlogPost> {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(raw);

  return {
    slug,
    metadata: data as BlogPostMetadata,
    source: content,
  };
}

/**
 * Returns all published posts, sorted newest-first.
 * Posts with `draft: true` in their frontmatter are excluded.
 * Files without a `.mdx` extension (e.g. `.mdx.WIP`, templates) are also skipped.
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => path.extname(file) === ".mdx");

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = path.basename(file, ".mdx");
      return getPost(slug);
    })
  );

  return posts
    .filter((post) => !post.metadata.draft)
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    );
}
