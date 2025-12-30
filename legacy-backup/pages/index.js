import Layout from "@/components/Layout";
import Button from "@/components/Button";
import Hero from "@/components/Hero";
import { Section } from "@/components/Section";
import { Featured } from "@/components/Featured";
import { InsightPreviewCard } from "@/components/insights";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";

// Environment-driven badge configuration
// Default hero badge values reflect our HoldCo status rather than service metrics.
const BADGE_1_LABEL = process.env.NEXT_PUBLIC_BADGE_1_LABEL ?? "Subsidiaries Governed";
const BADGE_1_VALUE = process.env.NEXT_PUBLIC_BADGE_1_VALUE ?? "3";
const BADGE_2_LABEL = process.env.NEXT_PUBLIC_BADGE_2_LABEL ?? "Years Operating";
const BADGE_2_VALUE = process.env.NEXT_PUBLIC_BADGE_2_VALUE ?? "3+";
const BADGE_3_LABEL = process.env.NEXT_PUBLIC_BADGE_3_LABEL ?? "Ecosystem Domains";
const BADGE_3_VALUE = process.env.NEXT_PUBLIC_BADGE_3_VALUE ?? "3";
const BULLET = "\u2022"; // Shared bullet token keeps ASCII-only source

export default function Home({ posts }) {
  const heroBadges = [
    { label: BADGE_1_LABEL, value: BADGE_1_VALUE },
    { label: BADGE_2_LABEL, value: BADGE_2_VALUE },
    { label: BADGE_3_LABEL, value: BADGE_3_VALUE }
  ];

  return (
    <Layout
      title="Disciplined Growth, Lasting Legacy"
      description="Orion Apex Capital is a modern holding company that governs independent subsidiaries across AI, media, and trading R&D. We provide governance, architecture, and capital discipline so innovation compounds responsibly."
      url="/"
      image="/og/og-home.png"
    >
      <Hero badges={heroBadges} />

      {/* Holdings Section */}
      <Section
        eyebrow="Holdings"
        title="Independent subsidiaries"
        description="Three distinct companies. One shared standard of discipline."
      >
        <div className="grid gap-8 lg:grid-cols-12">
          {[{
            href: "https://orionintelligenceagency.com",
            title: "Orion Intelligence Agency",
            tagline: `AI Agents ${BULLET} Decision Intelligence`,
            gradient: "from-brand-blue/20 via-transparent to-brand-copper/10",
            accentBg: "bg-brand-blue/15",
            dotClass: "bg-brand-blue",
            description: "Guardrailed AI agents and orchestration tooling. Non-custodial, KPI-driven, and designed for secure decision support.",
            points: [
              "AI agents & orchestration services",
              "Knowledge base only responses with guardrails",
              "Weekly KPI loops & custom dashboards"
            ],
            cta: "Visit OIA"
          },
          {
            href: "https://orionaimedia.com",
            title: "Orion Ascend Media",
            tagline: `Acquire ${BULLET} Improve ${BULLET} Recycle`,
            gradient: "from-brand-copper/15 via-transparent to-brand-gold/10",
            accentBg: "bg-brand-copper/20",
            dotClass: "bg-brand-copper",
            description: "Acquire, improve, and recycle digital assets. Growth funnels and traffic systems that route demand back to our ecosystem.",
            points: [
              "Acquire undervalued digital assets",
              "Optimize SEO, UX, and monetization",
              "Recycle assets and route leads to OIA"
            ],
            cta: "Visit Ascend"
          },
          {
            href: "https://apexaitrading-com.vercel.app",
            title: "Apex Trading Systems",
            tagline: `Research ${BULLET} Backtest ${BULLET} Risk`,
            gradient: "from-brand-gold/15 via-transparent to-brand-blue/10",
            accentBg: "bg-brand-gold/20",
            dotClass: "bg-brand-gold",
            description: "Proprietary trading R&D and risk tooling. Backtesting and paper trading platforms that democratize strategy iteration.",
            points: [
              "Fast backtests & paper trading tools",
              "AI-assisted strategy idea generation",
              "Risk tooling and telemetry frameworks"
            ],
            cta: "Visit ATS"
          }].map(({ href, title, tagline, gradient, accentBg, dotClass, description, points, cta }) => (
            <a
              key={href}
              href={href}
              className="panel panel--accent group relative lg:col-span-4 flex flex-col gap-5 overflow-hidden p-8 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-copper/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${gradient} opacity-90 transition group-hover:opacity-100`} />
              <div className="relative z-10 flex items-start gap-4">
                <div className={`rounded-xl ${accentBg} p-3 text-brand-gold`}></div>
                <div>
                  <h3 className="text-2xl font-semibold text-text-primary">{title}</h3>
                  <p className="text-xs uppercase tracking-[0.3em] text-brand-gold/80">{tagline}</p>
                </div>
              </div>
              <p className="relative z-10 text-sm leading-relaxed text-text-muted md:text-base">
                {description}
              </p>
              <ul className="relative z-10 space-y-3 text-sm text-text-muted">
                {points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${dotClass}`}></span>
                    {point}
                  </li>
                ))}
              </ul>
              <span className="relative z-10 inline-flex items-center gap-2 text-sm font-semibold text-brand-gold transition group-hover:gap-3">
                {cta}
                <svg className="h-4 w-4 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          ))}
        </div>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="panel panel--accent relative h-full overflow-hidden p-0 floating-1">
              <Image
                src="/media/photos/curated/pexels-fauxels-3184465.jpg"
                alt="Executives shaking hands over a strategy session with notebooks on the table."
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/80 via-brand-navy/30 to-transparent" aria-hidden="true"></div>
            </div>
          </div>
          <div className="panel panel--aurora lg:col-span-5 flex flex-col gap-6 p-8 floating-2">
            <h3 className="font-display text-2xl text-text-primary md:text-3xl">Partnership-first execution</h3>
            <p className="text-sm text-text-muted md:text-base">
              Every mandate opens with measured discovery. We embed with stakeholders, navigate compliance, and translate market intelligence into accountable operating plans.
            </p>
            <ul className="space-y-3 text-sm text-text-muted">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold"></span>
                Dedicated operator pods for each engagement
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold"></span>
                Transparent reporting cadences and data rooms
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold"></span>
                Outcomes tied to governance-ready metrics
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Featured Case Study - Premium Layout */}
      <Section
        eyebrow="Proven Execution"
        title="KPI dashboard for multi-club fitness operator"
        description="Transformed operational efficiency through data visualization and automated reporting systems tuned for franchise scale."
      >
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="panel panel--accent lg:col-span-12 flex flex-col gap-8 p-8 backdrop-blur-xl floating-1">
            <Featured />
            <dl className="grid gap-6 sm:grid-cols-4">
              <div className="panel panel--kpi panel--inline panel--static p-4 text-center">
                <dt className="text-xs uppercase tracking-[0.25em] text-text-muted">Retention increase</dt>
                <dd className="mt-2 text-2xl font-semibold text-brand-gold">+2.8pp</dd>
              </div>
              <div className="panel panel--kpi panel--inline panel--static p-4 text-center">
                <dt className="text-xs uppercase tracking-[0.25em] text-text-muted">Weekly time saved</dt>
                <dd className="mt-2 text-2xl font-semibold text-brand-blue">6-8 hrs</dd>
              </div>
              <div className="panel panel--kpi panel--inline panel--static p-4 text-center">
                <dt className="text-xs uppercase tracking-[0.25em] text-text-muted">Data accuracy</dt>
                <dd className="mt-2 text-2xl font-semibold text-text-primary">100%</dd>
              </div>
              <div className="panel panel--kpi panel--inline panel--static p-4 text-center">
                <dt className="text-xs uppercase tracking-[0.25em] text-text-muted">Locations tracked</dt>
                <dd className="mt-2 text-2xl font-semibold text-brand-copper">12</dd>
              </div>
            </dl>
            <div className="flex flex-wrap gap-4">
              <Button href="/freelance/kpi-dashboard-fitness" variant="primary">
                Read Full Case Study
              </Button>
              <Button href="/freelance" variant="outline">
                View All Work
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Premium Insights Section */}
      <Section
        eyebrow="Market Intelligence"
        title="Latest Insights"
        description="Deep analysis and strategic frameworks from the front lines of modern capital markets."
      >
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.slice(0, 3).map((post, index) => (
            <InsightPreviewCard
              key={post.slug}
              post={post}
              ctaLabel="Read analysis"
              showTags={false}
              className={`h-full panel--aurora floating-${index + 1}`}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/insights" variant="outline" className="px-8">
            View All Insights
          </Button>
        </div>
      </Section>

      {/* Premium Closing CTA */}
      <section className="container py-24">
  <div className="panel panel--accent panel--aurora relative overflow-hidden text-center floating-2">
          <Image
            src="/media/photos/curated/pexels-philippe-donn-1257860.jpg"
            alt="Explorer on a mountain ridge under the Milky Way."
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 70vw"
          />
          <div className="absolute inset-0 bg-brand-navy/75 mix-blend-multiply" aria-hidden="true"></div>
          <div className="absolute inset-0 overlay-gradient" aria-hidden="true"></div>

          <div className="relative z-10 flex flex-col gap-10 p-12 md:p-16">
            <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold pulse-dot">
              Elite Partnership
            </span>
            <h3 className="mx-auto max-w-3xl font-display text-4xl leading-tight text-text-primary md:text-6xl">
              Ready to align execution with outcomes?
            </h3>
            <p className="mx-auto max-w-3xl text-lg text-text-muted md:text-xl">
              Join leaders who demand disciplined strategy, real-time telemetry, and operator pods that stay accountable from discovery to delivery.
            </p>
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <Button href="/contact" variant="primary" className="px-10 py-4 text-base md:text-lg">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Schedule Consultation
              </Button>
              <Button href="/freelance" variant="secondary" className="px-8 py-4 text-base md:text-lg">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Our Work
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-6 border-t border-white/10 pt-8 md:grid-cols-3">
              <div className="panel panel--kpi panel--inline panel--static p-6">
                <div className="text-lg font-semibold text-brand-gold">Confidential</div>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-text-muted">
                  NDA protected engagements
                </p>
              </div>
              <div className="panel panel--kpi panel--inline panel--static p-6">
                <div className="text-lg font-semibold text-brand-blue">Exclusive</div>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-text-muted">
                  Limited client roster
                </p>
              </div>
              <div className="panel panel--kpi panel--inline panel--static p-6">
                <div className="text-lg font-semibold text-text-primary">Results-driven</div>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-text-muted">
                  Performance-based outcomes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  return { props: { posts: getAllPosts() } };
}
