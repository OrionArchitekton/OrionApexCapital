import Head from "next/head";
import Link from "next/link";

type ServicePillar = {
  title: string;
  subtitle: string;
  description: string;
  metrics: { label: string; value: string }[];
};

const SERVICE_PILLARS: ServicePillar[] = [
  {
    title: "Capital Strategy",
    subtitle: "Macro + Micro Alignment",
    description:
      "Institutional-grade portfolio architecture blending top-down macro conviction with bottom-up alpha capture to protect capital while compounding growth.",
    metrics: [
      { label: "Mandates Optimized", value: "27" },
      { label: "Drawdown Ceiling", value: "< 6%" },
      { label: "Target Alpha", value: "+320 bps" },
    ],
  },
  {
    title: "Quantitative Research",
    subtitle: "Signal Intelligence",
    description:
      "Proprietary factor discovery, regime-aware models, and risk engines that surface repeatable edges across public and private market exposures.",
    metrics: [
      { label: "Coverage Universe", value: "4,800+ assets" },
      { label: "Hit Rate", value: "63%" },
      { label: "Refresh Cycle", value: "Daily" },
    ],
  },
  {
    title: "Execution Advisory",
    subtitle: "Precision Deployment",
    description:
      "Live trade support, capital introductions, and liquidity planning that compress cycle time from idea to executed mandate without operational drag.",
    metrics: [
      { label: "Deployable Capital", value: "$1.4B" },
      { label: "Avg. Fill Slippage", value: "0.41 bps" },
      { label: "Settlement SLA", value: "< T+1" },
    ],
  },
];

const toQuery = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | Orion Apex Capital</title>
        <meta
          name="description"
          content="Institutional services spanning capital strategy, quantitative research, and execution advisory tailored to growth-stage operators."
        />
      </Head>

      <div className="site-shell">
        <main className="site-main app-bg">
          <section className="py-24">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-16">
              <header className="glass rounded-3xl p-10 md:p-14 shadow-[var(--shadow-strong)] relative overflow-hidden">
                <span className="section-title">Services</span>
                <div className="mt-6 space-y-6 md:max-w-3xl">
                  <h1 className="text-3xl md:text-4xl font-semibold tracking-[0.12em] text-slate-50">
                    Institutional intelligence for capital allocators and growth operators.
                  </h1>
                  <p className="text-slate-300/90 leading-relaxed tracking-wide">
                    We architect resilient capital programs, surface asymmetric signals, and activate execution systems that
                    compound advantage in volatile regimes.
                  </p>
                </div>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link className="btn btn-primary" href="/contact?intent=strategy">
                    Book a strategy call
                  </Link>
                  <Link className="btn btn-secondary" href="/freelance">
                    Review client outcomes
                  </Link>
                </div>
              </header>

              <div className="grid gap-8 lg:grid-cols-3">
                {SERVICE_PILLARS.map(({ title, subtitle, description, metrics }) => (
                  <article key={title} className="card rounded-3xl p-9 flex flex-col gap-8">
                    <header className="space-y-2">
                      <h2 className="text-lg font-semibold tracking-[0.18em] uppercase text-amber-200/90">{subtitle}</h2>
                      <p className="text-2xl font-semibold text-slate-100 tracking-wide">{title}</p>
                    </header>
                    <p className="text-slate-300/85 leading-relaxed">{description}</p>
                    <ul className="grid gap-4">
                      {metrics.map((metric) => (
                        <li key={metric.label} className="badge badge-ttl justify-between text-slate-100/90">
                          <span className="uppercase tracking-[0.22em] text-xs text-slate-300/80">{metric.label}</span>
                          <span className="text-sm font-semibold">{metric.value}</span>
                        </li>
                      ))}
                    </ul>
                    <Link className="btn btn-ghost self-start" href={`/contact?intent=${toQuery(title)}`}>
                      Explore engagement
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}