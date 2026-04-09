# Testing & CI Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Vitest unit tests for the data layer and a GitHub Actions CI workflow with three parallel jobs (typecheck, test, build).

**Architecture:** Install Vitest with path alias support, write tests for the three data modules (`blog.ts`, `projects.ts`, `resume.ts`), then add a CI workflow that runs typecheck, tests, and build as independent parallel jobs.

**Tech Stack:** Vitest, GitHub Actions, Node 22, TypeScript

---

## File Structure

| File | Action | Purpose |
|------|--------|---------|
| `vitest.config.ts` | Create | Vitest config with `@/` path alias |
| `package.json` | Modify | Add vitest dev dep, test/typecheck scripts |
| `src/data/blog.test.ts` | Create | Tests for `getBlogPosts()` |
| `src/data/projects.test.ts` | Create | Tests for `SIDE_PROJECTS` constant |
| `src/data/resume.test.ts` | Create | Tests for `DATA` constant |
| `.github/workflows/ci.yml` | Create | CI workflow with 3 parallel jobs |

---

### Task 1: Install Vitest and configure

**Files:**
- Create: `vitest.config.ts`
- Modify: `package.json`

- [ ] **Step 1: Install vitest**

Run: `cd /Users/samgutentag/Developer/portfolio && npm install -D vitest`

- [ ] **Step 2: Create `vitest.config.ts`**

```typescript
import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  test: {
    globals: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

- [ ] **Step 3: Add test scripts to `package.json`**

In the `"scripts"` section, add two entries so it reads:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "vitest run",
    "test:watch": "vitest",
    "typecheck": "tsc --noEmit"
  }
}
```

- [ ] **Step 4: Verify vitest runs (no tests yet)**

Run: `npm test`
Expected: Vitest runs and reports "No test files found"

- [ ] **Step 5: Commit**

```bash
git add vitest.config.ts package.json package-lock.json
git commit -m "add vitest and test scripts"
```

---

### Task 2: Blog data pipeline tests

**Files:**
- Create: `src/data/blog.test.ts`

Tests run against the real `content/blog/` directory. The `getBlogPosts()` function reads `.mdx` files from disk, parses frontmatter with `gray-matter`, filters out drafts, and sorts by `publishedAt` descending. No mocks needed — these are integration tests against real content.

- [ ] **Step 1: Create `src/data/blog.test.ts`**

```typescript
import { describe, it, expect } from 'vitest'
import { getBlogPosts } from '@/data/blog'

describe('getBlogPosts', () => {
  it('returns a non-empty array of posts', async () => {
    const posts = await getBlogPosts()
    expect(posts.length).toBeGreaterThan(0)
  })

  it('sorts posts newest-first by publishedAt', async () => {
    const posts = await getBlogPosts()
    for (let i = 1; i < posts.length; i++) {
      const prev = new Date(posts[i - 1].metadata.publishedAt).getTime()
      const curr = new Date(posts[i].metadata.publishedAt).getTime()
      expect(prev).toBeGreaterThanOrEqual(curr)
    }
  })

  it('every post has required frontmatter fields', async () => {
    const posts = await getBlogPosts()
    for (const post of posts) {
      expect(post.slug).toBeTruthy()
      expect(post.metadata.title).toBeTruthy()
      expect(post.metadata.publishedAt).toBeTruthy()
      expect(post.metadata.summary).toBeTruthy()
    }
  })

  it('excludes draft posts', async () => {
    const posts = await getBlogPosts()
    for (const post of posts) {
      expect(post.metadata.draft).not.toBe(true)
    }
  })

  it('every post has a slug derived from filename', async () => {
    const posts = await getBlogPosts()
    for (const post of posts) {
      // slugs follow YYYY-MM-DD-kebab-case pattern
      expect(post.slug).toMatch(/^\d{4}-\d{2}-\d{2}-.+/)
    }
  })
})
```

- [ ] **Step 2: Run tests**

Run: `npm test`
Expected: All 5 tests pass

- [ ] **Step 3: Commit**

```bash
git add src/data/blog.test.ts
git commit -m "add blog data pipeline tests"
```

---

### Task 3: Projects data tests

**Files:**
- Create: `src/data/projects.test.ts`

Tests validate the shape and integrity of the `SIDE_PROJECTS` constant exported from `src/data/projects.ts`. These are structural tests — they catch missing fields, duplicate slugs, and malformed URLs.

