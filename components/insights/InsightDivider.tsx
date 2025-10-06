import clsx from "clsx";

interface InsightDividerProps {
  className?: string;
}

export function InsightDivider({ className }: InsightDividerProps) {
  return (
    <div
      className={clsx(
        "mx-auto h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-brand-copper/50 to-transparent",
        "opacity-70",
        className
      )}
    />
  );
}
