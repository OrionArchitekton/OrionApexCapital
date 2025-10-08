PR: Adopt Trading UI Skin + v2.1 Site Enhancements (Branding Final)

Branch: feat/v2.1-ui-skin-branding
Scope: Unify website visuals with the Trading UI console, finalize branding tokens, and ship the v2.1 upgrades (Hero, Freelance filters, MDX post, OG images, Mission/Vision & Core Ops content).

🎯 Goals

Make the marketing site look and feel exactly like the Trading UI (aurora field, glass/glow cards, gold/maroon/navy palette).

Finalize public-facing branding (typography hierarchy, buttons, badges, tables).

Ship v2.1 enhancements and content for credibility and shareability.

✅ Summary of Changes
1) Trading UI Skin (global)

Add styles/ui.css (brand tokens, aurora, grid, glass cards, buttons, badges, tables).

App shell: import the skin in pages/_app.js.

Layout: layer aurora/grid and use the Trading UI header when available.

2) Header / Layout

Add components/NavAurora.tsx (Trading UI header).

Update components/Layout.js to:

keep SEO/a11y components,

include aurora/grid layers,

prefer NavAurora with fallback to existing NavBar.

3) Homepage polish

Add components/Hero.js (motion-safe hero) and apply to /.

OG images for better shares (home/services/insights).

4) Freelance page filters

Add components/FilterBar.tsx and enable client-side filtering (Industry/Outcome).

5) MDX pipeline showcase

Add MDX insight post orion-confirm-under-the-hood.mdx (uses <Callout />).

Add components/Callout.tsx.

6) Content & Branding copy

Add content/pages/mission-vision.md (About).

Add content/sections/core-operations.md (Services).

Add public/taglines.json (signature/short/micro taglines).

7) UI primitives for reuse (optional)

Add GlassCard.tsx, SectionTitle.tsx, Buttons.tsx, Badges.tsx, ResponsiveTable.tsx.

🗂 Files Added/Updated (high-level)
styles/ui.css                               # Trading UI skin (tokens + aurora + glass + components)
pages/_app.js                               # imports ui.css and wraps app in aurora/grid layers
components/Layout.js                        # prefers NavAurora; adds Trading UI background
components/NavAurora.tsx                    # Trading UI header
components/Hero.js                          # refined homepage hero
components/FilterBar.tsx                    # freelance filters
components/Callout.tsx                      # MDX callout
components/GlassCard.tsx                    # glass card wrapper
components/SectionTitle.tsx                 # section header + divider
components/Buttons.tsx                      # primary/secondary/ghost/danger buttons
components/Badges.tsx                       # badges (cap/lift/ttl)
components/ResponsiveTable.tsx              # styled table
public/og/og-home.png
public/og/og-services.png
public/og/og-insights.png
public/taglines.json
content/pages/mission-vision.md
content/sections/core-operations.md
content/posts/orion-confirm-under-the-hood.mdx

🔧 Implementation Notes (diffs to apply)
A) pages/_app.js
import "@/styles/globals.css";
import "@/styles/ui.css";   // Trading UI skin

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="app-bg">
      <div className="aurora-field" />
      <div className="sky-grid" />
      <Component {...pageProps} />
    </div>
  );
}

B) components/Layout.js
- import SEOHead from "./SEOHead";
- import NavBar from "./NavBar";
- import Footer from "./Footer";
- import SkipLink from "./SkipLink";
- import { ScrollProgress } from "./ScrollProgress";
- import { BackToTop } from "./BackToTop";
+ import SEOHead from "./SEOHead";
+ import Footer from "./Footer";
+ import SkipLink from "./SkipLink";
+ import { ScrollProgress } from "./ScrollProgress";
+ import { BackToTop } from "./BackToTop";
+ let Header;
+ try { Header = require("./NavAurora").default; } catch { Header = require("./NavBar").default; }

 export default function Layout({ title, description, url, canonical, children }) {
   return (
     <>
       <SEOHead title={title} description={description} url={url} canonical={canonical} />
       <SkipLink />
       <ScrollProgress />
-      <div className="min-h-screen flex flex-col">
-        <NavBar />
-        <main id="main" className="flex-1">{children}</main>
-        <Footer />
-      </div>
+      <div className="app-bg min-h-screen flex flex-col">
+        <div className="aurora-field" />
+        <div className="sky-grid" />
+        <Header />
+        <main id="main" className="flex-1">{children}</main>
+        <Footer />
+      </div>
       <BackToTop />
     </>
   );
 }

C) Home hero (if old hero markup exists in pages/index.js)
import Hero from "@/components/Hero";
// …
<Hero />

D) Freelance filters (in pages/freelance/index.js)
import { useState } from "react";
import FilterBar from "@/components/FilterBar";

const [sel, setSel] = useState({ industry: "", outcome: "" });
const industries = Array.from(new Set(cases.flatMap(c => c.industry ? [c.industry] : [])));
const outcomes   = Array.from(new Set(cases.flatMap(c => c.outcome ? [c.outcome] : [])));
const filtered   = cases.filter(c =>
  (sel.industry === "" || c.industry === sel.industry) &&
  (sel.outcome  === "" || c.outcome  === sel.outcome)
);

<FilterBar industries={industries} outcomes={outcomes}
  industry={sel.industry} outcome={sel.outcome} onChange={setSel} />

{/* render `filtered` grid */}

🧪 QA Checklist (must pass)

Brand skin renders on every route: /, /about, /services, /insights, /insights/[slug], /freelance, /contact, /legal.

Header: Trading UI header visible; mobile menu works; focus states meet WCAG AA.

Motion: Reduced motion honored (no aggressive animations with prefers-reduced-motion).

Freelance filters: Selecting Industry/Outcome updates cards client-side.

MDX post: /insights/orion-confirm-under-the-hood renders with <Callout />.

OG images: Sharing Home/Services/Insights shows new images.

Content: Mission/Vision shows under About; Core Operations appended to Services.

Legal: Disclaimers intact (educational, no solicitation).

🖼 Suggested Screenshots (attach in PR)

Home Hero (desktop + mobile)

Nav/Header hover & focus states

Freelance filters interaction

MDX post callout block

About (Mission/Vision) + Services (Core Operations)

Lighthouse performance & a11y scores

🚀 How to Run
# install deps and start
npm install
npm run dev

🔙 Rollback Plan

Revert this merge commit; no schema migrations or irreversible changes.

CSS/JS only; no DB or infra impact.

📌 Notes for Agent

If NavAurora.tsx is not preferred, keep NavBar but port .glass container, border glow, and spacing from ui.css.

Keep all existing SEO components and legal copy; this is a visual/theming + content uplift.