- [ ] **Step 1: Create `src/data/projects.test.ts`**

```typescript
import { describe, it, expect } from 'vitest'
import { SIDE_PROJECTS } from '@/data/projects'

describe('SIDE_PROJECTS', () => {
  it('is a non-empty array', () => {
    expect(SIDE_PROJECTS.length).toBeGreaterThan(0)
  })

  it('every project has all required fields', () => {
    for (const project of SIDE_PROJECTS) {
      expect(project.slug).toBeTruthy()
      expect(project.title).toBeTruthy()
      expect(project.description).toBeTruthy()
      expect(project.emoji).toBeTruthy()
      expect(project.color).toBeTruthy()
      expect(project.liveUrl).toBeTruthy()
      expect(project.repoUrl).toBeTruthy()
    }
  })

  it('has no duplicate slugs', () => {
    const slugs = SIDE_PROJECTS.map((p) => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('all URLs start with https://', () => {
    for (const project of SIDE_PROJECTS) {
      expect(project.liveUrl).toMatch(/^https:\/\//)
      expect(project.repoUrl).toMatch(/^https:\/\//)
    }
  })
})
```

- [ ] **Step 2: Run tests**

Run: `npm test`
Expected: All tests pass (blog + projects)

- [ ] **Step 3: Commit**

```bash
git add src/data/projects.test.ts
git commit -m "add projects data tests"
```

---

### Task 4: Resume data tests

**Files:**
- Create: `src/data/resume.test.ts`

Tests validate the shape and completeness of the `DATA` constant from `src/data/resume.ts`. Catches missing fields, empty strings in contact links, and incomplete work entries.

- [ ] **Step 1: Create `src/data/resume.test.ts`**

```typescript
import { describe, it, expect } from 'vitest'
import { DATA } from '@/data/resume'

describe('DATA (resume)', () => {
  it('has required top-level fields', () => {
    expect(DATA.name).toBeTruthy()
    expect(DATA.url).toBeTruthy()
    expect(DATA.currentRole).toBeTruthy()
    expect(DATA.currentCompany).toBeTruthy()
    expect(DATA.bio).toBeTruthy()
  })

  it('has all contact links with non-empty values', () => {
    const { contact } = DATA
    expect(contact.email).toBeTruthy()
    expect(contact.github).toBeTruthy()
    expect(contact.linkedin).toBeTruthy()
    expect(contact.x).toBeTruthy()
    expect(contact.mastodon).toBeTruthy()
    expect(contact.bluesky).toBeTruthy()
  })

  it('has a non-empty work history', () => {
    expect(DATA.work.length).toBeGreaterThan(0)
  })

  it('every work entry has required fields', () => {
    for (const job of DATA.work) {
      expect(job.company).toBeTruthy()
      expect(job.title).toBeTruthy()
      expect(job.start).toBeTruthy()
      expect(job.end).toBeTruthy()
      expect(job.logoUrl).toBeTruthy()
      expect(job.logoDarkUrl).toBeTruthy()
    }
  })
})
```

- [ ] **Step 2: Run tests**

Run: `npm test`
Expected: All tests pass (blog + projects + resume)

- [ ] **Step 3: Commit**

```bash
git add src/data/resume.test.ts
git commit -m "add resume data tests"
```

---

### Task 5: GitHub Actions CI workflow

**Files:**
- Create: `.github/workflows/ci.yml`

Three parallel jobs: `typecheck`, `test`, `build`. All share the same setup pattern (checkout, Node 22, npm ci with cache). Triggered on push to main and pull requests.

- [ ] **Step 1: Create `.github/workflows/ci.yml`**

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  typecheck:
    name: Type Check
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run typecheck

  test:
    name: Tests
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm test

  build:
    name: Build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
```

- [ ] **Step 2: Verify the workflow is valid YAML**

Run: `cd /Users/samgutentag/Developer/portfolio && cat .github/workflows/ci.yml | head -5`
Expected: Shows the first 5 lines of valid YAML starting with `name: CI`

- [ ] **Step 3: Run all three checks locally to confirm they'll pass in CI**

Run these sequentially:
```bash
cd /Users/samgutentag/Developer/portfolio && npm run typecheck && npm test && npm run build
```
Expected: All three pass

- [ ] **Step 4: Commit**

```bash
git add .github/workflows/ci.yml
git commit -m "add CI workflow with typecheck, test, and build jobs"
```
