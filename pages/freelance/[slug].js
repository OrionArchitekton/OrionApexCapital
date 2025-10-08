import Layout from "@/components/Layout";
import Link from "next/link";
import { getAllCases, getCaseBySlug } from "@/lib/cases";

export default function CaseStudy({ cs }) {
  return (
    <Layout title={cs.title} description={cs.outcome}>
      <section className="container py-16 max-w-3xl">
        <article className="space-y-6">
          <div>
            <h1 className="text-3xl font-display text-text-primary md:text-4xl">{cs.title}</h1>
            <p className="mt-3 text-lg text-text-muted">{cs.outcome}</p>
          </div>

          {cs.tags && cs.tags.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {cs.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-brand-gold/35 bg-brand-gold/10 px-3 py-1 text-sm uppercase tracking-[0.18em] text-brand-gold"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {cs.timeline && (
            <div className="glass border border-brand-gold/20 bg-surface-1/70 p-4">
              <p className="text-sm text-text-muted">
                <span className="font-semibold text-text-primary">Timeline:</span> {cs.timeline}
              </p>
            </div>
          )}

          <div
            className="prose prose-invert max-w-none
              prose-headings:text-text-primary
              prose-p:text-text-muted
              prose-strong:text-text-primary
              prose-a:text-brand-gold prose-a:no-underline hover:prose-a:underline hover:prose-a:text-brand-gold/80
              prose-ul:text-text-muted prose-ol:text-text-muted prose-li:marker:text-brand-gold/80"
            dangerouslySetInnerHTML={{ __html: cs.html }}
          />

          <div className="glass border border-brand-gold/30 bg-brand-gold/10">
            <p className="text-text-muted">
              <span className="font-semibold text-text-primary">Interested in similar work?</span>{" "}
              <Link href="/contact" className="underline text-brand-gold transition hover:text-brand-gold/80">
                Get in touch
              </Link>
              .
            </p>
          </div>
        </article>
      </section>
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

