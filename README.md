# LSWP Administrator Website

Standalone administrator website, based on the local `/administrators` page.
The administrator brief is now the homepage (`/`). `/administrators` redirects there.
Includes aid categories, the four-step workflow, committee responsibilities, and the interactive 80% aid / 20% reserve calculator. The student guide is not included.

## Run
Requires Node.js 22.13+ and pnpm.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Build
```sh
pnpm build
pnpm start
```

## Deploy
Extract the contents into the root of your GitHub repository, including `.gitignore`, then import the repository into Vercel. The included `vercel.json` provides build settings. No environment variables or database are needed.
