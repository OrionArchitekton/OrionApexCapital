import clsx from "clsx";
import Image from "next/image";

import crestWhite from "@/assets/branding/logo_icon_square_white_1024.png";
import crestMaroonNavy from "@/assets/branding/orion-apex-logo.png";
import wordmarkWhite from "@/assets/branding/orion-apex-logo - Copy.png";
import wordmarkMaroonNavy from "@/assets/branding/orion-apex-logo - Copy.png";
import horizontalWhite from "@/assets/branding/hero-2560x1440.jpg";
import horizontalMaroonNavy from "@/assets/branding/hero-2560x1440.jpg";

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