import { PropsWithChildren } from "react";
import clsx from "clsx";

interface InsightBodyProps extends PropsWithChildren {
  className?: string;
}

export function InsightBody({ className, children }: InsightBodyProps) {
  return (
    <div
      className={clsx(
        "prose prose-invert prose-slate max-w-none",
        "prose-headings:font-display prose-headings:text-text-primary",
        "prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl",
        "prose-p:text-text-muted prose-strong:text-text-primary",
        "prose-ul:text-text-muted prose-ol:text-text-muted prose-li:marker:text-brand-gold",
        "prose-code:rounded-md prose-code:bg-brand-navy/60 prose-code:px-1.5 prose-code:py-1",
        "prose-a:text-brand-gold prose-a:no-underline hover:prose-a:underline",
        "prose-img:rounded-3xl prose-img:border prose-img:border-white/10 prose-img:shadow-[0_18px_40px_-25px_rgba(14,36,51,0.9)]",
        "prose-blockquote:border-brand-copper prose-blockquote:text-text-primary",
        className
      )}
    >
      {children}
    </div>
  );
}
