# LSWP Aid Website

## Pages
- `/administrators`: Administrator brief, aid categories, workflow, governance, and interactive 80% annual donation calculator.
- `/`: Student guide and application resources.

## Local development
Requires Node.js 22.13 or later and pnpm.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000/administrators.

## Production
```sh
pnpm build
pnpm start
```

## GitHub and Vercel
Extract this archive into your repository root, including `.gitignore`. Import the repository into Vercel; `vercel.json` provides the install and build commands. No environment variables or database are required.

The administrator page is at `/administrators`; the student guide remains at `/`.
