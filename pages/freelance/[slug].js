import Layout from "@/components/Layout";
import Link from "next/link";
import { getAllCases, getCaseBySlug } from "@/lib/cases";

export default function CaseStudy({ cs }) {
  return (
    <Layout title={cs.title} description={cs.outcome}>
      <section className="container py-16 max-w-3xl">
        <article className="space-y-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">{cs.title}</h1>
            <p className="text-lg text-slate-300 mt-3">{cs.outcome}</p>
          </div>

          {cs.tags && cs.tags.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {cs.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-white/10 px-3 py-1 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {cs.timeline && (
            <div className="card bg-white/3">
              <p className="text-sm">
                <strong>Timeline:</strong> {cs.timeline}
              </p>
            </div>
          )}

          <div
            className="prose prose-invert prose-slate max-w-none
              prose-headings:text-neutral-100
              prose-p:text-slate-300
              prose-a:text-teal-400 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-neutral-100
              prose-ul:text-slate-300
              prose-ol:text-slate-300"
            dangerouslySetInnerHTML={{ __html: cs.html }}
          />

          <div className="card bg-teal-400/5 border-teal-400/20">
            <p className="text-slate-300">
              <strong>Interested in similar work?</strong>{" "}
              <Link href="/contact" className="underline text-teal-400">
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

