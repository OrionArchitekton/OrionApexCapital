# Orion Apex — Content Add-On (Mission/Vision + Core Ops + Taglines)

## Files
- `content/pages/mission-vision.md` — import on `/about`
- `content/sections/core-operations.md` — append to `/services`
- `public/taglines.json` — optional hero/SEO rotation

## Suggested Wiring
### /about (mission-vision)
Use your existing markdown loader (gray-matter) to render `mission-vision.md` beneath the About intro.

### /services (core-operations)
Load and render `core-operations.md` at the bottom of the services page.

### Optional: Hero tagline rotation
```js
// components/Hero.js
import taglines from "@/public/taglines.json";
const lines = [taglines.signature, taglines.short, taglines.micro];
// rotate or pick one randomly on mount
```

## Apply
```bash
unzip /mnt/data/orion_v2_1_content_addon.zip -d .
git add content/pages content/sections public/taglines.json docs
git commit -m "content: add Mission/Vision, Core Ops, tagline suite"
git push
```
