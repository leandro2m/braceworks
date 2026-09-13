# BRACEWorks Cloud & AI Security Website

Marketing website for BRACEWorks Cloud & AI Security, built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Content is sourced verbatim from `BraceWorks_Website_Content.md` and lives directly in the codebase. There's no CMS and no external database.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Deployment

The site is deployed on [Vercel](https://vercel.com), connected to the `leandro2m/braceworks` GitHub repository. Every push to `main` triggers an automatic production deployment.

Once you're ready to go live on the `braceworks.ai` domain, add it under the project's Settings > Domains in Vercel, then point your DNS at Vercel following the instructions shown there. That step is manual and happens outside of this repository.

## Contact form

The contact form (`components/ContactForm.tsx`) submits to a Server Action (`app/contact/actions.ts`) that validates the fields and currently only logs submissions server-side. See the `// TODO` comment in `actions.ts` for where to wire in a real email/CRM provider (e.g., Resend, SendGrid, or Formspree) before launch.

## Project structure

- `app/` — routes (App Router), each with its own `metadata` export
- `components/` — shared UI components
- `lib/` — static content/data (nav links, service summaries, BRACE methodology steps)
- `app/sitemap.ts`, `app/robots.ts` — Next.js metadata routes
- `app/opengraph-image.tsx` — generated OG image
