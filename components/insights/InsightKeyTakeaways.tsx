import { PropsWithChildren } from "react";
import clsx from "clsx";
import { Lightbulb, Target, TrendingUp } from "lucide-react";

const icons = [TrendingUp, Target, Lightbulb];

interface InsightKeyTakeawaysProps extends PropsWithChildren {
  title?: string;
  items: Array<{ title: string; description?: string; icon?: number }>;
  className?: string;
}

export function InsightKeyTakeaways({ title = "Key Takeaways", items, className }: InsightKeyTakeawaysProps) {
  return (
    <section
      className={clsx(
        "rounded-3xl border border-white/10 bg-surface-1/80 p-8 sm:p-10",
        "shadow-[0_30px_60px_-40px_rgba(14,36,51,0.9)]",
        className
      )}
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="h-10 w-1 rounded-full bg-gradient-to-b from-brand-gold to-brand-copper" />
        <h3 className="font-display text-2xl text-text-primary">{title}</h3>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map(({ title: itemTitle, description, icon }, index) => {
          const Icon = icons[icon ?? index % icons.length];

          return (
            <div
              key={itemTitle}
              className="flex gap-4 rounded-2xl border border-white/10 bg-brand-navy/40 p-5 transition hover:border-brand-copper/40"
            >
              <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-brand-copper/20 text-brand-gold">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-text-primary">{itemTitle}</h4>
                {description && <p className="text-sm text-text-muted">{description}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
