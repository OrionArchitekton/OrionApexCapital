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
        "panel panel--subtle p-6",
        className
      )}
    >
      {children}
    </Component>
  );
}
