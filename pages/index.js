import Layout from "@/components/Layout";
import Button from "@/components/Button";
import Logo from "@/components/Logo";
import LogoGrid from "@/components/LogoGrid";
import { Section } from "@/components/Section";
import { Featured } from "@/components/Featured";
import { InsightPreviewCard } from "@/components/insights";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";

// Environment-driven badge configuration
const BADGE_1_LABEL = process.env.NEXT_PUBLIC_BADGE_1_LABEL ?? "Client Projects Delivered";
const BADGE_1_VALUE = process.env.NEXT_PUBLIC_BADGE_1_VALUE ?? "15+";
const BADGE_2_LABEL = process.env.NEXT_PUBLIC_BADGE_2_LABEL ?? "On-Time Delivery";
const BADGE_2_VALUE = process.env.NEXT_PUBLIC_BADGE_2_VALUE ?? "97%";
const BADGE_3_LABEL = process.env.NEXT_PUBLIC_BADGE_3_LABEL ?? "Years Operating";
const BADGE_3_VALUE = process.env.NEXT_PUBLIC_BADGE_3_VALUE ?? "3+";

export default function Home({ posts }) {
  return (
    <Layout
      title="Precision. Growth. Legacy."
      description="Disciplined, risk-managed strategies across crypto markets and digital assets. We align exceptional returns with long-term purpose through systematic wealth creation."
      url="/"
    >
      {/* Premium Hero Section */}
      <section className="relative isolate overflow-hidden bg-astro">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/media/photos/curated/pexels-philippe-donn-1257860.jpg"
          aria-hidden="true"
        >
          <source src="/media/videos/curated/pexels-vimeo-857195.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-brand-navy/70 mix-blend-multiply" aria-hidden="true"></div>
        <div className="absolute inset-0 overlay-gradient" aria-hidden="true"></div>

        <div className="relative mx-auto flex min-h-[85vh] w-full max-w-7xl flex-col items-center justify-center gap-10 px-6 py-24 text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="rounded-full border border-white/15 bg-surface-1/70 p-6 backdrop-blur">
              <Logo
                variant="crestWhite"
                size={88}
                className="drop-shadow-[0_25px_40px_rgba(0,0,0,0.45)]"
              />
            </div>
            <p className="text-xs uppercase tracking-[0.45em] text-text-muted">
              Boutique Digital Asset Management
            </p>
            <h1 className="max-w-3xl font-display text-4xl leading-tight text-text-primary sm:text-5xl md:text-6xl">
              Precision capital for the next frontier of wealth
            </h1>
            <p className="max-w-2xl text-base text-text-muted md:text-lg">
              We deploy disciplined, risk-managed strategies across crypto markets and digital assets—aligning exceptional returns with long-term purpose.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Link href="/services" className="btn btn-primary min-w-[180px]">
              Explore Strategies
            </Link>
            <Link href="/contact" className="btn btn-secondary min-w-[180px]">
              Partner With Us
            </Link>
          </div>

          <dl className="mt-12 grid w-full max-w-4xl grid-cols-1 gap-6 text-left text-text-primary sm:grid-cols-3">
            <div className="surface-card h-full p-5" aria-label={`${BADGE_1_LABEL}: ${BADGE_1_VALUE}`}>
              <dt className="text-xs uppercase tracking-[0.3em] text-text-muted">
                {BADGE_1_LABEL}
              </dt>
              <dd className="mt-3 text-3xl font-semibold text-text-primary">
                {BADGE_1_VALUE}
              </dd>
            </div>
            <div className="surface-card h-full p-5" aria-label={`${BADGE_2_LABEL}: ${BADGE_2_VALUE}`}>
              <dt className="text-xs uppercase tracking-[0.3em] text-text-muted">
                {BADGE_2_LABEL}
              </dt>
              <dd className="mt-3 text-3xl font-semibold text-text-primary">
                {BADGE_2_VALUE}
              </dd>
            </div>
            <div className="surface-card h-full p-5" aria-label={`${BADGE_3_LABEL}: ${BADGE_3_VALUE}`}>
              <dt className="text-xs uppercase tracking-[0.3em] text-text-muted">
                {BADGE_3_LABEL}
              </dt>
              <dd className="mt-3 text-3xl font-semibold text-text-primary">
                {BADGE_3_VALUE}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Social Proof */}
      <LogoGrid />

      {/* Premium Services Section */}
      <Section
        eyebrow="Core Verticals"
        title="Disciplined operator lanes"
        description="Two distinct verticals. One unified approach to systematic wealth creation."
      >
        <div className="grid gap-8 lg:grid-cols-12">
          {[{
            href: "/services#crypto",
            title: "Crypto Trading",
            tagline: "High Frequency • Low Risk",
            gradient: "from-brand-copper/15 via-transparent to-brand-blue/10",
            accentBg: "bg-brand-copper/20",
            dotClass: "bg-brand-copper",
            points: [
              "Risk-managed position sizing",
              "Automated volatility gates",
              "Performance tracking & analytics"
            ],
            cta: "Explore Strategy"
          },
          {
            href: "/services#websites",
            title: "Website Investing",
            tagline: "Digital Assets • Growth Hacking",
            gradient: "from-brand-blue/20 via-transparent to-brand-gold/10",
            accentBg: "bg-brand-blue/15",
            dotClass: "bg-brand-blue",
            points: [
              "Due diligence & valuation",
              "Growth optimization systems",
              "Strategic exit planning"
            ],
            cta: "Learn Process"
          }].map(({ href, title, tagline, gradient, accentBg, dotClass, points, cta }) => (
            <Link
              key={href}
              href={href}
              className="group relative lg:col-span-6 flex flex-col gap-5 overflow-hidden rounded-3xl border border-white/10 bg-surface-1/70 p-8 transition duration-300 hover:-translate-y-1 hover:border-brand-copper/50 hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-copper focus-visible:ring-offset-2 focus-visible:ring-offset-surface-1"
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
                {title === "Crypto Trading" ? (
                  <>Short-term setups with <span className="font-semibold text-text-primary">strict risk controls</span> and volatility gates. Systematic execution meets disciplined capital allocation.</>
                ) : (
                  <><span className="font-semibold text-text-primary">Acquire → Improve → Recycle.</span> Operator math over hype. Systematic value creation in digital properties.</>
                )}
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
            </Link>
          ))}
        </div>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-surface-1/70">
              <Image
                src="/media/photos/curated/pexels-fauxels-3184465.jpg"
                alt="Executives shaking hands over a strategy session with notebooks on the table."
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/80 via-brand-navy/30 to-transparent" aria-hidden="true"></div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-6 rounded-3xl border border-white/10 bg-surface-1/70 p-8">
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
          <div className="lg:col-span-7 flex flex-col gap-8 rounded-3xl border border-white/10 bg-surface-1/90 p-8 backdrop-blur-xl shadow-glow">
            <Featured />
            <dl className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-surface-0/60 p-4 text-center">
                <dt className="text-xs uppercase tracking-[0.25em] text-text-muted">Retention increase</dt>
                <dd className="mt-2 text-2xl font-semibold text-brand-gold">+2.8pp</dd>
              </div>
              <div className="rounded-2xl border border-white/10 bg-surface-0/60 p-4 text-center">
                <dt className="text-xs uppercase tracking-[0.25em] text-text-muted">Weekly time saved</dt>
                <dd className="mt-2 text-2xl font-semibold text-brand-blue">6-8 hrs</dd>
              </div>
              <div className="rounded-2xl border border-white/10 bg-surface-0/60 p-4 text-center">
                <dt className="text-xs uppercase tracking-[0.25em] text-text-muted">Data accuracy</dt>
                <dd className="mt-2 text-2xl font-semibold text-text-primary">100%</dd>
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
          <div className="relative lg:col-span-5 h-80 rounded-3xl border border-white/10 bg-surface-1/80 md:h-full">
            <Image
              src="/media/photos/curated/pexels-quintin-gellar-313782.jpg"
              alt="City skyline at night with illuminated financial district skyscrapers."
              fill
              className="rounded-3xl object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-navy/20 via-brand-navy/40 to-brand-navy/90" aria-hidden="true"></div>
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-surface-1/85 p-6 backdrop-blur">
              <div className="flex items-center justify-between text-sm text-text-muted">
                <span>Monthly revenue</span>
                <span className="text-brand-gold font-semibold">↗ +18.2%</span>
              </div>
              <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-brand-copper to-brand-blue"></div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-xs text-text-muted">
                <div>
                  <div className="text-lg font-semibold text-text-primary">$247K</div>
                  <span>This month</span>
                </div>
                <div>
                  <div className="text-lg font-semibold text-text-primary/70">$209K</div>
                  <span>Last month</span>
                </div>
              </div>
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
          {posts.slice(0, 3).map((post) => (
            <InsightPreviewCard
              key={post.slug}
              post={post}
              ctaLabel="Read analysis"
              showTags={false}
              className="h-full"
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
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-surface-1/80 text-center shadow-glow">
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
            <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold">
              Elite Partnership
            </span>
            <h3 className="mx-auto max-w-3xl font-display text-4xl leading-tight text-text-primary md:text-6xl">
              Ready to align execution with outcomes?
            </h3>
            <p className="mx-auto max-w-3xl text-lg text-text-muted md:text-xl">
              Join the leaders who recognize that systematic wealth creation demands disciplined strategy, real-time intelligence, and operators that stay accountable from discovery to delivery.
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
              <div className="rounded-2xl border border-white/10 bg-surface-0/60 p-6">
                <div className="text-lg font-semibold text-brand-gold">Confidential</div>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-text-muted">
                  NDA protected engagements
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-surface-0/60 p-6">
                <div className="text-lg font-semibold text-brand-blue">Exclusive</div>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-text-muted">
                  Limited client roster
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-surface-0/60 p-6">
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
