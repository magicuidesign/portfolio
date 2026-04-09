# Projects Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a "Projects" section to the portfolio that showcases external side projects (SB Coffee Week, SB Burger Week) with links to their live sites and GitHub repos, visible on both the `/dev` page and the homepage.

**Architecture:** Create a `projects.ts` data file as the single source of truth for side project metadata. Add a "Projects" section below the existing dev tools grid on `/dev`, using cards styled for external links (live site + repo). Add a matching "Projects" section on the homepage between Work and Latest Writing.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS

---

## File Structure

| File | Action | Responsibility |
|------|--------|----------------|
| `src/data/projects.ts` | Create | Side project data: name, description, emoji, color, liveUrl, repoUrl |
| `src/app/dev/page.tsx` | Modify | Add "Projects" section below the dev tools grid |
| `src/app/page.tsx` | Modify | Add "Projects" section between Work and Latest Writing |

---

### Task 1: Create project data file

**Files:**
- Create: `src/data/projects.ts`

- [ ] **Step 1: Create `src/data/projects.ts`**

```typescript
export interface SideProject {
  slug: string
  title: string
  description: string
  emoji: string
  color: string
  liveUrl: string
  repoUrl: string
}

export const SIDE_PROJECTS: SideProject[] = [
  {
    slug: 'sb-coffee-week',
    title: 'SB Coffee Week Map',
    description:
      'Interactive map for Santa Barbara Coffee Week 2026 — find participating shops, track visits, plan your route.',
    emoji: '☕',
    color: '#6f4e37',
    liveUrl: 'https://sbcoffeeweekmap.com',
    repoUrl: 'https://github.com/samgutentag/sbcoffeeweek',
  },
  {
    slug: 'sb-burger-week',
    title: 'SB Burger Week Map',
    description:
      'Interactive map for Santa Barbara Burger Week — browse participating restaurants and their featured burgers.',
    emoji: '🍔',
    color: '#d97706',
    liveUrl: 'https://sbburgerweekmap.com',
    repoUrl: 'https://github.com/samgutentag/sbburgerweek',
  },
]
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `cd /Users/samgutentag/Developer/portfolio && npx tsc --noEmit --pretty 2>&1 | head -20`
Expected: no errors related to `projects.ts`

- [ ] **Step 3: Commit**

```bash
git add src/data/projects.ts
git commit -m "add side projects data file"
```

---

### Task 2: Add Projects section to /dev page

**Files:**
- Modify: `src/app/dev/page.tsx`

The `/dev` page currently has a "Dev Tools" heading and a 2-column grid of internal tool cards. We add a "Projects" section below the grid with external project cards. These cards differ from the dev tool cards: clicking them opens the live site externally, and they show both a "Visit site" and "View source" link.

- [ ] **Step 1: Add the import**

At the top of `src/app/dev/page.tsx`, add the import after the existing imports:

```typescript
import { SIDE_PROJECTS } from '@/data/projects'
```

- [ ] **Step 2: Add the Projects section after the closing `</div>` of the tools grid**

After the `grid grid-cols-1 gap-5 sm:grid-cols-2` div (line ~149), add:

```tsx
      {/* ─── Side Projects ─── */}
      <div className="mt-16">
        <h2 className="mb-1 text-xl font-bold tracking-tight">Projects</h2>
        <p className="mb-8 text-xs text-neutral-400">
          Side projects with their own homes on the web
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {SIDE_PROJECTS.map((project) => (
            <div key={project.slug} className="flex flex-col">
              {/* Preview area */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group no-underline"
              >
                <div
                  className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl transition-all duration-200 group-hover:scale-[1.02] group-hover:shadow-lg"
                  style={{ background: `${project.color}12` }}
                >
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-full text-3xl shadow-sm transition-transform duration-200 group-hover:scale-110"
                    style={{ background: `${project.color}20` }}
                  >
                    {project.emoji}
                  </div>
                </div>
              </a>

              {/* Text */}
              <div className="mt-4 flex flex-col gap-1">
                <h3 className="text-[14px] font-semibold tracking-tight text-balance">
                  {project.title}
                </h3>
                <p className="text-[12px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {project.description}
                </p>
                <div className="mt-1 flex flex-col gap-1 text-[12px]">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Visit site
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M4 12L12 4M12 4H6M12 4v6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    View source
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M4 12L12 4M12 4H6M12 4v6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
```

Note the differences from the dev tools cards:
- Uses `<a>` with `target="_blank"` instead of `<Link>` (external URLs)
- Arrow icon is a diagonal "external link" arrow instead of a chevron
- Link labels are "Visit site" / "View source" instead of "Open tool" / "Read the blog post"
- Heading is `<h3>` to nest under the `<h2>` section heading

- [ ] **Step 3: Verify it renders**

Run: `cd /Users/samgutentag/Developer/portfolio && npm run build 2>&1 | tail -20`
Expected: build succeeds with no errors

- [ ] **Step 4: Commit**

```bash
git add src/app/dev/page.tsx
git commit -m "add projects section to dev page"
```

---

### Task 3: Add Projects section to homepage

**Files:**
- Modify: `src/app/page.tsx`

Add a "Projects" section between the Work timeline and Latest Writing sections on the homepage. Uses the same `SectionLabel` and `AnimatedSection` pattern already on the page. Stagger delay slots: Work = 0.15, Projects = 0.225, Latest Writing = 0.3.

- [ ] **Step 1: Add the import**

At the top of `src/app/page.tsx`, add after the existing imports:

```typescript
import { SIDE_PROJECTS } from '@/data/projects'
```

- [ ] **Step 2: Add the Projects section between the Work and Latest Writing `AnimatedSection` blocks**

After the closing `</AnimatedSection>` of the Work Timeline section (line ~197), and before the Latest Writing `<AnimatedSection delay={0.3}>` (line ~200), add:

```tsx
      {/* ─── Projects ─── */}
      <AnimatedSection delay={0.225}>
        <section>
          <SectionLabel>Projects</SectionLabel>

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
```

This follows the same layout pattern as the Work timeline (icon on left, text on right) but links externally.

- [ ] **Step 3: Verify it renders**

Run: `cd /Users/samgutentag/Developer/portfolio && npm run build 2>&1 | tail -20`
Expected: build succeeds with no errors

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "add projects section to homepage"
```
