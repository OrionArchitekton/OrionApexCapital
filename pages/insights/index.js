import Layout from "@/components/Layout";
import Logo from "@/components/Logo";
import { Section } from "@/components/Section";
import { Featured } from "@/components/Featured";
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function Insights({ posts }) {
  return (
    <Layout 
      title="Market Insights"
      description="Deep analysis and strategic frameworks from the front lines of modern capital markets. Expert insights on crypto trading, digital assets, and systematic wealth creation."
      url="/insights"
    >
      <Section
        eyebrow="Intelligence Briefs"
        title="Insights"
        description="Deep analysis and strategic frameworks from the front lines of modern capital markets."
        containerClassName="space-y-12"
      >
        <div className="flex flex-col gap-4 border border-white/10 bg-surface-1/60 px-6 py-5 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Logo variant="crestWhite" size={32} />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-text-muted">Briefing Center</p>
              <h1 className="text-2xl font-display leading-tight text-text-primary sm:text-3xl">
                Market Insights
              </h1>
            </div>
          </div>
          <p className="max-w-lg text-sm text-text-muted">
            Stay ahead with weekly operator notes across trading, digital asset velocity, and advisory systems.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((p) => {
            const published = new Date(p.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric"
            });

            return (
              <Link
                key={p.slug}
                href={`/insights/${p.slug}`}
                className="group flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-surface-1/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-copper/60 hover:shadow-2xl hover:shadow-brand-copper/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-copper focus-visible:ring-offset-2 focus-visible:ring-offset-surface-1"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-text-muted">
                  <span>{published}</span>
                  {p.featured && <Featured className="text-[0.55rem]">Featured</Featured>}
                </div>
                <h3 className="text-xl font-semibold text-text-primary transition group-hover:text-brand-copper">
                  {p.title}
                </h3>
                <p className="line-clamp-4 text-sm leading-relaxed text-text-muted">
                  {p.excerpt}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand-copper transition group-hover:gap-3">
                  Read insight
                  <svg className="h-4 w-4 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            );
          })}
        </div>
      </Section>
    </Layout>
  );
}

export async function getStaticProps() {
  return { props: { posts: getAllPosts() } };
}
