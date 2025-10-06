import Link from "next/link";
import clsx from "clsx";
import { PropsWithChildren, ReactNode } from "react";

interface InsightCTAProps extends PropsWithChildren {
  title: string;
  description?: string;
  actionHref?: string;
  actionLabel?: string;
  disclaimer?: ReactNode;
  className?: string;
}

export function InsightCTA({
  title,
  description,
  actionHref = "/contact",
  actionLabel = "Partner with Orion Apex Capital",
  disclaimer,
  className,
  children
}: InsightCTAProps) {
  return (
    <section
      className={clsx(
        "relative overflow-hidden rounded-3xl border border-brand-copper/40 bg-gradient-to-br from-brand-navy/80 via-brand-navy/60 to-brand-copper/40",
        "px-8 py-14 text-center shadow-[0_35px_80px_-40px_rgba(14,36,51,0.9)] sm:px-12",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(230,197,74,0.25),_transparent_55%)]" />
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col gap-6 text-text-primary">
        <h3 className="font-display text-3xl sm:text-4xl">{title}</h3>
        {description && <p className="text-base text-text-muted sm:text-lg">{description}</p>}
        {children && <div className="text-sm text-text-muted">{children}</div>}
        <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href={actionHref}
            className="inline-flex items-center gap-2 rounded-full bg-brand-copper px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-text-onCopper shadow-glow transition hover:translate-y-[-2px] hover:opacity-95"
          >
            {actionLabel}
          </Link>
        </div>
        {disclaimer && <p className="text-xs text-text-muted/70">{disclaimer}</p>}
      </div>
    </section>
  );
}
