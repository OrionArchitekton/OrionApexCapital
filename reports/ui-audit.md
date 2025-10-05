# Orion Apex Capital — Visual Audit & Uplift Plan

**Date:** 2025-10-05

## Stack Snapshot

- **Framework**: Next.js 14 (Pages Router) with React 18.
- **Styling**: Tailwind CSS 3.x with custom `globals.css` utilities and component-level class usage.
- **Component Library**: Bespoke components under `components/` (Hero, Layout, Footer, Cards) using framer-motion for key animations.
- **Content Sources**: Markdown-driven `content/` for posts and case studies.
- **Assets**: Brand marks duplicated under `assets/branding/` and `public/images/branding/`; hero backgrounds currently raster JPGs.

## Existing Visual Identity

- **Color usage** leans on navy / teal / gold but lacks codified tokens or accessible pairings.
- **Typography**: Global Inter import only; no dedicated display face for headlines.
- **Imagery**: Landing hero uses static JPG background from brand folder; other sections rely on gradients and icons.
- **Social assets**: Legacy OG/Twitter images in `public/images/branding/` do not reflect the updated crest/tagline.
- **Favicon set**: Present under `public/images/branding`, but not referenced via centralized metadata helper.

## Upgrade Targets & Gaps

| Surface | Current State | Gap | Action |
| --- | --- | --- | --- |
| Hero (`components/Hero.js` & index hero) | Gradient + stock background JPG | Needs brand crest overlay, aerospace ambience, accessible contrast tokens | Rebuild hero section with `bg-astro`, overlay gradient, and CTA styling using new tokens. |
| Home feature cards (`pages/index.js`) | Gradient states, no photography | Introduce curated finance/exploration photo via manifest and new FeatureCard component | Wire to `assets/media-manifest.json` lookup and optimized `<Image>` usage. |
| Case study / CTA visuals | Pure CSS gradients, no media | Requires ambient motion/video block for premium feel | Add `AmbientVideo` component with curated loop. |
| Footer | Basic layout with minimal branding | Increase brand motifs, background shading, focus treatment | Apply surface tokens, refine typography, add contact emphasis. |
| Global styles | Hard-coded colors and background images | No theme tokens, root CSS variables missing | Extend Tailwind theme & `globals.css` with palette, fonts, gradients. |
| Metadata | `SEOHead` references outdated OG assets | Need new OG image path and consistent metadata defaults | Update metadata config and generate OG asset workflow. |
| Media pipeline | No optimization tooling | Need AVIF/WebP generation & manifest for licensing | Add Node scripts for fetch/optimize/audit, document assets & attributions. |

## Phase Plan

1. **Theme Foundations** – Implement Tailwind tokens, font stacks, and global CSS utilities (`bg-astro`, `.overlay-gradient`, focus states).
2. **Media Tooling** – Scaffold scripts (`media:fetch`, `img:optimize`, `media:audit`), establish `/public/media` structure, and generate `assets/media-manifest.json` + `ATTRIBUTIONS.md`.
3. **Curate Assets** – Select license-safe media (Pexels/Unsplash/Pixabay), record metadata, download via tooling (documented since direct download restricted here).
4. **Component Upgrades** – Rebuild hero, feature tiles, CTA, footer, ambient video block, and ensure `<Image>`/`<video>` usage meets performance & accessibility guidelines.
5. **SEO & Social Proof** – Update OG/Twitter metadata, add crest-forward OG artwork via Sharp pipeline, align favicons.
6. **QA & Reporting** – Verify contrast, focus states, reduced motion support; run Lighthouse locally (instructions in PR) and include before/after screenshots.

## Notes & Assumptions

- Converting Tailwind config to TypeScript (`tailwind.config.ts`) for better DX while keeping compatibility with current tooling.
- All new media additions will land under `public/media/` with responsive AVIF/WebP variants generated to `public/optimized/`.
- Scripts will use `sharp`; ensure `npm install sharp` post-update to satisfy dependencies.
- Actual media downloads and Lighthouse runs must happen locally (documented in PR).
