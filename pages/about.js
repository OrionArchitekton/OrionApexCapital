import Layout from "@/components/Layout";
import Logo from "@/components/Logo";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function About() {
  return (
    <Layout 
      title="About"
      description="Orion Apex Capital was founded on disciplined strategy beating noise. We operate across crypto markets and digital assets with emphasis on risk management and execution speed."
      url="/about"
    >
      <Section className="pb-12" containerClassName="space-y-10">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "About" }
          ]}
        />
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-4">
              <Logo variant="crestWhite" size={36} />
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-brand-copper">Our platform</p>
                <h1 className="font-display text-4xl leading-tight text-text-primary sm:text-5xl">
                  About Orion Apex Capital
                </h1>
              </div>
            </div>
            <p className="text-base text-text-muted sm:text-lg">
              Orion Apex Capital operates on a simple mandate: disciplined strategy beats noise. We partner with investors and operators who value precision, transparent communication, and resilient execution across crypto markets and digital asset programs.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Years operating", value: "3+" },
                { label: "Programs deployed", value: "28" },
                { label: "Markets covered", value: "4" }
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-surface-1/70 p-4 text-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-text-muted">{stat.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-text-primary">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface-1/70 p-8 shadow-2xl shadow-black/30">
              <p className="text-sm uppercase tracking-[0.3em] text-brand-copper">Operator code</p>
              <p className="mt-4 text-lg leading-relaxed text-text-muted">
                We anchor every mandate in rigorous market prep, scenario planning, and risk-first governance. Execution teams stay lean, data-native, and accountable to cadence.
              </p>
              <div className="mt-6 space-y-3 text-sm text-text-muted">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-brand-copper" />
                  Institutional-grade reporting standards
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-brand-copper" />
                  Playbooks for both market and ops turbulence
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-brand-copper" />
                  Team of operators embedded in strategy + delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Operating DNA"
        title="What sets Orion apart"
        description="We synthesize trading intelligence, digital asset engineering, and advisory governance into a single operator stack."
      >
        <Container className="grid gap-6 lg:grid-cols-12">
          {[
            {
              title: "Mission",
              copy: "Build wealth with integrity and precision, compounding risk-adjusted returns into enduring legacy capital."
            },
            {
              title: "Values",
              copy: "Trust, transparency, and disciplined growth sit at the center of every mandate we accept."
            },
            {
              title: "Edge",
              copy: "Quantified trading systems + operator-led execution in real businesses, linked through shared telemetry."
            }
          ].map(({ title, copy }) => (
            <div key={title} className="lg:col-span-4 flex flex-col gap-3 rounded-2xl border border-white/10 bg-surface-1/70 p-6 transition hover:-translate-y-1 hover:border-brand-copper/50 hover:shadow-glow">
              <h3 className="text-xl font-semibold text-text-primary">{title}</h3>
              <p className="text-sm leading-relaxed text-text-muted">{copy}</p>
            </div>
          ))}
        </Container>
      </Section>
    </Layout>
  );
}
