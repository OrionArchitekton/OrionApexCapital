import { ReactElement, ReactNode } from "react";

type CalloutVariant = "signal" | "success" | "warning";

type CalloutProps = {
  title?: string;
  eyebrow?: string;
  variant?: CalloutVariant;
  children: ReactNode;
};

const styles: Record<CalloutVariant, { border: string; background: string; badge: string; icon: ReactElement }> = {
  signal: {
    border: "border-[rgba(242,193,78,0.32)]",
    background: "bg-[rgba(12,21,39,0.78)]",
    badge: "bg-[rgba(242,193,78,0.16)] text-[rgba(242,193,78,0.9)] border-[rgba(242,193,78,0.32)]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    )
  },
  success: {
    border: "border-[rgba(56,189,248,0.35)]",
    background: "bg-[rgba(10,26,36,0.82)]",
    badge: "bg-[rgba(56,189,248,0.16)] text-[rgba(165,243,252,0.95)] border-[rgba(56,189,248,0.32)]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12l5 5 9-11" />
      </svg>
    )
  },
  warning: {
    border: "border-[rgba(248,113,113,0.35)]",
    background: "bg-[rgba(24,12,18,0.82)]",
    badge: "bg-[rgba(248,113,113,0.16)] text-[rgba(254,202,202,0.9)] border-[rgba(248,113,113,0.35)]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
        <path d="M10 3h4l7 12-7 6h-4l-7-6z" />
      </svg>
    )
  }
};

export default function Callout({ title, eyebrow, variant = "signal", children }: CalloutProps) {
  const { border, background, badge, icon } = styles[variant];

  return (
    <aside
      className={`glass relative overflow-hidden rounded-3xl border ${border} ${background} p-6 shadow-[0_24px_60px_-40px_rgba(3,7,18,0.9)]`}
    >
      <div className="flex items-start gap-4">
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${badge}`}
          aria-hidden="true"
        >
          {icon}
        </span>
        <div className="space-y-3 text-left">
          {eyebrow ? (
            <p className="text-[0.65rem] uppercase tracking-[0.35em] text-slate-400/80">{eyebrow}</p>
          ) : null}
          {title ? (
            <h4 className="text-lg font-semibold text-slate-50">{title}</h4>
          ) : null}
          <div className="text-sm leading-relaxed text-slate-200/90">{children}</div>
        </div>
      </div>
    </aside>
  );
}
