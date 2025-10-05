import Layout from "@/components/Layout";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Featured } from "@/components/Featured";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export default function Post({ post }) {
  return (
    <Layout title={post.title} description={post.excerpt}>
      <Section className="py-24" containerClassName="max-w-4xl space-y-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Insights", href: "/insights" },
            { label: post.title }
          ]}
        />
        <Container className="space-y-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-text-muted">
              <span>{new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric"
              })}</span>
              {post.tags?.map((tag) => (
                <span key={tag} className="rounded-full border border-white/15 px-3 py-1 text-[0.6rem]">
                  {tag}
                </span>
              ))}
              {post.featured && <Featured className="text-[0.55rem]">Featured</Featured>}
            </div>
            <h1 className="font-display text-4xl leading-tight text-text-primary sm:text-5xl">
              {post.title}
            </h1>
            {post.summary && (
              <p className="text-base text-text-muted sm:text-lg">{post.summary}</p>
            )}
          </div>
          <article
            className="prose prose-invert prose-slate max-w-none border-t border-white/10 pt-8
              prose-headings:text-neutral-100 prose-h2:text-2xl prose-h2:tracking-tight prose-h3:text-xl
              prose-p:text-text-muted prose-a:text-brand-copper prose-a:no-underline hover:prose-a:underline
              prose-strong:text-text-primary prose-ul:text-text-muted prose-ol:text-text-muted"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </Container>
      </Section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  return {
    paths: posts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  return { props: { post } };
}
