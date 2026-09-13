# Claude Code Prompt — Build the BraceWorks Consulting website (braceworks.ai)

**How to use this file:** Put this file and `BraceWorks_Website_Content.md` in the root of a new empty project folder, open that folder in Claude Code, and paste everything below the line into your first message to Claude Code.

---

I want you to build a complete, production-ready marketing website for a cybersecurity consulting firm called **BraceWorks Consulting**, intended to be deployed at the domain **braceworks.ai**. All the page copy already exists in a file called `BraceWorks_Website_Content.md` in this same folder — read that file first and use its content verbatim for headlines, body copy, and page structure. Do not invent, paraphrase away, or embellish the copy in that file — it has been deliberately written to avoid marketing hype and to stay legally careful about certain claims (explained below). If something in the content file is ambiguous, ask me rather than inventing text.

## 1. Tech stack

- **Astro** (latest stable version) as the site framework, with the **Tailwind CSS** integration for styling.
- Output as a fully static site (`output: 'static'` in `astro.config.mjs`) — no server-side rendering needed, this is a marketing site.
- TypeScript for any component logic.
- No CMS, no database, no backend — this is a static site with one exception: the Contact page form (see section 6).

## 2. Project structure

Set up a clean Astro project with this structure:

```
src/
  layouts/
    BaseLayout.astro       # <html>, <head> with SEO meta tags, header, footer, slot
  components/
    Header.astro           # site nav: Home, About, Services (dropdown to 3 sub-pages), Methodology, Insights, Resources, Contact
    Footer.astro           # site-wide footer per content file section 9
    Hero.astro
    ServiceCard.astro       # reusable card for the 3 service summaries on Home
    MethodologyStep.astro   # reusable component for each BRACE letter block
    CTAButton.astro
  pages/
    index.astro
    about.astro
    services/
      index.astro           # optional services overview/index if useful, or redirect to cloud-security-posture-assessment
      cloud-security-posture-assessment.astro
      generative-ai-security.astro
      cloud-security-governance.astro
    methodology.astro
    insights.astro
    resources.astro
    contact.astro
  styles/
    global.css
public/
  favicon.svg
  robots.txt
  og-image.png             # placeholder — see section 7
astro.config.mjs
```

Map each page above to the matching section of `BraceWorks_Website_Content.md` (Section 2 = Home, Section 3 = About, Section 4.1/4.2/4.3 = the three service pages, Section 5 = Methodology, Section 6 = Insights, Section 7 = Resources, Section 8 = Contact, Section 9 = Footer). Ignore Section 0 of that file ("Notes for Leandro") — that section is internal instructions for me, not website content, and must never appear on any live page.

## 3. Design system

This is a B2B executive/technical advisory site — not a startup SaaS landing page and not a "hacker" aesthetic. Avoid neon green-on-black, matrix/binary-rain imagery, hoodie-and-mask stock photos, or generic shield/lock clip art.

- **Palette:** a light, professional base — off-white/near-white background (`#FAFAF9` or similar), deep charcoal/near-black text (`#1A1D21`), one confident accent color in the navy-to-slate-blue family (e.g., `#1E3A5F` to `#2D5F8A` range) for links, buttons, and highlights, and a muted secondary tone for borders/dividers. Keep the footer a solid deep navy/charcoal with light text for contrast.
- **Typography:** a clean, modern sans-serif for both headings and body — use **Inter** (via `@fontsource/inter` or Google Fonts) throughout. Generous line-height on body copy (1.6+). Headings should feel confident but not oversized/startup-flashy — this audience is enterprise security and compliance buyers.
- **Layout:** generous whitespace, a max content width around 1200px, clear visual hierarchy, section dividers instead of heavy borders/shadows. Cards (for the 3 service summaries, the 5 BRACE steps) should be simple — a subtle border or very light shadow, not skeuomorphic.
- **Imagery:** do not use stock photography of people in hoodies, padlocks, or binary code. Prefer abstract geometric SVG patterns (grid lines, subtle network-node motifs) as section backgrounds/accents, or none at all — clean typography-led design is preferred over filler imagery.
- **Icons:** use a simple line-icon set (e.g., Lucide icons) for the three service pillars and the BRACE steps — consistent stroke width, no filled/glossy icons.

## 4. Responsiveness & accessibility

