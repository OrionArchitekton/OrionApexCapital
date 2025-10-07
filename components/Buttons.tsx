import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost" | "danger";

function variantButton(variant: Variant) {
  return function VariantButton({ className, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return <button className={clsx("btn", `btn-${variant}`, className)} {...rest} />;
  };
}

export const BtnPrimary = variantButton("primary");
export const BtnSecondary = variantButton("secondary");
export const BtnGhost = variantButton("ghost");
export const BtnDanger = variantButton("danger");
