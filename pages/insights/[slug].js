import { MDXRemote } from "next-mdx-remote";
import Layout from "@/components/Layout";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  InsightBody,
  InsightCTA,
  InsightDivider,
  InsightHero,
  InsightHighlight,
  InsightImage,
  InsightKeyTakeaways,
  InsightLayout,
  InsightMeta,
  RelatedInsights
} from "@/components/insights";
import { Section } from "@/components/Section";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { formatDate } from "@/lib/date";
import Callout from "@/components/Callout";

const mdxComponents = {
  InsightImage,
  Callout
};

export default function Post({ post, related }) {
  const publishedDate = formatDate(post.date) ?? post.date;

  return (
    <Layout
      title={post.title}
      description={post.excerpt}
      url={`/insights/${post.slug}`}
      image={post.ogImage ?? post.heroImage ?? "/og/og-insights.png"}
      twitterImage={post.twitterImage ?? post.heroImage ?? "/og/og-insights.png"}
    >
      <InsightLayout
        header={
          <>
            <Section className="py-10" containerClassName="max-w-6xl">
              <Breadcrumb
                items={[
                  { label: "Home", href: "/" },
                  { label: "Insights", href: "/insights" },
                  { label: post.title }
                ]}
              />
            </Section>
            <InsightHero
              title={post.title}
              subtitle={post.summary}
              eyebrow={post.eyebrow}
              imageSrc={post.heroImage}
              imageAlt={post.heroAlt}
              priorityImage
              meta={
                <InsightMeta
                  date={publishedDate}
                  tags={post.tags ?? []}
                  readingTime={post.readingTime}
                  featured={post.featured}
                />
              }
            >
              {post.disclaimer && (
                <p className="text-xs text-text-muted/80">{post.disclaimer}</p>
              )}
            </InsightHero>
          </>
        }
        footer={
          related?.length ? (
            <RelatedInsights posts={related} className="pt-6" />
          ) : null
        }
      >
        <InsightBody>
          <MDXRemote {...post.mdxSource} components={mdxComponents} />
        </InsightBody>

        {post.highlight && (
          <>
            <InsightDivider className="my-12" />
            <InsightHighlight author={post.highlightAuthor}>{post.highlight}</InsightHighlight>
          </>
        )}

        {post.takeaways?.length ? (
          <>
            <InsightDivider className="my-12" />
            <InsightKeyTakeaways items={post.takeaways} />
          </>
        ) : null}

        <InsightDivider className="my-12" />

        <InsightCTA
          title={post.ctaHeadline ?? "Partner with Orion Apex Capital"}
          description={
            post.ctaDescription ??
            "Navigate market volatility and operational scaling with a team that has lived the playbook."
          }
          actionHref={post.ctaHref ?? "/contact"}
          actionLabel={post.ctaActionLabel ?? "Start a Strategy Session"}
          disclaimer={post.disclaimer ?? undefined}
        />
      </InsightLayout>
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
  const posts = getAllPosts();

  const related = posts
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      date: p.date,
      hero: p.heroImage,
      tags: p.tags ?? []
    }))
    .filter((p) => {
      if (!post.tags?.length) return true;
      return p.tags?.some((tag) => post.tags.includes(tag));
    })
    .slice(0, 3);

  return { props: { post, related } };
}
