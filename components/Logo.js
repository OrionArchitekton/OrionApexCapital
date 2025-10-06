import clsx from "clsx";
import Image from "next/image";

import crestWhite from "@/public/images/branding/03-icon_crest_white-transparent.png";
import crestMaroonNavy from "@/public/images/branding/03-icon_crest_maroon-navy.png";
import wordmarkWhite from "@/public/images/branding/04-wordmark_white-transparent.png";
import wordmarkMaroonNavy from "@/public/images/branding/04-wordmark_maroon-navy.png";
import horizontalWhite from "@/public/images/branding/02-horizontal_primary_white-transparent.png";
import horizontalMaroonNavy from "@/public/images/branding/02-horizontal_primary_maroon-navy.png";

const sources = {
  crestWhite,
  crestMaroonNavy,
  wordmarkWhite,
  wordmarkMaroonNavy,
  horizontalWhite,
  horizontalMaroonNavy
};

export default function Logo({
  variant = "crestWhite",
  size = 32,
  className = "",
  alt = "Orion Apex Capital"
}) {
  const src = sources[variant] || sources.crestWhite;
  const isStaticImport = typeof src === "object" && src !== null && "width" in src && "height" in src;
  const width = size;
  const height = isStaticImport ? Math.round((size * src.height) / src.width) : size;

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={clsx(className)}
    />
  );
}