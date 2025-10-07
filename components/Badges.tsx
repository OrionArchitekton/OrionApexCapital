import { HTMLAttributes } from "react";
import clsx from "clsx";

type BadgeProps = HTMLAttributes<HTMLSpanElement>;

export function Badge({ className, children, ...rest }: BadgeProps) {
  return (
    <span className={clsx("badge", className)} {...rest}>
      {children}
    </span>
  );
}

const variantBadge = (variantClass: string) =>
  function VariantBadge({ className, ...rest }: BadgeProps) {
    return <Badge className={clsx(variantClass, className)} {...rest} />;
  };

export const BadgeCap = variantBadge("badge-cap");
export const BadgeLift = variantBadge("badge-lift");
export const BadgeTtl = variantBadge("badge-ttl");
