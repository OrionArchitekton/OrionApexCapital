import { useMemo, useState } from "react";
import Layout from "@/components/Layout";
import Logo from "@/components/Logo";
import CaseStudyCard from "@/components/CaseStudyCard";
import Button from "@/components/Button";
import FilterBar from "@/components/FilterBar";
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
        title="Client Services"
        description="Strategic consulting and implementation services for operators, investors, and founders. We deliver measurable outcomes through disciplined execution across finance, operations, and digital assets."
        url="/freelance"
      >
      <section className="container py-16">
        <div className="flex items-center gap-3 mb-6">
          <Logo variant="crestWhite" size={28} />
          <h1 className="text-3xl md:text-4xl font-bold">Freelance Work</h1>
        </div>

        {/* Service Description */}
        <div className="mb-8">
          <p className="text-xl text-neutral-300 mb-6 max-w-3xl">
            Strategic consulting and implementation services for operators, investors, and founders. 
            We deliver <span className="text-gold-500 font-semibold">measurable outcomes</span> through 
            disciplined execution across finance, operations, and digital assets.
          </p>
          
          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button href="/contact" variant="primary" className="px-8 py-4 text-lg">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Schedule Consultation
            </Button>
            <Button href="/contact" variant="outline" className="px-8 py-4 text-lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Request Proposal
            </Button>
          </div>
        </div>

        {/* Portfolio Section Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
            Selected Case Studies
          </h2>
          <p className="text-neutral-400 mb-4">
            Real projects with measurable impact across different sectors and service types.
          </p>
        </div>

        <FilterBar
          industries={industries}
          outcomes={outcomes}
          industry={selection.industry}
          outcome={selection.outcome}
          onChange={setSelection}
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCases.length ? (
            filteredCases.map((c) => (
              <CaseStudyCard
                key={c.slug}
                slug={c.slug}
                title={c.title}
                outcome={c.outcome}
                tags={c.tags || []}
              />
            ))
          ) : (
            <div className="md:col-span-2 lg:col-span-3 rounded-3xl border border-white/10 bg-surface-1/70 p-8 text-center text-sm text-neutral-300">
              No case studies match the selected filters. Try clearing one of the options above.
            </div>
          )}
        </div>
      </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  return { props: { cases: getAllCases() } };
}

