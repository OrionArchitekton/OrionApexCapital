import Layout from "@/components/Layout";
import Logo from "@/components/Logo";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function About({ missionVision }) {
  return (
    <Layout 
      title="About"
      description="Orion Apex Capital is a modern holding company where human intuition + algorithmic precision drive disciplined growth. We govern three operating subsidiaries across AI, media, and trading R&D."
      url="/about"
    >
      <Section className="pb-12" containerClassName="space-y-10">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "About" }
          ]}
        />
  <div className="panel panel--accent panel--aurora overflow-hidden p-10 floating-1">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="space-y-8">
              <div className="flex flex-wrap items-center gap-4">
                <Logo variant="crestWhite" size={40} />
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-brand-copper pulse-dot">Operator studio</p>
                  <h1 className="font-display text-4xl leading-tight text-text-primary sm:text-5xl">
                    About Orion Apex Capital
                  </h1>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-text-muted">
                Orion Apex Capital is a modern holding company where <strong className="text-text-primary">human intuition + algorithmic precision</strong> drive disciplined growth. We own and coordinate three operating subsidiaries across AI agents, digital asset acquisition, and trading R&D.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Subsidiaries Governed", value: "3" },
                  { label: "Years Operating", value: "3+" },
                  { label: "Ecosystem Domains", value: "3" }
                ].map(({ label, value }, index) => (
                  <div key={label} className={`panel panel--kpi panel--inline p-4 text-left floating-${index + 1}`}>
                    <p className="text-xs uppercase tracking-[0.28em] text-text-muted">{label}</p>
                    <p className="mt-2 text-2xl font-semibold text-text-primary">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <aside className="panel panel--accent panel--aurora space-y-6 p-8 floating-2">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.32em] text-brand-copper">Operating Arms</p>
                <p className="text-base text-text-muted">
                  Three independent subsidiaries, each with clear mandates and coordinated through shared governance, architecture, and capital discipline.
                </p>
              </div>
              <ul className="space-y-3 text-sm text-text-muted">
                {[
                  "Orion Intelligence Agency: AI agents & orchestration",
                  "Orion Ascend Media: Digital asset acquisition & growth",
                  "Apex Trading Systems: Trading R&D & risk tooling"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="panel panel--accent panel--inline panel--static p-5 text-sm text-text-primary">
                <p className="text-xs uppercase tracking-[0.3em] text-brand-gold/80">Core Approach</p>
                <p className="mt-3 text-text-primary/85">
                  Corporate architecture, compliance posture, and clear no-custody/no-advice boundaries. Weekly KPI loops, lean infrastructure, and growth engines that compound.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Operating DNA"
        title="What sets Orion apart"
        description="We provide governance, architecture, and capital discipline so innovation compounds responsibly across independent subsidiaries."
      >
        <Container className="grid gap-6 lg:grid-cols-12">
          {[
            {
              title: "Structure",
              copy: "Ohio HoldCo with siloed subsidiaries. Clear intercompany IP & services agreements. No custody, no advice—just software, media, and R&D."
            },
            {
              title: "Discipline",
              copy: "Weekly KPI rhythm (replies • demos • closes • MRR). Lean infrastructure under $100/mo until scale demands more. Risk limits and audit-friendly logs."
            },
            {
              title: "Growth Engine",
              copy: "Ascend media properties generate qualified leads that route to OIA. AI orchestration and trading tooling compound our internal advantage."
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
