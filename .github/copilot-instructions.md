# Orion Apex Capital — Copilot Guidelines

## Architecture & Routing
- Next.js 14 uses the Pages Router; create routes under `pages/**` with `getStaticProps` for markdown-backed pages and wrap every route in `components/Layout.js` for SEO, header, footer, scroll, and back-to-top utilities.
- `pages/_app.js` imports `styles/globals.css` and `styles/ui.css`, manages the background video (`BACKGROUND_VIDEO_SRC`) and motion preferences; keep the `allowMotion`/`autoplayFailed` logic intact when touching background behavior.
- `components/Layout.js` lazy-loads `NavAurora.tsx` with fallback to `NavBar.js` and hosts the aurora/grid overlays; avoid stripping the `site-shell` and `site-main` wrappers because they anchor the Trading UI skin.

## Content Pipeline
- Blog posts live in `content/posts/*.md(x)` and load through `lib/posts.js`, which returns MDX via `next-mdx-remote` plus `reading-time` strings for listing cards in `/pages/insights`.
- Case studies reside in `content/cases/*.md`; `lib/cases.js` produces HTML for `/pages/freelance` filtering and detail pages (`industry`, `sector`, `outcome`, `tags` fields drive the UI).
- The services page pulls long-form copy from `content/sections/core-operations.md` using `remark`; when adding sections update the markdown file rather than hard-coding in JSX.

## UI System
- Tailwind is extended in `tailwind.config.ts` with `brand.*`, `surface.*`, and `text.*` tokens plus the `display` typeface; reference these tokens or classes from `styles/ui.css` instead of custom hex values.
- `styles/ui.css` defines the aurora field, glass cards, button variants (`.btn-*`), badges, and responsive tables; reuse these classes to stay consistent with the Trading UI aesthetic.
- Shared primitives such as `Container.tsx`, `Section.tsx`, `Buttons.tsx`, `Badges.tsx`, `GlassCard.tsx`, and `ResponsiveTable.tsx` encode spacing, animation, and reduced-motion fallbacks—prefer composing them over bespoke layouts.

## SEO, Analytics & Schema
- `components/SEOHead.js` centralizes canonical URLs, OG/Twitter images, and favicon sets; always supply `title`, `description`, `url`, and `image` for new pages.
- Structured data helpers in `lib/seo/jsonldService.js` emit JSON-LD for `/services` and `/freelance`; extend those generators when new offerings are added instead of embedding raw JSON.
- Client analytics funnel through `lib/analytics.js` (`track`) and respect cookie consent set by `components/CookieConsent.js` (`consent_analytics` key); gate new events behind the same pattern.

## APIs & Environment
- `/pages/api/contact.js` enforces POST-only submissions, rate limits via `lib/rateLimit.js`, logs through `lib/logger.js`, and optionally sends email with Resend (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`).
- Homepage KPI badges read `NEXT_PUBLIC_BADGE_{1..3}_LABEL` / `VALUE` envs; override branding via env variables rather than editing JSX constants.
- Store sensitive values in `.env.local` without the `NEXT_PUBLIC_` prefix unless they must ship to the client; see `SETUP.md` for the canonical list.

## Tooling & Scripts
- Core commands: `npm run dev`, `npm run build`, `npm run start`, `npm run lint`, and `npm run sitemap` (regen sitemap/robots using `next-sitemap.config.js`).
- Media utilities live in `scripts/` (`media:fetch`, `img:optimize`, `media:audit`); keep `assets/media-manifest.json` aligned when adding images or videos.
- `scripts/patch-sharp-wasm.mjs` runs postinstall to stabilize Sharp WASM on Windows; revisit the patch only when bumping `sharp` or its wasm dependency.

## Collaboration Tips
- Imports support the `@/*` alias via `jsconfig.json`; prefer it over relative chains.
- Maintain accessibility affordances (skip link, focus states, reduced-motion checks) when editing navigation (`NavAurora.tsx` listens to `router.events` to close the mobile drawer on route changes).
- Cross-check copy and brand tone against `README_V2.md`, `Current_SITE_STRUCTURE.md`, and `V2_SITE_SPECIFICATION.md` before introducing new content sections.
