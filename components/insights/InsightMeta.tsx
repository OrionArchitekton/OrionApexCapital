import clsx from "clsx";
import { Featured } from "@/components/Featured";

interface InsightMetaProps {
  date: string;
  tags?: string[];
  readingTime?: string;
  featured?: boolean;
  className?: string;
}

export function InsightMeta({ date, tags = [], readingTime, featured, className }: InsightMetaProps) {
  return (
    <div
      className={clsx(
        "flex flex-wrap items-center justify-center gap-3 text-[0.65rem] uppercase tracking-[0.35em] text-text-muted",
        className
      )}
    >
      <span className="rounded-full border border-white/15 px-3 py-1 text-[0.6rem]">
        {date}
      </span>
      {readingTime && (
        <span className="rounded-full border border-white/10 px-3 py-1 text-[0.6rem]">
          {readingTime}
        </span>
      )}
      {tags.map((tag) => (
        <span key={tag} className="rounded-full border border-white/15 px-3 py-1 text-[0.6rem]">
          {tag}
        </span>
      ))}
      {featured && <Featured className="text-[0.55rem]">Featured</Featured>}
    </div>
  );
}
