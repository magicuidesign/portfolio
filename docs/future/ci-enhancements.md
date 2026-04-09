# CI Enhancements — Future Ideas

Things to add to the portfolio CI pipeline once the baseline (tests + typecheck + build) is solid. Each of these is a standalone addition — pick whichever is interesting next.

---

## Linting & Formatting

Add ESLint + Prettier as a CI job. Enforces consistent style without relying on editor config.

- **ESLint:** `@eslint/js` + `typescript-eslint` + `eslint-plugin-react` — flat config
- **Prettier:** Run as a check (`prettier --check .`), not a fixer
- **CI job:** Parallel with the existing three
- **Learning value:** Configuring ESLint flat config, understanding how lint-staged / pre-commit hooks complement CI

## Dead Link Checking

Crawl the built HTML output for broken internal links and missing assets.

- **Tool:** `lychee` (Rust, fast, GitHub Action available) or `htmltest`
- **Approach:** Run after `next build`, point at the `.next/` output or `out/` if using static export
- **CI job:** Sequential after build (needs build artifacts)
- **Learning value:** Job dependencies with `needs:`, artifact passing between jobs

## Lighthouse CI

Run Lighthouse against built pages, fail if scores drop below thresholds.

- **Tool:** `@lhci/cli` with `lhci autorun`
- **Approach:** Build site, start server, run Lighthouse against key pages (/, /blog, /dev)
- **CI job:** Sequential after build
- **Learning value:** Service containers, background processes in Actions, score thresholds as quality gates

## Test Coverage Reporting

Post test coverage as a PR comment so regressions are visible without opening the Actions log.

- **Tool:** Vitest's built-in coverage (`@vitest/coverage-v8`), plus a comment action
- **Approach:** `vitest run --coverage`, upload as artifact, use an action to post summary to PR
- **CI job:** Extend the existing test job
- **Learning value:** Artifact upload/download, PR comment APIs, coverage thresholds

## Visual Regression

Screenshot key pages and diff against baselines. Catches CSS regressions that unit tests can't.

- **Tool:** Playwright with `toHaveScreenshot()`
- **Approach:** Build and serve the site, capture screenshots of /, /blog, /dev, compare against committed baselines
- **CI job:** Sequential after build
- **Learning value:** Playwright setup, snapshot testing patterns, updating baselines on intentional changes
- **Trade-off:** Highest maintenance cost — screenshot diffs break on any visual change, intentional or not

## Deploy-on-Merge

Auto-deploy to Vercel/Cloudflare/GitHub Pages when main gets a new commit and all checks pass.

- **Approach:** Add a `deploy` job with `needs: [typecheck, test, build]`
- **Learning value:** The full CI/CD pipeline — gating deploys on test results, environment secrets, deployment status checks
