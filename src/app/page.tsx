/**
 * Homepage — Server Component.
 *
 * Fetches blog posts at build/request time (no client-side fetch needed).
 * Each section is wrapped in <AnimatedSection> (a client component) for
 * the staggered fade-in, while the rest of the page stays server-rendered.
 */

import Link from "next/link";
import Image from "next/image";
import { DATA } from "@/data/resume";
import { getBlogPosts } from "@/data/blog";
import { AnimatedSection } from "@/components/animated-section";
import { SIDE_PROJECTS } from "@/data/projects";
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  MastodonIcon,
  BlueSkyIcon,
  EmailIcon,
} from "@/components/icons";

/**
 * A horizontal rule with a label on the left — the editorial section divider.
 * "Work ───────" gives clear visual hierarchy without a heading tag.
 */
function SectionLabel({ children, href }: { children: string; href?: string }) {
  const label = (
    <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
      {children}
    </span>
  );
  return (
    <div className="flex items-center gap-3 mb-8">
      {href ? <Link href={href}>{label}</Link> : label}
      <div className="flex-1 border-t border-border" />
    </div>
  );
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function Home() {
  const posts = await getBlogPosts(); // already sorted newest-first
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="space-y-16 pt-4">
      {/* ─── Hero ─── */}
      <AnimatedSection delay={0}>
        <header className="flex items-start gap-6">
          {/* Profile photo — priority loads it immediately, no layout shift */}
          <Image
            src="/me.png"
            alt={DATA.name}
            width={96}
            height={96}
            className="rounded-full flex-shrink-0"
            priority
          />

          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
              {DATA.name}
            </h1>

            <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
              {DATA.currentRole} at{" "}
              <a
                href={DATA.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                {DATA.currentCompany}
              </a>
            </p>

            <p className="mt-2 text-base text-muted-foreground leading-relaxed">
              {DATA.bio}
            </p>

            {/* Social links row */}
            <div className="mt-6 flex items-center gap-4">
            <a
              href={DATA.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href={DATA.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href={DATA.contact.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="X"
            >
              <XIcon />
            </a>
            <a
              href={DATA.contact.mastodon}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Mastodon"
            >
              <MastodonIcon />
            </a>
            <a
              href={DATA.contact.bluesky}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Bluesky"
            >
              <BlueSkyIcon />
            </a>
            <a
              href={`mailto:${DATA.contact.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <EmailIcon />
            </a>
          </div>
          </div>
        </header>
      </AnimatedSection>

      {/* ─── Work Timeline ─── */}
      <AnimatedSection delay={0.15}>
        <section>
          <SectionLabel>Work</SectionLabel>

          <div className="space-y-5">
            {DATA.work.map((job, i) => (
              <div key={i} className="flex items-center gap-4">
                {/*
                 * 200px white square. object-contain scales the logo to fit
                 * without cropping; bg-white fills any leftover space.
                 */}
                <div className="relative w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src={job.logoUrl}
                    alt={job.company}
                    fill
                    className="object-contain dark:hidden"
                  />
                  <Image
                    src={job.logoDarkUrl}
                    alt={job.company}
                    fill
                    className="object-contain hidden dark:block"
                  />
                </div>

                {/* Details: date, title, company · location */}
                <div>
                  <p className="text-xs text-muted-foreground tracking-wide">
                    {job.start} – {job.end}
                  </p>
                  <p className="text-base font-medium text-foreground mt-1">
                    {job.title}
                  </p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    <a
                      href={job.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground transition-colors"
                    >
                      {job.company}
                    </a>
                    <span className="mx-1.5">·</span>
                    {job.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ─── Projects ─── */}
      <AnimatedSection delay={0.225}>
        <section>
          <SectionLabel href="/dev#projects">Projects</SectionLabel>

          <div className="space-y-5">
            {SIDE_PROJECTS.map((project) => (
              <a
                key={project.slug}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <div
                  className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl text-2xl shadow-sm"
                  style={{ background: `${project.color}20` }}
                >
                  {project.emoji}
                </div>

                <div>
                  <p className="text-base font-medium text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ─── Latest Writing ─── */}
      <AnimatedSection delay={0.3}>
        <section>
          <SectionLabel href="/blog">Latest Writing</SectionLabel>

          <div className="space-y-6">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-base font-medium text-foreground group-hover:text-accent transition-colors">
                    {post.metadata.title}
                  </h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {formatDate(post.metadata.publishedAt)}
                  </span>
                </div>
                {post.metadata.summary && (
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {post.metadata.summary}
                  </p>
                )}
              </Link>
            ))}
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-1 mt-8 text-sm text-accent hover:underline"
          >
            Read all posts <span aria-hidden="true">→</span>
          </Link>
        </section>
      </AnimatedSection>
    </div>
  );
}
