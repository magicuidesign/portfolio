# gutentag.world

Personal portfolio and blog. Built with Next.js 16, React 19, and Tailwind CSS 4.

## Blog

MDX-powered blog with a custom component library for technical writing.

- **Syntax highlighting** with dual-theme Shiki (`min-light` / `min-dark`) via rehype-pretty-code. Switches automatically with the site theme.
- **Terminal windows** for shell code blocks, styled after Carbon with traffic light dots and a title bar. Use `title="..."` on the code fence to label them.
- **MDX components** for structured content: `TerminalBlock`, `Callout`, `StepList`, `TIL`, `PartsList`, `GitHubCard`. These live in `src/components/mdx/`.
- **Tag filtering** at `/blog/tag/[tag]`, year-grouped archive, and draft support via `draft: true` in frontmatter.
- **GFM support** for tables, strikethrough, and task lists. Tables get a horizontal scroll wrapper on small screens.

## Dev Tools

Standalone interactive pages at `/dev/<project>` for one-off tools linked from blog posts.

- `/dev/charging-setup` — interactive charging diagram
- `/dev/display-specs` — display spec comparison
- `/dev/logo-review` — logo variant review tool
- `/dev/blog-components` — MDX component playground

## Projects

Side projects with their own live sites, showcased on the `/dev` page and homepage.

- [SB Coffee Week Map](https://sbcoffeeweekmap.com) — interactive map for Santa Barbara Coffee Week ([source](https://github.com/samgutentag/sbcoffeeweek))
- [SB Burger Week Map](https://sbburgerweekmap.com) — interactive map for Santa Barbara Burger Week ([source](https://github.com/samgutentag/sbburgerweek))
- [Yelp Subtopics, Revisited](https://github.com/samgutentag/yelpsubtopics) — modernized an 8-year-old NLP project with BERTopic, zero-shot classification, and an LLM insight layer
- [Gutentag, World!](https://github.com/GutentagWorld) — 100+ repos that each say "Gutentag, World!" in a different language ([generator](https://github.com/samgutentag/GUTENTAGWORLD))

## Theming

Light and dark palettes defined as CSS custom properties with class-based switching via `next-themes`. Three-state toggle cycles through light, dark, and system.

## Testing & CI

Vitest unit tests cover the data layer — blog pipeline, projects, and resume data. GitHub Actions runs three parallel jobs on every push and PR:

| Job | What it checks |
|-----|---------------|
| **Type Check** | `tsc --noEmit` |
| **Tests** | `vitest run` (13 tests across 3 files) |
| **Build** | `next build` |

```bash
npm test          # run tests once
npm run test:watch  # watch mode
npm run typecheck   # type check only
```

## Tech Stack

| Layer        | Tool                                       |
| ------------ | ------------------------------------------ |
| Framework    | Next.js 16 (App Router)                    |
| UI           | React 19, TypeScript                       |
| Styling      | Tailwind CSS 4, `@tailwindcss/typography`  |
| Content      | MDX via next-mdx-remote, gray-matter       |
| Highlighting | Shiki via rehype-pretty-code               |
| Testing      | Vitest                                     |
| CI           | GitHub Actions                             |
| Animations   | Framer Motion                              |
| Theming      | next-themes                                |
| Icons        | lucide-react + custom SVGs                 |
| Font         | Inter (self-hosted via `next/font/google`) |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
.github/
  workflows/ci.yml   # CI pipeline (typecheck, test, build)
content/
  blog/              # MDX blog posts (frontmatter + markdown)
docs/
  future/            # Ideas for future enhancements
  superpowers/       # Specs and implementation plans
public/
  companyIcons/      # Work timeline logos
src/
  app/               # Next.js App Router pages and layouts
  app/dev/           # Standalone interactive tool pages
  components/        # React components (Nav, ThemeToggle, etc.)
  components/mdx/    # MDX component library
  data/              # Resume, blog, and projects data (single source of truth)
```

## Content Authoring

Add a file to `content/blog/` named `YYYY-MM-DD-slug.mdx`:

```mdx
---
title: "Post Title"
publishedAt: "2026-01-15"
summary: "A short description."
tags: ["tag-a", "tag-b"]
---

Your content here.
```

## Build

```bash
npm run build
npm start
```
