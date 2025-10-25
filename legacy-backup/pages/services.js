import Layout from "@/components/Layout";
import Logo from "@/components/Logo";
import Head from "next/head";
import { generateServicesItemListJsonLd, renderJsonLdScript } from "@/lib/seo/jsonldService";
import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
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
        title="Core Operations"
        description="Disciplined operator lanes across crypto markets, digital asset acquisitions, and applied AI integration. Systematic approaches that compound capital and execution leverage."
        url="/services"
        image="/og/og-services.png"
      >
        <Section className="pb-12" containerClassName="space-y-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Core Operations" }
            ]}
          />
          <div className="panel panel--accent panel--aurora overflow-hidden p-10 floating-1">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div className="space-y-7">
                <div className="flex items-center gap-4">
                  <Logo variant="crestWhite" size={36} />
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-brand-copper pulse-dot">Operator lanes</p>
                    <h1 className="font-display text-4xl leading-tight text-text-primary sm:text-5xl">
                      Mandates tuned for precision capital
                    </h1>
                  </div>
                </div>
                <p className="text-lg text-text-muted">
                  We run three core engagements – AI-driven trading, digital asset acquisition, and applied AI consulting – each with embedded governance, telemetry, and risk discipline. Every mandate is bespoke, but the operating system stays consistent.
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { label: "Discovery to launch", value: "14-30 days" },
                    { label: "Engagement length", value: "3-9 months" },
                    { label: "Operator pods", value: "4-person team" }
                  ].map(({ label, value }, index) => (
                    <div key={label} className={`panel panel--kpi panel--inline panel--static p-4 text-left floating-${index + 1}`}>
                      <p className="text-xs uppercase tracking-[0.28em] text-text-muted">{label}</p>
                      <p className="mt-2 text-xl font-semibold text-text-primary">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact" variant="primary" className="px-8 py-4">
                    Request Discovery Call
                  </Button>
                  <Button href="/insights" variant="secondary" className="px-8 py-4">
                    View Research
                  </Button>
                </div>
              </div>
              <aside className="panel panel--subtle panel--static space-y-6 p-8">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.32em] text-brand-copper">Engagement cadence</p>
                  <ul className="space-y-3 text-sm text-text-muted">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold" aria-hidden="true" />
                      Weekly operator calls with market + ops recaps
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold" aria-hidden="true" />
                      Shared dashboards with live telemetry + compliance notes
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold" aria-hidden="true" />
                      Governance-ready documentation for stakeholders
                    </li>
                  </ul>
                </div>
                <div className="panel panel--accent panel--inline p-5 text-sm floating-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-brand-gold/80 mb-3">Credentialed</p>
                  <p className="text-text-primary/90 leading-relaxed">
                    Operator pods combine trading, acquisition, and GTM experience across 4 markets and 7-figure mandates.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </Section>



        <Section
          eyebrow="Three Core Lanes"
          title="Disciplined operator programs"
          description="AI-powered trading intelligence, digital asset acquisition cycles, and custom AI integration — each with embedded governance and risk discipline."
        >
          <Container className="grid gap-8 lg:grid-cols-12">
            {[{
              id: "ai-trading",
              icon: (
                <svg className="h-6 w-6 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
                </svg>
              ),
              label: "1️⃣ AI-Driven Trading",
              headline: "Advanced algorithmic & deep-learning models",
              body: "Advanced algorithmic and deep-learning models for short-term crypto markets.",
              bullets: [
                "Deep-learning sentiment models",
                "Automated trade execution & position control",
                "Real-time strategy clusters with built-in risk filters"
              ],
              cta: { href: "/services#ai-trading", label: "Explore trading lane" }
            }, {
              id: "digital-assets",
              icon: (
                <svg className="h-6 w-6 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3l9.5 5.5v7L12 21l-9.5-5.5v-7z" />
                  <path d="M12 12l9.5-5.5M12 12v9" />
                  <path d="M12 12L2.5 6.5" />
                </svg>
              ),
              label: "2️⃣ Website Acquisitions & Digital Asset Flipping",
              headline: "Accretive digital asset cycles",
              body: "Leveraging AI to identify undervalued web assets, optimize them, and flip or scale for compounding digital returns.",
              bullets: [
                "AI-driven site valuation & content scoring",
                "SEO / UX / automation optimization",
                "Monetization & resale systems"
              ],
              cta: { href: "/services#digital-assets", label: "See acquisition framework" }
            }, {
              id: "ai-consulting",
              icon: (
                <svg className="h-6 w-6 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M3 12h3M18 12h3M12 3v3M12 18v3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
                </svg>
              ),
              label: "3️⃣ AI Consulting & Integration",
              headline: "Custom AI systems & integration",
              body: "Custom AI-driven systems for traders & businesses — from trading models to intelligent web rebuilds.",
              bullets: [
                "Model design (sentiment, automation, analytics)",
                "Workflow & site integrations",
                "Education + scalability support"
              ],
              cta: { href: "/contact?interest=AI%20Consulting", label: "Discuss AI mandate" }
            }].map(({ id, icon, label, headline, body, bullets, cta }) => (
              <motion.div
                key={id}
                id={id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`panel panel--accent panel--aurora flex flex-col gap-8 p-10 lg:col-span-4 floating-${id === 'ai-trading' ? '1' : id === 'digital-assets' ? '2' : '3'}`}
              >
                <div className="space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gold/20 ring-2 ring-brand-gold/40">
                    {icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-text-primary mb-2">{label}</h3>
                    {body && (
                      <p className="text-base leading-relaxed text-text-muted/90">{body}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-4">
                  <ul className="space-y-4 text-sm text-text-muted">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-4">
                        <span className="mt-2 h-2 w-2 rounded-full bg-brand-copper flex-shrink-0" aria-hidden="true" />
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-white/10">
                    <Button href={cta.href} variant="primary" className="w-full justify-center px-6 py-3 text-sm font-semibold">
                      {cta.label}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </Container>
        </Section>

        <Section className="pt-0">
          <Container className="panel panel--subtle panel--static p-8 text-center">
            <h3 className="text-lg font-semibold text-text-primary mb-3">Risk Disclosure</h3>
            <p className="text-sm text-text-muted max-w-3xl mx-auto">
              Nothing here constitutes investment advice or a solicitation to invest. All engagements proceed only after compliance reviews, 
              mutual scope alignment, and appropriate documentation. Past performance does not guarantee future results.
            </p>
          </Container>
        </Section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {}
  };
}
