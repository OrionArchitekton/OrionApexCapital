# Insights Visual Upgrade — Progress Report

Last updated: 2025-10-05

## Summary

- Standardized all insights (`content/posts/*.mdx`) with the new layout suite (`InsightHero`, `InsightBody`, `InsightHighlight`, `InsightCTA`, etc.), reading-ready hierarchy, and two curated visuals per article.
- Introduced `InsightPreviewCard` to power both the insights index and homepage preview grid with hero imagery, reading time, and tag metadata.
- Refreshed the insights index (`pages/insights/index.js`) to showcase the new card design, improving scannability and highlighting featured pieces.
- Updated `lib/posts.js` so `getAllPosts` now returns `readingTime`, enabling consistent metadata across listings.

## Media & Documentation

- Ensured every hero asset used in previews is recorded in `assets/media-manifest.json` with clarified intent (`hero & preview card`).
- Synced `ATTRIBUTIONS.md` to mirror the new usage notes and confirm licensing coverage for all hero, body, and takeaway visuals.
- Inline alt text across MDX files now matches the curated media descriptions for accessibility and licensing accuracy.

## Component & Page Changes

- Added `components/insights/InsightPreviewCard.tsx` for reusable preview styling (hero image, featured badge, reading time, CTA).
- Exported the new component via `components/insights/index.ts` for broader reuse.
- Replaced legacy card markup on both `pages/insights/index.js` and the homepage "Latest Insights" section (`pages/index.js`) with the shared component.

## Next Steps

1. Continue auditing for any remaining legacy Markdown posts or rogue imagery.
2. Expand automated tests around `getAllPosts` once additional metadata (e.g., categories) is introduced.
3. Consider a lightweight CMS entry checklist leveraging this manifest to keep future uploads aligned.

## Validation

- `npm run lint` — ✅ (existing warnings in 404/500/freelance pages remain unchanged)
- Build step pending after final documentation touch-ups.
