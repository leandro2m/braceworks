# BRACEWorks Cloud & AI Security — Website

Marketing website for BRACEWorks Cloud & AI Security, built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Content is sourced verbatim from `BraceWorks_Website_Content.md` and lives directly in the codebase — no CMS, no external database.

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

**Recommended: [Vercel](https://vercel.com).** It's zero-config for Next.js App Router projects, including Server Actions (used by the contact form) — connect the repository and deploy.

**Alternative: Netlify.** Netlify can host this project, but Server Actions require Netlify's [Next.js runtime adapter](https://docs.netlify.com/frameworks/next-js/overview/) to work correctly. Confirm the adapter is enabled before relying on the contact form in production.

Once deployed, point the `braceworks.ai` domain at your chosen host via DNS. This is a manual step to be done outside of this project — no deployment credentials, hosting accounts, or DNS changes are configured here.

## Contact form

The contact form (`components/ContactForm.tsx`) submits to a Server Action (`app/contact/actions.ts`) that validates the fields and currently only logs submissions server-side. See the `// TODO` comment in `actions.ts` for where to wire in a real email/CRM provider (e.g., Resend, SendGrid, or Formspree) before launch.

## Project structure

- `app/` — routes (App Router), each with its own `metadata` export
- `components/` — shared UI components
- `lib/` — static content/data (nav links, service summaries, BRACE methodology steps)
- `app/sitemap.ts`, `app/robots.ts` — Next.js metadata routes
- `app/opengraph-image.tsx` — generated OG image
