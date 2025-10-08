import Link from "next/link";

export default function CaseStudyCard({ slug, title, outcome, tags = [] }) {
  return (
    <Link
      href={`/freelance/${slug}`}
      className="card block h-full rounded-3xl border border-white/12 bg-surface-0/75 p-6 transition hover:-translate-y-1 hover:border-brand-gold/40"
    >
      <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.28em] text-text-muted/70">
        <span>Case Study</span>
        <svg className="h-3 w-3 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
      <h3 className="mt-4 text-xl font-semibold text-text-primary">{title}</h3>
      <p className="mt-3 text-sm text-text-muted">{outcome}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-brand-gold/35 bg-brand-gold/10 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-brand-gold"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" aria-hidden="true" />
      <p className="mt-4 text-xs uppercase tracking-[0.28em] text-brand-gold">View engagement</p>
    </Link>
  );
}

