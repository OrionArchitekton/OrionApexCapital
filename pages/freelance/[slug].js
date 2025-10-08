import Layout from "@/components/Layout";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { getAllCases, getCaseBySlug } from "@/lib/cases";

export default function CaseStudy({ cs }) {
  return (
    <Layout title={cs.title} description={cs.outcome}>
      <Section containerClassName="space-y-10" className="pb-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Core Operations", href: "/services" },
            { label: "Client Work", href: "/freelance" },
            { label: cs.title }
          ]}
        />
        <Container className="max-w-3xl space-y-8">
          <header className="panel panel--accent panel--aurora space-y-5 p-8 floating-1">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.32em] text-brand-copper pulse-dot">Case study</p>
              <h1 className="font-display text-3xl text-text-primary md:text-4xl">{cs.title}</h1>
              <p className="text-base text-text-muted md:text-lg">{cs.outcome}</p>
            </div>
            {(cs.tags?.length ?? 0) > 0 && (
              <div className="flex flex-wrap gap-2">
                {cs.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-brand-gold/35 bg-brand-gold/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-brand-gold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {cs.timeline && (
              <div className="panel panel--kpi panel--inline p-4 text-sm text-text-muted floating-2">
                <span className="font-semibold text-text-primary">Timeline:</span> {cs.timeline}
              </div>
            )}
          </header>

          <article className="panel panel--accent panel--aurora p-8 floating-2">
            <div
              className="prose prose-invert max-w-none
                prose-headings:text-text-primary
                prose-p:text-text-muted
                prose-strong:text-text-primary
                prose-a:text-brand-gold prose-a:no-underline hover:prose-a:underline hover:prose-a:text-brand-gold/80
                prose-ul:text-text-muted prose-ol:text-text-muted prose-li:marker:text-brand-gold/80"
              dangerouslySetInnerHTML={{ __html: cs.html }}
            />
          </article>

          <div className="panel panel--accent panel--aurora panel--inline p-6 text-sm text-text-onCopper floating-3">
            <p>
              <span className="font-semibold text-text-onCopper">Interested in similar work?</span>{" "}
              <Link href="/contact" className="underline">
                Get in touch
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const cases = getAllCases();
  return {
    paths: cases.map((c) => ({ params: { slug: c.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const cs = await getCaseBySlug(params.slug);
  return { props: { cs } };
}

