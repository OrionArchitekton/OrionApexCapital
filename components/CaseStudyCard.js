import Link from "next/link";

export default function CaseStudyCard({ slug, title, outcome, tags = [] }) {
  return (
    <Link
      href={`/freelance/${slug}`}
      className="card block hover:translate-y-[-2px] transition"
    >
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-text-muted">{outcome}</p>
      <div className="mt-3 flex gap-2 flex-wrap">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-brand-gold/35 bg-brand-gold/10 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-brand-gold"
          >
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}

