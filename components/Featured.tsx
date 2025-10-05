import clsx from "clsx";
import { PropsWithChildren } from "react";

interface FeaturedProps extends PropsWithChildren {
  className?: string;
}

export function Featured({ className, children }: FeaturedProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 rounded-full bg-brand-copper/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-text-onCopper shadow-glow",
        className
      )}
    >
      {children ?? "Featured"}
    </span>
  );
}
