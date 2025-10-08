import Layout from "@/components/Layout";
import Logo from "@/components/Logo";
import Head from "next/head";
import clsx from "clsx";
import { generateServicesItemListJsonLd, renderJsonLdScript } from "@/lib/seo/jsonldService";
import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Featured } from "@/components/Featured";
import { Breadcrumb } from "@/components/Breadcrumb";
import Button from "@/components/Button";

export default function Services({ coreOps }) {
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
          <div className="panel panel--accent panel--static overflow-hidden p-10">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div className="space-y-7">
                <div className="flex items-center gap-4">
                  <Logo variant="crestWhite" size={36} />
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-brand-copper">Operator lanes</p>
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
                  ].map(({ label, value }) => (
                    <div key={label} className="panel panel--inline panel--static p-4 text-left">
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
                <div className="panel panel--accent panel--inline panel--static p-5 text-sm text-text-onCopper">
                  <p className="text-xs uppercase tracking-[0.3em]">Credentialed</p>
                  <p className="mt-3 text-text-onCopper/90">
                    Operator pods combine trading, acquisition, and GTM experience across 4 markets and 7-figure mandates.
                  </p>
                </div>
              </aside>
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
              summary: "Acquire + Improve + Recycle framework for content and commerce properties.",
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
                className={clsx(
                  "panel flex flex-col gap-6 p-8 transition duration-300",
                  featured ? "panel--accent" : "panel--subtle",
                  "lg:col-span-6"
                )}
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
          <Container className="panel panel--inline panel--static p-8">
            <h3 className="text-lg font-semibold text-text-primary">Disclaimer</h3>
            <p className="mt-2 text-sm text-text-muted">
              Nothing here is a solicitation to invest or an offer of securities. Engagements proceed only after compliance reviews and mutual scope alignment.
            </p>
          </Container>
        </Section>

        <Section eyebrow="Core Operations" title={coreOps.title} className="pt-0">
          <div className="panel panel--subtle panel--static p-8">
            <div
              className="space-y-6 text-base leading-relaxed text-text-muted [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-text-primary [&_ul]:space-y-2 [&_li]:pl-4 [&_li]:text-sm [&_li]:text-text-muted [&_li]:before:-ml-3 [&_li]:before:mr-1 [&_li]:before:text-brand-gold [&_li]:before:content-['\\2022']"
              dangerouslySetInnerHTML={{ __html: coreOps.html }}
            />
          </div>
        </Section>

        <Section
          eyebrow="Strategic Pillars"
          title="Core operator pillars"
          description="AI-powered trading intelligence, accretive digital asset cycles, and applied AI integration for execution leverage."
          className="pt-0"
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
                className="panel panel--subtle flex flex-col gap-6 p-8 lg:col-span-4"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold/15 ring-1 ring-brand-gold/30">
                    {icon}
                  </div>
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.38em] text-brand-gold/80">{label}</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-text-primary">{headline}</h3>
                  {body && (
                    <p className="text-sm leading-relaxed text-text-muted">{body}</p>
                  )}
                </div>
                <ul className="space-y-2 text-sm text-text-muted">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-brand-copper" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-2">
                  <Button href={cta.href} variant="secondary" className="rounded-full text-xs uppercase tracking-[0.3em]">
                    {cta.label}
                  </Button>
                </div>
              </motion.div>
            ))}
          </Container>
        </Section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const path = await import("path");
  const fs = await import("fs/promises");
  const matter = (await import("gray-matter")).default;
  const { remark } = await import("remark");
  const remarkHtml = (await import("remark-html")).default;

  const coreOpsPath = path.join(process.cwd(), "content", "sections", "core-operations.md");
  const file = await fs.readFile(coreOpsPath, "utf8");
  const { data, content } = matter(file);
  const processed = await remark().use(remarkHtml).process(content);

  return {
    props: {
      coreOps: {
        title: data.title ?? "Core Operations",
        html: processed.toString()
      }
    }
  };
}