- Mobile-first. Test/design for 375px, 768px, 1024px, and 1440px+ widths.
- Navigation collapses to a hamburger menu below ~768px.
- Semantic HTML throughout (`<nav>`, `<main>`, `<header>`, `<footer>`, proper heading hierarchy — one `<h1>` per page).
- All images need meaningful `alt` text (or `alt=""` if purely decorative).
- Color contrast must meet WCAG AA at minimum for all text/background combinations.
- All interactive elements (nav links, buttons, form fields) must be keyboard-navigable with visible focus states.

## 5. SEO

- Use the exact "Meta title" and "Meta description" given for each page in the content file.
- Add Open Graph tags (`og:title`, `og:description`, `og:image`, `og:type=website`) and Twitter Card tags on every page, driven from the same per-page title/description plus a single shared `og-image.png` placeholder (1200×630) — generate a simple placeholder graphic with the BraceWorks name and tagline on the navy background if you don't have a real one; do not fabricate a logo that looks like a finished brand mark, keep it simple/typographic.
- Generate `sitemap.xml` (Astro's `@astrojs/sitemap` integration) and a basic `robots.txt` allowing all crawling.
- Use semantic, descriptive URL slugs exactly as shown in the file structure above.
- Add `lang="en"` on the `<html>` element (site content is in English).

## 6. Contact page form

There is no backend in this project. Implement the Contact form (Name, Email, Organization, Message fields from the content file) as a static HTML form that POSTs to a placeholder form-handling endpoint — use **Formspree**-style integration (`<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">`) and clearly mark `YOUR_FORM_ID` as a placeholder I need to replace with a real Formspree (or similar) endpoint after creating an account. Do not invent a working backend, a fake email address, or a fake API key. Add a short HTML comment in the source noting this needs a real form-handling service connected before launch.

## 7. Content and compliance guardrails — do not deviate from these

These rules came from careful legal/immigration review of this specific business and must be respected exactly as written, even if they seem unusual for a marketing site:

- **Do not add any "Book a consultation," "Get a quote," "Hire us today," or similar active sales/solicitation language anywhere on the site**, even if it would be normal for a typical consulting site. The Contact page copy must stay exactly as informational as written in the content file ("get in touch," "we'd like to hear from you") — do not upgrade it to a stronger sales CTA on your own initiative.
- **Do not use any Fortinet logo, trademark, or brand color scheme anywhere on the site.** Fortinet is mentioned once, in plain text only, in the About page bio — nothing more.
- **Do not fabricate client logos, testimonials, case studies, press mentions, or "as seen in" bars.** If you think the site "needs" social proof to look credible, leave that space out entirely rather than inventing placeholder logos or quotes — an empty, honest site is the requirement here, not a padded one.
- **Do not backdate or invent blog posts on the Insights page.** Render the "planned topics" list from the content file exactly as a list of upcoming topics, clearly not yet published — do not create fake article pages with fake dates/authors.
- **Do not invent downloadable files for the Resources page.** List the deliverable names from the content file as descriptions of what an engagement produces — do not create fake PDF download links.
- Keep all page copy in English, matching the content file exactly (headlines, body text, CTA labels). You may adjust HTML structure/markup, but not the wording, without checking with me first.

## 8. Deployment notes

- Set up the project so it builds cleanly with `npm run build` to a static `dist/` folder.
- Add a short `README.md` explaining: how to run locally (`npm install && npm run dev`), how to build (`npm run build`), and that the recommended deployment targets are Vercel, Netlify, or Cloudflare Pages (any of these support static Astro output with zero config) — with a note that the `braceworks.ai` domain needs to be pointed at whichever host is chosen via DNS (A/CNAME records), which is a step I'll do manually after deployment.
- Do not set up any deployment credentials, hosting accounts, or DNS changes yourself — just leave the project deploy-ready with clear instructions.

## 9. What to deliver

1. A working Astro + Tailwind project implementing every page above, using the exact copy from `BraceWorks_Website_Content.md`.
2. A short `README.md` with local dev, build, and deployment instructions as described in section 8.
3. A brief summary at the end of what you built and any open decisions you need from me (e.g., the real Formspree endpoint, a real OG image, whether to add a logo mark).

Start by reading `BraceWorks_Website_Content.md` in full, then scaffold the Astro project, then build pages in this order: BaseLayout + Header/Footer → Home → About → the 3 Services pages → Methodology → Insights → Resources → Contact. Ask me before making any content or structural decision not covered by this prompt or by the content file.
