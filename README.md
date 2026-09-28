# LSWP Aid

Next.js website for the Lasallian Student Welfare Program Aid.

## Pages
- `/administrators`: administrator presentation with program definition, three aid categories, four-step workflow, governance, and an interactive annual donation calculator (80% aid / 20% reserve).
- `/`: student guide with application links and a downloadable letter template.

The administrator workflow is Apply → Assess → Decide → Inform. It does not include forwarding to the Dean of Student Affairs. The Associate Dean remains a voting Committee member.

## Run locally
Requires Node.js 22.13 or later and pnpm.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000/administrators for the administrator brief.

## Production check
```sh
pnpm build
pnpm start
```

## GitHub and Vercel
Extract this ZIP and add its contents to the root of a GitHub repository, including `.gitignore`. Import that repository into Vercel. The included `vercel.json` configures installation and build commands. No environment variables or database are required.

The administrator page will be available at `https://YOUR-DEPLOYMENT/administrators`; the root remains the student guide.

The calculator uses illustrative user-entered amounts, not a live donation balance. The existing source fund is excluded from the calculation; restricted donations follow donor intent.
