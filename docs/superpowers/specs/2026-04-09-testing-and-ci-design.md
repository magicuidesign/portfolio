# Testing & CI Design

**Goal:** Add unit tests and GitHub Actions CI to the portfolio, covering the data pipeline and build correctness.

**Approach:** Layered CI with Vitest unit tests on the data layer, TypeScript type checking, and Next.js build verification — three parallel jobs.

---

## Test Framework

- **Runner:** Vitest
- **Config:** `vitest.config.ts` at repo root
- **Path aliases:** `@/` resolves to `src/` (matching tsconfig)
- **New dev dependency:** `vitest`
- **No DOM/component testing** — all tests target data functions and constants

### npm scripts

```json
{
  "test": "vitest run",
  "test:watch": "vitest",
  "typecheck": "tsc --noEmit"
}
```

---

## Test Coverage

### 1. Blog data pipeline — `src/data/blog.test.ts`

Tests for `getBlogPosts()` from `src/data/blog.ts`:

- Returns an array of posts (non-empty, since the blog has published content)
- Posts are sorted newest-first by `publishedAt`
- Every post has required frontmatter: `title`, `publishedAt`, `summary`
- Draft posts (`draft: true`) are excluded from results
- Each post has a `slug` derived from the filename

These tests run against the real `content/blog/` directory — no mocks. If a blog post has malformed frontmatter, the test catches it.

### 2. Projects data — `src/data/projects.test.ts`

Tests for the `SIDE_PROJECTS` constant from `src/data/projects.ts`:

- Array is non-empty
- Every entry has all required fields (slug, title, description, emoji, color, liveUrl, repoUrl)
- No duplicate slugs
- URLs are well-formed (start with `https://`)

### 3. Resume data — `src/data/resume.test.ts`

Tests for the `DATA` constant from `src/data/resume.ts`:

- Has required top-level fields (name, url, currentRole, currentCompany, bio)
- Contact object has all expected keys with non-empty values
- Work history is non-empty
- Each work entry has required fields (company, title, start, end, logoUrl, logoDarkUrl)

---

## GitHub Actions Workflow

**File:** `.github/workflows/ci.yml`

**Triggers:**
- `push` to `main`
- `pull_request` targeting `main`

### Jobs (all run in parallel)

#### `typecheck`
1. Checkout code
2. Setup Node 22
3. `npm ci` (with dependency cache)
4. `npx tsc --noEmit`

#### `test`
1. Checkout code
2. Setup Node 22
3. `npm ci` (with dependency cache)
4. `npm test`

#### `build`
1. Checkout code
2. Setup Node 22
3. `npm ci` (with dependency cache)
4. `npm run build`

### Caching strategy

Use `actions/setup-node@v4` with `cache: 'npm'` — this caches the npm global store based on `package-lock.json` hash. Shared across all three jobs.

---

## File Structure

| File | Action | Purpose |
|------|--------|---------|
| `vitest.config.ts` | Create | Vitest configuration with path aliases |
| `src/data/blog.test.ts` | Create | Blog pipeline tests |
| `src/data/projects.test.ts` | Create | Projects data validation |
| `src/data/resume.test.ts` | Create | Resume data validation |
| `.github/workflows/ci.yml` | Create | CI workflow with 3 parallel jobs |
| `package.json` | Modify | Add vitest dep, test/typecheck scripts |

---

## Out of Scope (see docs/future/ci-enhancements.md)

- ESLint / Prettier enforcement
- Dead link checking
- Lighthouse CI / performance scores
- Test coverage reporting as PR comments
- Visual regression testing
- Deploy-on-merge automation
