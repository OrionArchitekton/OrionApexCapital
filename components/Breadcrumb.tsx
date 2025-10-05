import Link from "next/link";
import clsx from "clsx";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  if (!items?.length) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={clsx("text-xs uppercase tracking-[0.35em] text-text-muted", className)}
    >
      <ol className="flex flex-wrap items-center gap-3">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-3">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="transition hover:text-brand-copper focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-copper focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-text-primary">{item.label}</span>
              )}
              {!isLast && <span aria-hidden="true" className="text-text-muted">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
