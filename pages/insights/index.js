import Layout from "@/components/Layout";
import Logo from "@/components/Logo";
import { Section } from "@/components/Section";
import { Breadcrumb } from "@/components/Breadcrumb";
import { InsightPreviewCard } from "@/components/insights";
import { getAllPosts } from "@/lib/posts";

export default function Insights({ posts }) {
  const featuredCount = posts.filter((p) => p.featured).length;

  return (
    <Layout 
      title="Market Insights"
      description="Deep analysis and strategic frameworks from the front lines of modern capital markets. Expert insights on crypto trading, digital assets, and systematic wealth creation."
      url="/insights"
      image="/og/og-insights.png"
    >
      <Section containerClassName="space-y-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Insights" }
          ]}
        />
        <div className="panel panel--accent panel--aurora overflow-hidden p-10 floating-1">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <Logo variant="crestWhite" size={32} />
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-brand-copper pulse-dot">Briefing center</p>
                <h1 className="font-display text-4xl leading-tight text-text-primary sm:text-[2.75rem]">
                  Market Insights
                </h1>
              </div>
            </div>
            <p className="max-w-2xl text-sm text-text-muted">
              Weekly operator notes covering trading setups, advisory playbooks, and asset recycling frameworks. Filter through to surface the signals that matter.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              { label: "Median read", value: "7 min" },
              { label: "Tags tracked", value: "12" },
              { label: "Featured briefs", value: featuredCount > 0 ? featuredCount : "3" }
            ].map(({ label, value }, index) => (
              <div key={label} className={`panel panel--kpi panel--inline p-5 text-left floating-${index + 1}`}>
                <p className="text-xs uppercase tracking-[0.28em] text-text-muted">{label}</p>
                <p className="mt-2 text-xl font-semibold text-text-primary">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => (
            <InsightPreviewCard key={post.slug} post={post} className={`floating-${(index % 3) + 1}`} />
          ))}
        </div>
      </Section>
    </Layout>
  );
}

export async function getStaticProps() {
  return { props: { posts: getAllPosts() } };
}
