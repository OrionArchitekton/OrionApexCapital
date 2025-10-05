import { ElementType, PropsWithChildren } from "react";
import clsx from "clsx";

type ContainerProps = PropsWithChildren<{
  as?: ElementType;
  className?: string;
  bleed?: boolean;
}>;

export function Container({ as: Component = "div", className, bleed = false, children }: ContainerProps) {
  return (
    <Component
      className={clsx(
        bleed ? "px-4 sm:px-6" : "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </Component>
  );
}
