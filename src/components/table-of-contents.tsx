/**
 * Table of Contents for blog posts.
 *
 * Parses raw MDX source for h2 headings and renders a fixed-position list
 * on large screens. IDs are generated with `github-slugger` to match the
 * IDs that `rehype-slug` adds to actual h2 elements during MDX compilation.
 *
 * Hidden on screens narrower than `xl` since the centered max-w-2xl layout
 * doesn't have room for a sidebar at smaller widths.
 *
 * Why this is a client component: native hash links + Next.js App Router +
 * sticky elements interact badly. Subsequent hash clicks sometimes don't
 * trigger scroll. We use explicit scrollIntoView to bypass that entirely.
 */

"use client";

import GithubSlugger from "github-slugger";

interface TocHeading {
  text: string;
  slug: string;
}

/**
 * Extracts h2 headings from MDX source.
 * Skips lines inside fenced code blocks (```...```) so a `## comment`
 * inside a code block doesn't show up in the TOC.
 */
function extractH2Headings(source: string): TocHeading[] {
  const slugger = new GithubSlugger();
  const headings: TocHeading[] = [];
  let inCodeBlock = false;

  for (const line of source.split("\n")) {
    if (line.trim().startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock) continue;

    const match = line.match(/^##\s+(.+)$/);
    if (match) {
      const text = match[1].trim();
      headings.push({ text, slug: slugger.slug(text) });
    }
  }

  return headings;
}

export function TableOfContents({ source }: { source: string }) {
  const headings = extractH2Headings(source);

  // Hide entirely if there are fewer than 2 headings — a TOC of one item is noise.
  if (headings.length < 2) return null;

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, slug: string) {
    e.preventDefault();
    const el = document.getElementById(slug);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    // Update the URL without triggering Next.js navigation
    window.history.pushState(null, "", `#${slug}`);
  }

  return (
    <aside
      aria-label="Table of contents"
      className="hidden xl:block fixed top-24 left-[calc(50%+22rem)] w-56 max-h-[calc(100vh-8rem)] overflow-y-auto"
    >
      <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
        On this page
      </p>
      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li key={heading.slug}>
            <a
              href={`#${heading.slug}`}
              onClick={(e) => handleClick(e, heading.slug)}
              className="text-muted-foreground hover:text-foreground transition-colors block leading-snug"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
