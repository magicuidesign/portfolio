/**
 * Blog listing — groups posts by year and quarter for an editorial archive feel.
 *
 * Server Component: posts are fetched at build time, so this page
 * is fully static with zero client-side JavaScript (aside from the nav).
 */

import Link from "next/link";
import type { Metadata } from "next";
import { getBlogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing about dev, tech, and building things.",
};

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function getQuarter(dateString: string): number {
  return Math.ceil((new Date(dateString).getMonth() + 1) / 3);
}

const quarterLabels: Record<number, string> = {
  1: "Jan – Mar",
  2: "Apr – Jun",
  3: "Jul – Sep",
  4: "Oct – Dec",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  const postsByYearQuarter = posts.reduce<
    Record<string, Record<number, typeof posts>>
  >((acc, post) => {
    const year = new Date(post.metadata.publishedAt).getFullYear().toString();
    const quarter = getQuarter(post.metadata.publishedAt);
    if (!acc[year]) acc[year] = {};
    if (!acc[year][quarter]) acc[year][quarter] = [];
    acc[year][quarter].push(post);
    return acc;
  }, {});

  const years = Object.keys(postsByYearQuarter).sort(
    (a, b) => Number(b) - Number(a)
  );

  return (
    <div className="pt-4">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">
        Blog
      </h1>
      <p className="mt-2 text-base text-muted-foreground">
        Writing about dev, tech, and building things.
      </p>

      <div className="mt-12 space-y-10">
        {years.map((year) => {
          const quarters = Object.keys(postsByYearQuarter[year])
            .map(Number)
            .sort((a, b) => b - a);

          return (
            <div key={year} className="space-y-8">
              <h2 className="sticky top-16 z-10 bg-background py-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {year}
              </h2>

              {quarters.map((q) => (
                <div key={q} className="ml-4">
                  <h3 className="text-xs font-medium text-muted-foreground mb-3">
                    {quarterLabels[q]}
                  </h3>

                  <div className="space-y-0">
                    {postsByYearQuarter[year][q].map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group flex items-baseline justify-between gap-4 py-3 border-b border-border last:border-0"
                      >
                        <span className="text-base text-foreground group-hover:text-accent transition-colors">
                          {post.metadata.title}
                        </span>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                          {formatDate(post.metadata.publishedAt)}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
