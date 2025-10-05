import clsx from "clsx";
import Image from "next/image";

import crestWhite from "@/assets/branding/03-icon_crest_white-transparent_sm.png";
import crestMaroonNavy from "@/assets/branding/orion-apex-logo.png";
import wordmarkWhite from "@/assets/branding/04-wordmark_white-transparent.png";
import wordmarkMaroonNavy from "@/assets/branding/04-wordmark_maroon-navy_sm.png";
import horizontalWhite from "@/assets/branding/02-horizontal_primary_white-transparent.png";
import horizontalMaroonNavy from "@/assets/branding/02b-horizontal_with_tagline_maroon-navy.png";

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

  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={clsx(className)}
    />
  );
}