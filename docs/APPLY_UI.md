# Apply (Mega + UI Skin)
```bash
git checkout -b feat/v2.1-ui-skin
unzip /mnt/data/orion_v2_1_mega_bundle_ui.zip -d .
git add components styles docs
git commit -m "style(ui): adopt Trading UI skin (aurora/glass/buttons/badges/tables)"
git push -u origin feat/v2.1-ui-skin
```
Edit `_app.js` to import `@/styles/ui.css`.
Replace header with `<NavAurora />` or port classes to your Navbar.
Wrap sections in `<GlassCard>`; use `<SectionTitle>`. Use buttons/badges where appropriate.
