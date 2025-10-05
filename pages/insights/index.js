import Layout from "@/components/Layout";
import Logo from "@/components/Logo";
import { getAllPosts } from "@/lib/posts";

export default function Insights({ posts }) {
  return (
    <Layout 
      title="Market Insights"
      description="Deep analysis and strategic frameworks from the front lines of modern capital markets. Expert insights on crypto trading, digital assets, and systematic wealth creation."
      url="/insights"
    >
      <section className="container py-16">
        <div className="flex items-center gap-3 mb-6">
          <Logo variant="crestWhite" size={28} />
          <h1 className="text-3xl md:text-4xl font-bold">Insights</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <a
              key={p.slug}
              href={`/insights/${p.slug}`}
              className="card block hover:shadow-elev transition"
            >
              <h3 className="font-semibold text-xl">{p.title}</h3>
              <p className="text-slate-300 mt-2">{p.excerpt}</p>
              <p className="text-xs text-slate-400 mt-3">
                {new Date(p.date).toLocaleDateString()}
              </p>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  return { props: { posts: getAllPosts() } };
}
