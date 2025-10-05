
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
