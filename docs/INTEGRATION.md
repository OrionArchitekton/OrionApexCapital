# Orion Apex — Trading UI Skin (Website Integration)

This brings the **Live Monitor** design system (aurora, glass cards, gold/maroon/navy accents) to your Next.js site.

## Files
- `styles/ui.css` — tokens + aurora/grid + glass/cards/buttons/badges/tables
- `components/NavAurora.tsx` — sticky header/nav variant
- `components/SectionTitle.tsx` — section header with divider
- `components/GlassCard.tsx` — glass card container
- `components/Buttons.tsx` — primary/secondary/ghost/danger
- `components/Badges.tsx` — cap/lift/ttl
- `components/ResponsiveTable.tsx` — styled table

## Wire-up (2 minutes)
1) Import global skin in `_app.js` (after Tailwind)
```js
import "@/styles/ui.css";
```
2) Replace your layout's header with `<NavAurora />` or integrate its classes into your `Navbar`.
3) Wrap sections with `<GlassCard>` and use `<SectionTitle>` for headings.
4) Use `<BtnPrimary/>`, `<BtnSecondary/>`, `<BadgeCap/>`, etc., in services/insights pages.
5) For tables (insights, case studies, etc.), render via `<ResponsiveTable/>`.

## Notes
- Matches the palette, glow, and motion style of your **Live Monitor / Portfolio / Trades** UIs.
- Fully compatible with your Tailwind setup and current components.
