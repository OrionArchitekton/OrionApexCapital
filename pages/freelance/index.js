import { useMemo, useState } from "react";
import Layout from "@/components/Layout";
import Logo from "@/components/Logo";
import CaseStudyCard from "@/components/CaseStudyCard";
import Button from "@/components/Button";
import FilterBar from "@/components/FilterBar";
import { Section } from "@/components/Section";
import { Breadcrumb } from "@/components/Breadcrumb";
import Head from "next/head";
import { getAllCases } from "@/lib/cases";
import { generateFreelanceServiceJsonLd, renderJsonLdScript } from "@/lib/seo/jsonldService";

export default function Freelance({ cases }) {
  const freelanceJsonLd = generateFreelanceServiceJsonLd();
  const [selection, setSelection] = useState({ industry: "", outcome: "" });

  const industries = useMemo(() => {
    const values = cases
      .map((c) => c.industry ?? c.sector)
      .filter(Boolean);
    return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));
  }, [cases]);

  const outcomes = useMemo(() => {
    const values = cases.map((c) => c.outcome).filter(Boolean);
    return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));
  }, [cases]);

  const filteredCases = useMemo(() => {
    return cases.filter((c) => {
      const industryValue = c.industry ?? c.sector ?? "";
      const matchesIndustry = !selection.industry || industryValue === selection.industry;
      const matchesOutcome = !selection.outcome || c.outcome === selection.outcome;
      return matchesIndustry && matchesOutcome;
    });
  }, [cases, selection]);

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={renderJsonLdScript(freelanceJsonLd)}
        />
      </Head>
      <Layout
        title="Client Work"
        description="Strategic consulting and implementation services for operators, investors, and founders. We deliver measurable outcomes through disciplined execution across finance, operations, and digital assets."
        url="/freelance"
      >
        <Section containerClassName="space-y-12">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Core Operations", href: "/services" },
              { label: "Client Work" }
            ]}
          />
          <div className="panel panel--accent panel--aurora p-10 floating-1">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="space-y-6 lg:max-w-3xl">
                <div className="flex items-center gap-3">
                  <Logo variant="crestWhite" size={32} />
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-brand-copper pulse-dot">Operator Studio</p>
                    <h1 className="font-display text-4xl text-text-primary sm:text-5xl">Client Work</h1>
                  </div>
                </div>
                <p className="text-lg text-text-muted">
                  Strategic consulting and implementation across crypto trading, digital asset investing, and revenue operations. We ship <span className="font-semibold text-brand-gold">measurable outcomes</span> with disciplined execution and telemetry-backed governance.
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { label: "Engagements shipped", value: "28" },
                    { label: "Mandate win rate", value: "84%" },
                    { label: "Retention", value: "90 day+" }
                  ].map(({ label, value }, index) => (
                    <div key={label} className={`panel panel--kpi panel--inline panel--static p-4 text-left floating-${index + 1}`}>
                      <p className="text-xs uppercase tracking-[0.28em] text-text-muted">{label}</p>
                      <p className="mt-2 text-2xl font-semibold text-text-primary">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4 text-sm text-text-primary/80 lg:max-w-sm">
                <div className="panel panel--accent panel--aurora panel--inline p-6 text-text-primary floating-2">
                  <p className="text-xs uppercase tracking-[0.32em] text-brand-gold/80 mb-4">Mandate cadence</p>
                  <ul className="space-y-3 text-text-primary/85">
                    <li className="flex items-start gap-3 text-text-primary/90">
                      <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold" aria-hidden="true" />
                      Weekly operating reviews + dashboards
                    </li>
                    <li className="flex items-start gap-3 text-text-primary/90">
                      <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold" aria-hidden="true" />
                      Playbooks for market + ops turbulence
                    </li>
                    <li className="flex items-start gap-3 text-text-primary/90">
                      <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold" aria-hidden="true" />
                      Confidential telemetry sharing
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact" variant="primary" className="flex-1 px-8 py-4">
                    Schedule Consultation
                  </Button>
                  <Button href="/contact" variant="secondary" className="flex-1 px-8 py-4">
                    Request Proposal
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-12 space-y-6">
              <header className="space-y-3">
                <p className="text-xs uppercase tracking-[0.32em] text-text-muted/80">Selected case studies</p>
                <h2 className="text-2xl font-semibold text-text-primary">Outcomes shipped for operators</h2>
                <p className="text-sm text-text-muted">
                  Filter by sector focus and target outcome to explore relevant engagements.
                </p>
              </header>

              <FilterBar
                industries={industries}
                outcomes={outcomes}
                industry={selection.industry}
                outcome={selection.outcome}
                onChange={setSelection}
              />

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredCases.length ? (
                  filteredCases.map((c, index) => (
                    <CaseStudyCard
                      key={c.slug}
                      slug={c.slug}
                      title={c.title}
                      outcome={c.outcome}
                      tags={c.tags || []}
                      className={`floating-${(index % 3) + 1}`}
                    />
                  ))
                ) : (
                  <div className="md:col-span-2 xl:col-span-3 panel panel--subtle panel--aurora p-8 text-center text-sm text-text-muted/90">
                    No case studies match the selected filters. Try clearing one of the options above.
                  </div>
                )}
              </div>
            </div>
          </div>
        </Section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  return { props: { cases: getAllCases() } };
}

