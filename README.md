
# Orion Apex Capital — Website

A modern, trust-focused website for **Orion Apex Capital** built with **Next.js + TailwindCSS**.

**Note:** Nav labels: Freelance Work is a Services offering.

## ▶️ Quickstart

```bash
# 1) install
npm i

# 2) run locally
npm run dev

# 3) build & run
npm run build
npm start
```

## 📦 Deployment (Vercel recommended)

1. Push this folder to a Git repo.
2. Import the repo into Vercel.
3. Add environment variables (optional, for contact form email):
   - `RESEND_API_KEY` — your Resend key (https://resend.com)
   - `CONTACT_TO_EMAIL` — where contact form messages should arrive (e.g., contact@orionapexcapital.com)
4. Deploy.

> If `RESEND_API_KEY` is not set, contact messages are logged to server console.

## 🧱 Structure

- `pages/` — routes (Home, About, Services, Insights blog, Personal Bio, Contact, Legal)
- `pages/api/` — API routes for contact + newsletter
- `components/` — UI components
- `content/posts/` — Markdown blog posts
- `public/images/` — SVG graphics, favicon, and placeholders
- `styles/` — Tailwind and custom CSS

## 🔍 SEO Files

- `public/robots.txt` — allows all agents and points to the sitemap
- `public/sitemap.xml` — includes absolute URLs using `https://www.orionapexcapital.com`

We use static files served from `public/` (not App Router generators). When routes change, update `public/sitemap.xml` to reflect additions/removals so that core pages remain discoverable. If you prefer generation, this repo includes `next-sitemap`; you can run:

```bash
npm run sitemap
```

This will regenerate `sitemap.xml` (and may overwrite `robots.txt`) under `public/` using `next-sitemap.config.js`. Ensure that all URLs remain absolute and use production domain `https://www.orionapexcapital.com`.

Note: If you add blog posts under `pages/insights/[slug].js`, consider extending sitemap generation in a follow-up so individual posts are included.

## 📊 Services Structured Data

The site includes JSON-LD structured data for SEO optimization:

- **Services page** (`/services`): Contains an `ItemList` with three `Service` entries:
  - Crypto Trading Advisory (Financial Advisory)
  - Digital Assets / Website Investing (Investment Advisory) 
  - Client Services / Freelance Work (Consulting Services)

- **Freelance page** (`/freelance`): Contains a standalone `Service` with `Offer` details

### Updating Service Descriptions/Pricing

To modify service descriptions or pricing:

1. Edit `lib/seo/jsonldService.js`
2. Update the service objects in `generateServicesItemListJsonLd()` for the services page
3. Update `generateFreelanceServiceJsonLd()` for the freelance page
4. All URLs use absolute paths (`https://www.orionapexcapital.com`)

The structured data helps Google understand and potentially display rich results for your services in search results.

## ✍️ Editing Content

- Hero text: `components/Hero.js`
- Services copy: `pages/services.js`
- Bio: `pages/bio.js`
- Blog posts: add `.md` files in `content/posts/` with frontmatter:
  ```md
  ---
  title: "Post Title"
  date: "2025-08-27"
  excerpt: "Short summary…"
  ---
  Markdown content here…
  ```

## 🔒 Legal

This site includes a basic Legal page. Customize `pages/legal.js` as needed. Nothing on the site constitutes financial advice.

---

© 2025 Orion Apex Capital
