/**
 * Individual blog post page.
 *
 * Key Next.js concepts at work here:
 *
 * 1. generateStaticParams — tells Next.js which slugs exist at build time.
 *    Each slug becomes a statically generated page (no server needed at runtime).
 *
 * 2. generateMetadata — per-page SEO. Next.js merges this with the root metadata
 *    (title template, OG defaults, etc.) automatically.
 *
 * 3. params is a Promise in Next.js 15+ App Router. Always `await` it.
 *
 * 4. MDXRemote compiles MDX source on the server and renders it as React
 *    elements, allowing custom components (TerminalBlock, Callout, etc.)
 *    to be used directly in .mdx files.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost, getBlogPosts, mdxOptions } from "@/data/blog";
import { mdxComponents } from "@/components/mdx";
import { TableOfContents } from "@/components/table-of-contents";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  return {
    title: post.metadata.title,
    description: post.metadata.summary,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.summary,
      type: "article",
      publishedTime: post.metadata.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metadata.title,
      description: post.metadata.summary,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  return (
    <article className="pt-4">
      <TableOfContents source={post.source} />

      {/* Post header */}
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
        {post.metadata.title}
      </h1>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <span>
          {new Date(post.metadata.publishedAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>

        {post.metadata.tags && post.metadata.tags.length > 0 && (
          <>
            <span>·</span>
            {post.metadata.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag}`}
                className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded hover:bg-border transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </>
        )}
      </div>

      {/*
       * `prose` enables @tailwindcss/typography styles (h1-h6, p, ul, a, etc).
       * `prose-sm` uses the small size scale.
       * `dark:prose-invert` flips prose colors in dark mode.
       * `max-w-none` removes the default max-width so it fills our 2xl container.
       */}
      <div className="mt-10 prose prose-sm dark:prose-invert max-w-none">
        <MDXRemote
          source={post.source}
          components={mdxComponents}
          options={{ mdxOptions }}
        />
      </div>
    </article>
  );
}
