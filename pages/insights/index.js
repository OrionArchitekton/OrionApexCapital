import Layout from "@/components/Layout";
import Logo from "@/components/Logo";
import { Section } from "@/components/Section";
import { InsightPreviewCard } from "@/components/insights";
import { getAllPosts } from "@/lib/posts";

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
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <InsightPreviewCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>
    </Layout>
  );
}

export async function getStaticProps() {
  return { props: { posts: getAllPosts() } };
}
