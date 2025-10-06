import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { formatDate } from "@/lib/date";

interface RelatedInsight {
  slug: string;
  title: string;
  excerpt?: string;
  date?: string;
  hero?: string;
  themeColor?: string;
}

interface RelatedInsightsProps {
  posts: RelatedInsight[];
  className?: string;
}

export function RelatedInsights({ posts, className }: RelatedInsightsProps) {
  if (!posts?.length) return null;

  return (
    <section className={clsx("space-y-6", className)}>
      <div className="flex items-center gap-3">
        <div className="h-8 w-1 rounded-full bg-gradient-to-b from-brand-gold to-brand-copper" />
        <h3 className="font-display text-2xl text-text-primary">Related Insights</h3>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/insights/${post.slug}`}
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-surface-1/80 transition hover:border-brand-copper/50 hover:shadow-[0_32px_50px_-40px_rgba(155,77,66,0.9)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              {post.hero ? (
                <Image
                  src={post.hero}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1280px) 400px, (min-width: 768px) 33vw, 100vw"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-navy to-brand-copper/60 text-text-primary">
                  <span className="text-lg font-semibold">Orion Apex</span>
                </div>
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              {post.date && (
                <span className="text-[0.65rem] uppercase tracking-[0.35em] text-text-muted">
                  {formatDate(post.date)}
                </span>
              )}
              <h4 className="text-lg font-semibold text-text-primary group-hover:text-brand-copper">
                {post.title}
              </h4>
              {post.excerpt && <p className="text-sm text-text-muted line-clamp-3">{post.excerpt}</p>}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
