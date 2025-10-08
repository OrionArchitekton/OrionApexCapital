import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { Featured } from "@/components/Featured";
import { formatDate } from "@/lib/date";

interface InsightPreviewCardProps {
  post: {
    slug: string;
    title: string;
    excerpt?: string;
    summary?: string;
    heroImage?: string;
    heroAlt?: string;
    date?: string;
    readingTime?: string;
    tags?: string[];
    featured?: boolean;
  };
  className?: string;
  ctaLabel?: string;
  showTags?: boolean;
}

export function InsightPreviewCard({
  post,
  className,
  ctaLabel = "Read insight",
  showTags = true
}: InsightPreviewCardProps) {
  const publishedOn = post.date ? formatDate(post.date) : undefined;

  const displayBody = post.summary ?? post.excerpt ?? "";

  return (
    <Link
      href={`/insights/${post.slug}`}
      className={clsx(
        "panel panel--subtle group flex h-full flex-col overflow-hidden transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-copper/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        className
      )}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/10">
        {post.heroImage ? (
          <>
            <Image
              src={post.heroImage}
              alt={post.heroAlt ?? post.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-brand-navy/35 via-brand-navy/10 to-brand-navy/65"
              aria-hidden="true"
            />
          </>
        ) : (
          <div
            className="absolute inset-0 bg-gradient-to-br from-brand-navy/70 via-brand-copper/30 to-brand-blue/40"
            aria-hidden="true"
          />
        )}
        {post.featured ? (
          <Featured className="absolute left-4 top-4 z-10 bg-brand-copper px-3 py-1 text-[0.55rem] shadow-brand-copper/40">
            Featured
          </Featured>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.35em] text-text-muted">
          <span>{publishedOn}</span>
          {post.readingTime ? (
            <span className="text-text-muted/80">{post.readingTime}</span>
          ) : null}
        </div>

        <h3 className="text-xl font-semibold text-text-primary transition-colors duration-300 group-hover:text-brand-copper">
          {post.title}
        </h3>

        <p className="line-clamp-4 text-sm leading-relaxed text-text-muted">{displayBody}</p>

        {showTags && post.tags?.length ? (
          <div className="flex flex-wrap gap-2 pt-1">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.6rem] uppercase tracking-[0.35em] text-text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand-copper transition-all duration-300 group-hover:gap-3">
          {ctaLabel}
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
