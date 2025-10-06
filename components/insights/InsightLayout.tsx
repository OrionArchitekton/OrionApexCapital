import { PropsWithChildren, ReactNode } from "react";
import clsx from "clsx";
import { Section } from "@/components/Section";

interface InsightLayoutProps extends PropsWithChildren {
  header: ReactNode;
  footer?: ReactNode;
  className?: string;
  containerClassName?: string;
}

export function InsightLayout({
  header,
  footer,
  className,
  containerClassName,
  children
}: InsightLayoutProps) {
  return (
    <div className={clsx("flex flex-col gap-16", className)}>
      {header}
      <Section
        className="py-0"
        containerClassName={clsx("max-w-4xl space-y-14", containerClassName)}
      >
        {children}
        {footer}
      </Section>
    </div>
  );
}
