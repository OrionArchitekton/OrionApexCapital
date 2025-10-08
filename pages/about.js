import Layout from "@/components/Layout";
import Logo from "@/components/Logo";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function About({ missionVision }) {
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
  <div className="panel panel--accent panel--static overflow-hidden p-10">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="space-y-8">
              <div className="flex flex-wrap items-center gap-4">
                <Logo variant="crestWhite" size={40} />
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-brand-copper">Operator studio</p>
                  <h1 className="font-display text-4xl leading-tight text-text-primary sm:text-5xl">
                    About Orion Apex Capital
                  </h1>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-text-muted">
                Orion Apex Capital operates on a simple mandate: disciplined strategy beats noise. We partner with investors and operators who value precision, transparent communication, and resilient execution across crypto markets and digital asset programs.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Years operating", value: "3+" },
                  { label: "Programs deployed", value: "28" },
                  { label: "Markets covered", value: "4" }
                ].map(({ label, value }) => (
                  <div key={label} className="panel panel--inline panel--static p-4 text-left">
                    <p className="text-xs uppercase tracking-[0.28em] text-text-muted">{label}</p>
                    <p className="mt-2 text-2xl font-semibold text-text-primary">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <aside className="panel panel--subtle panel--static space-y-6 p-8">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.32em] text-brand-copper">Operator code</p>
                <p className="text-base text-text-muted">
                  Every mandate opens with rigorous market prep, scenario planning, and risk-first governance. Execution pods stay lean, data-native, and accountable to cadence.
                </p>
              </div>
              <ul className="space-y-3 text-sm text-text-muted">
                {[
                  "Institutional-grade reporting standards",
                  "Playbooks for market and ops turbulence",
                  "Operators embedded from strategy to delivery"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="panel panel--accent panel--inline panel--static p-5 text-sm text-text-primary">
                <p className="text-xs uppercase tracking-[0.3em] text-brand-gold/80">Signature belief</p>
                <p className="mt-3 text-text-primary/85">
                  Wealth compounds when discipline, telemetry, and purpose align. We structure engagements to keep all three anchored in every decision.
                </p>
              </div>
            </aside>
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
              <div key={title} className="panel panel--subtle lg:col-span-4 flex flex-col gap-4 p-6 transition">
              <p className="text-xs uppercase tracking-[0.28em] text-text-muted">{title}</p>
              <p className="text-base text-text-muted/90">{copy}</p>
            </div>
          ))}
        </Container>
      </Section>

      <Section
        eyebrow="Mission & Vision"
        title={missionVision.title}
        description={missionVision.summary}
      >
        <div className="panel panel--subtle panel--static p-8">
          <div
            className="space-y-6 text-base leading-relaxed text-text-muted [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-text-primary [&_blockquote]:border-l-2 [&_blockquote]:border-brand-gold [&_blockquote]:pl-4 [&_blockquote]:text-text-muted [&_strong]:text-text-primary"
            dangerouslySetInnerHTML={{ __html: missionVision.html }}
          />
        </div>
      </Section>
    </Layout>
  );
}

export async function getStaticProps() {
  const path = await import("path");
  const fs = await import("fs/promises");
  const matter = (await import("gray-matter")).default;
  const { remark } = await import("remark");
  const remarkHtml = (await import("remark-html")).default;

  const missionFilePath = path.join(process.cwd(), "content", "pages", "mission-vision.md");
  const file = await fs.readFile(missionFilePath, "utf8");
  const { data, content } = matter(file);
  const processed = await remark().use(remarkHtml).process(content);

  const missionVision = {
    title: data.title ?? "Mission & Vision",
    summary: data.summary ?? "",
    html: processed.toString()
  };

  return {
    props: {
      missionVision
    }
  };
}
