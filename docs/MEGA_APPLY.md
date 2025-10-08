# Orion Apex — v2.1 Mega Bundle (Code + Content)

## Apply
```bash
git checkout -b feat/v2.1-upgrade
unzip /mnt/data/orion_v2_1_mega_bundle.zip -d .
git add components content public docs
git commit -m "feat(v2.1): code+content — Hero, FilterBar, MDX, OG, Mission/Vision, Core Ops, Taglines"
git push -u origin feat/v2.1-upgrade
```
Then wire:
- `<Hero />` in `pages/index.js`
- `<FilterBar />` in `pages/freelance/index.js`
- Import `mission-vision.md` on `/about`
- Append `core-operations.md` on `/services`
- Use `/public/taglines.json` for hero tagline (optional)
