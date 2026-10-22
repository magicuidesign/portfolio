<div align="center">
<img alt="Portfolio" src="https://github.com/dillionverma/portfolio/assets/16860528/57ffca81-3f0a-4425-b31d-094f61725455" width="90%">
</div>

# Portfolio [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdillionverma%2Fportfolio) [![Deploy to Wasmer](https://img.shields.io/badge/Deploy%20to-Wasmer-6B4EFF)](https://wasmer.io/apps/create?github=magicuidesign%2Fportfolio)

Built with next.js, [shadcn/ui](https://ui.shadcn.com/), and [magic ui](https://magicui.design/), deployed on Vercel.

# Features

- Setup only takes a few minutes by editing the [single config file](./src/data/resume.tsx)
- Built using Next.js 14, React, Typescript, Shadcn/UI, TailwindCSS, Framer Motion, Magic UI
- Includes a blog
- Responsive for different devices
- Optimized for Next.js and Vercel

# Getting Started Locally

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/dillionverma/portfolio
   ```

2. Move to the cloned directory

   ```bash
   cd portfolio
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Start the local Server:

   ```bash
   pnpm dev
   ```

5. Open the [Config file](./src/data/resume.tsx) and make changes

# Deploy on Wasmer

With the Deploy to Wasmer button above, Wasmer detects Next.js, runs the project's `build` script (`pnpm run build`) and serves the production build with Node.

The button builds this public repository as-is; it does not fork or copy it into your GitHub account. To customize your portfolio in [`src/data/resume.tsx`](./src/data/resume.tsx) (and blog posts in `content/`) and redeploy on every push, fork the repository and connect your fork from the Wasmer dashboard.

No environment variables are required.

# License

Licensed under the [MIT license](https://github.com/dillionverma/portfolio/blob/main/LICENSE.md).
