import Layout from "@/components/Layout";
import Button from "@/components/Button";
import Logo from "@/components/Logo";
import LogoGrid from "@/components/LogoGrid";
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
  const insightAccents = [
    {
      gradient: "from-brand-gold/30 via-brand-gold/10 to-transparent",
      badge: "bg-brand-gold/15 text-brand-gold",
      link: "text-brand-gold",
      linkHover: "group-hover:text-brand-gold/80"
    },
    {
      gradient: "from-brand-blue/30 via-brand-blue/10 to-transparent",
      badge: "bg-brand-blue/15 text-brand-blue",
      link: "text-brand-blue",
      linkHover: "group-hover:text-brand-blue/80"
    },
    {
      gradient: "from-brand-copper/30 via-brand-copper/10 to-transparent",
      badge: "bg-brand-copper/15 text-brand-copper",
      link: "text-brand-copper",
      linkHover: "group-hover:text-brand-copper/80"
    }
  ];

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
      <section className="container py-24">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface-1/60 px-4 py-2 text-xs uppercase tracking-[0.4em] text-text-muted">
            Core Verticals
          </span>
          <h2 className="mt-6 font-display text-4xl text-text-primary md:text-5xl">
            Disciplined operator lanes
          </h2>
          <p className="mt-4 text-lg text-text-muted md:text-xl">
            Two distinct verticals. One unified approach to <span className="text-brand-gold">systematic wealth creation</span>.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {/* Crypto Trading Card */}
          <Link
            href="/services#crypto"
            className="surface-card relative overflow-hidden p-8 transition-transform duration-500 hover:-translate-y-1"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl border border-brand-copper/10 bg-gradient-to-br from-brand-copper/15 via-transparent to-brand-blue/10 opacity-80"></div>
            <div className="relative z-10 flex items-start gap-4">
              <div className="rounded-xl bg-brand-copper/20 p-3 text-brand-gold">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-2xl text-text-primary">
                  Crypto Trading
                </h3>
                <p className="text-sm uppercase tracking-[0.2em] text-brand-gold/80">
                  High Frequency • Low Risk
                </p>
              </div>
            </div>
            <p className="relative z-10 mt-6 text-sm leading-relaxed text-text-muted md:text-base">
              Short-term setups with <span className="text-text-primary font-semibold">strict risk controls</span> and volatility gates. Systematic execution meets disciplined capital allocation.
            </p>
            <ul className="relative z-10 mt-6 space-y-3 text-sm text-text-muted">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-gold"></span>
                Risk-managed position sizing
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-gold"></span>
                Automated volatility gates
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-gold"></span>
                Performance tracking & analytics
              </li>
            </ul>
            <span className="relative z-10 mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-gold">
              Explore Strategy
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>

          {/* Website Investing Card */}
          <Link
            href="/services#websites"
            className="surface-card relative overflow-hidden p-8 transition-transform duration-500 hover:-translate-y-1"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl border border-brand-blue/15 bg-gradient-to-br from-brand-blue/20 via-transparent to-brand-gold/10 opacity-80"></div>
            <div className="relative z-10 flex items-start gap-4">
              <div className="rounded-xl bg-brand-blue/15 p-3 text-brand-gold">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-2xl text-text-primary">
                  Website Investing
                </h3>
                <p className="text-sm uppercase tracking-[0.2em] text-brand-blue/70">
                  Digital Assets • Growth Hacking
                </p>
              </div>
            </div>
            <p className="relative z-10 mt-6 text-sm leading-relaxed text-text-muted md:text-base">
              <span className="text-text-primary font-semibold">Acquire → Improve → Recycle.</span> Operator math over hype. Systematic value creation in digital properties.
            </p>
            <ul className="relative z-10 mt-6 space-y-3 text-sm text-text-muted">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-blue"></span>
                Due diligence & valuation
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-blue"></span>
                Growth optimization systems
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-blue"></span>
                Strategic exit planning
              </li>
            </ul>
            <span className="relative z-10 mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
              Learn Process
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-surface-1/80 shadow-glow">
          <div className="md:grid md:grid-cols-[1.1fr_1fr] md:items-stretch">
            <div className="relative h-64 md:h-full">
              <Image
                src="/media/photos/curated/pexels-fauxels-3184465.jpg"
                alt="Executives shaking hands over a strategy session with notebooks on the table."
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/80 via-brand-navy/30 to-transparent" aria-hidden="true"></div>
            </div>
            <div className="flex flex-col gap-6 p-8 md:p-12">
              <h3 className="font-display text-2xl text-text-primary md:text-3xl">
                Partnership-first execution
              </h3>
              <p className="text-base text-text-muted">
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
        </div>
      </section>

      {/* Featured Case Study - Premium Layout */}
      <section className="container py-20">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-surface-1/90 shadow-glow backdrop-blur-xl">
          <div className="md:grid md:grid-cols-[1.15fr_0.85fr] md:items-stretch">
            <div className="flex flex-col gap-8 p-10 md:p-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">
                Featured Case Study
              </span>
              <div>
                <h3 className="font-display text-3xl text-text-primary md:text-4xl">
                  KPI dashboard for multi-club fitness operator
                </h3>
                <p className="mt-4 max-w-xl text-lg text-text-muted">
                  Transformed operational efficiency through data visualization and automated reporting systems tuned for franchise scale.
                </p>
              </div>

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
            <div className="relative h-80 md:h-full">
              <Image
                src="/media/photos/curated/pexels-quintin-gellar-313782.jpg"
                alt="City skyline at night with illuminated financial district skyscrapers."
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/20 via-brand-navy/40 to-brand-navy/90" aria-hidden="true"></div>
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
        </div>
      </section>

      {/* Premium Insights Section */}
      <section className="container py-20">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl text-text-primary md:text-5xl">
            Market insights
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-text-muted md:text-xl">
            Deep analysis and strategic frameworks from the front lines of <span className="text-brand-blue">modern capital markets</span>.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.slice(0, 3).map((p, index) => {
            const accent = insightAccents[index % insightAccents.length];
            const publishedOn = new Date(p.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            });

            return (
              <div key={p.slug} className="group relative">
                <div className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${accent.gradient} opacity-70 transition-opacity duration-500 group-hover:opacity-100`}></div>

                <Link
                  href={`/insights/${p.slug}`}
                  className="surface-card relative flex h-full flex-col gap-6 p-8 transition-transform duration-500 hover:-translate-y-1"
                >
                  <div className={`relative z-10 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.35em] ${accent.badge}`}>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{publishedOn}</span>
                  </div>

                  <h3 className={`relative z-10 text-xl font-semibold text-text-primary transition-colors duration-300 ${accent.linkHover}`}>
                    {p.title}
                  </h3>

                  <p className="relative z-10 line-clamp-3 text-sm leading-relaxed text-text-muted md:text-base">
                    {p.excerpt}
                  </p>

                  <span className={`relative z-10 inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 ${accent.link} ${accent.linkHover}`}>
                    Read analysis
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button href="/insights" variant="outline" className="px-8">
            View All Insights
          </Button>
        </div>
      </section>

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
