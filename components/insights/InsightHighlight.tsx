import clsx from "clsx";
import { PropsWithChildren } from "react";

interface InsightHighlightProps extends PropsWithChildren {
  author?: string;
  light?: boolean;
  className?: string;
}

export function InsightHighlight({ author, light = false, className, children }: InsightHighlightProps) {
  return (
    <figure
      className={clsx(
        "relative overflow-hidden rounded-2xl border border-brand-copper/40 bg-brand-navy/20 p-8 sm:p-10",
        "shadow-[0_20px_45px_-30px_rgba(155,77,66,0.8)]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-copper/15 via-transparent to-brand-gold/10 opacity-70" />
      <blockquote
        className={clsx(
          "relative z-10 border-l-4 pl-6 text-lg italic leading-relaxed sm:text-xl",
          light ? "border-white/40 text-text-primary" : "border-brand-copper text-text-primary"
        )}
      >
        {children}
      </blockquote>
      {author && (
        <figcaption className="relative z-10 mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-brand-gold/80">
          {author}
        </figcaption>
      )}
    </figure>
  );
}
