import Layout from "@/components/Layout";
import Logo from "@/components/Logo";
import Head from "next/head";
import { generateServicesItemListJsonLd, renderJsonLdScript } from "@/lib/seo/jsonldService";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Featured } from "@/components/Featured";
import { Breadcrumb } from "@/components/Breadcrumb";
import Button from "@/components/Button";

export default function Services() {
  const servicesJsonLd = generateServicesItemListJsonLd();

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={renderJsonLdScript(servicesJsonLd)}
        />
      </Head>
      <Layout
        title="Services"
        description="Disciplined operator lanes across crypto and digital assets. Crypto trading advisory and website investing with systematic approaches to wealth creation."
        url="/services"
      >
        <Section className="pb-12" containerClassName="space-y-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services" }
            ]}
          />
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-4">
                <Logo variant="crestWhite" size={36} />
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-brand-copper">Operator lanes</p>
                  <h1 className="font-display text-4xl leading-tight text-text-primary sm:text-5xl">
                    Mandates tuned for precision capital
                  </h1>
                </div>
              </div>
              <p className="text-base text-text-muted sm:text-lg">
                We run two core engagements—crypto trading and digital asset acquisition—each with embedded governance, telemetry, and risk discipline. Every mandate is bespoke, but the operating system remains consistent.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" className="rounded-full">
                  Request Discovery Call
                </Button>
                <Button href="/insights" variant="ghost" className="rounded-full border border-white/10">
                  View Research
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/10 bg-surface-1/70 p-8 shadow-2xl">
                <p className="text-xs uppercase tracking-[0.35em] text-brand-copper">Engagement cadence</p>
                <ul className="mt-5 space-y-4 text-sm text-text-muted">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand-copper" />
                    Weekly operating calls and market recaps
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand-copper" />
                    Shared dashboards with live telemetry
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand-copper" />
                    Governance-ready documentation for stakeholders
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section
          eyebrow="Service Catalog"
          title="Disciplined operator programs"
          description="Each vertical includes structured discovery, execution roadmaps, and post-engagement support."
        >
          <Container className="grid gap-8 lg:grid-cols-12">
            {[{
              id: "crypto",
              title: "Crypto Trading",
              summary: "Short-duration systems with strict risk governance and volatility gates.",
              bullets: [
                "2:1 minimum risk-to-reward; ATR-anchored stops",
                "Automated execution playbooks and post-entry management",
                "Focus symbols: BTC, ETH, SOL, XRP, LINK, LTC, BCH, DOGE"
              ],
              featured: true
            },
            {
              id: "websites",
              title: "Digital Asset Investing",
              summary: "Acquire → Improve → Recycle framework for content and commerce properties.",
              bullets: [
                "Due diligence and valuation frameworks",
                "Growth optimization sprints across UX, monetization, and search",
                "Exit planning with operator-friendly transitions"
              ],
              featured: false
            }].map(({ id, title, summary, bullets, featured }) => (
              <article
                key={id}
                id={id}
                className="lg:col-span-6 flex flex-col gap-5 rounded-3xl border border-white/10 bg-surface-1/70 p-8 transition duration-300 hover:-translate-y-1 hover:border-brand-copper/50 hover:shadow-glow"
              >
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-semibold text-text-primary">{title}</h2>
                  {featured && <Featured />}
                </div>
                <p className="text-sm leading-relaxed text-text-muted">{summary}</p>
                <ul className="space-y-3 text-sm text-text-muted">
                  {bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-brand-copper" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Button href={`/contact?interest=${encodeURIComponent(title)}`} variant="secondary" className="rounded-full">
                    Scope engagement
                  </Button>
                </div>
              </article>
            ))}
          </Container>
        </Section>

        <Section className="pt-0" containerClassName="space-y-6">
          <Container className="rounded-3xl border border-white/10 bg-surface-1/70 p-8">
            <h3 className="text-lg font-semibold text-text-primary">Disclaimer</h3>
            <p className="mt-2 text-sm text-text-muted">
              Nothing here is a solicitation to invest or an offer of securities. Engagements proceed only after compliance reviews and mutual scope alignment.
            </p>
          </Container>
        </Section>
      </Layout>
    </>
  );
}
