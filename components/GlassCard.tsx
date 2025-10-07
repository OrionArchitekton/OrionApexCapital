import { ElementType, ReactNode } from "react";
import clsx from "clsx";

type GlassCardProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export default function GlassCard({ as: Component = "div", className, children }: GlassCardProps) {
  return (
    <Component
      className={clsx(
        "glass rounded-3xl border border-white/10 bg-[rgba(12,21,39,0.75)] p-6 shadow-[0_28px_60px_-48px_rgba(3,7,18,0.9)]",
        className
      )}
    >
      {children}
    </Component>
  );
}
