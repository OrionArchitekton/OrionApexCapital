import Image from "next/image";

// Surface unique marks instead of repeating the same raster asset
const PARTNER_MARKS = [
  { src: "/images/branding/02-horizontal_primary_white-transparent.png", label: "Institutional partner badge" },
  { src: "/images/branding/04-wordmark_white-transparent.png", label: "Operator pods wordmark" },
  { src: "/images/branding/03-icon_crest_white-transparent.png", label: "Apex crest emblem" },
  { src: "/images/branding/logo_icon_square_white_1024.png", label: "Capital intelligence icon" },
  { src: "/images/branding/04-wordmark_maroon-navy_sm.png", label: "Strategic advisory mark" },
  { src: "/images/branding/02b-horizontal_with_tagline_white-transparent_sm.png", label: "Trading intelligence banner" }
];

export default function LogoGrid() {
  return (
    <div className="container py-10">
      <p className="mb-6 text-center text-sm text-text-muted">
        Operators &amp; partners we&apos;ve worked with
      </p>
      <div className="grid grid-cols-2 gap-6 opacity-80 sm:grid-cols-3 md:grid-cols-6">
        {PARTNER_MARKS.map(({ src, label }) => (
          <Image
            key={src}
            src={src}
            alt={label}
            width={140}
            height={40}
            loading="lazy"
            sizes="(max-width: 768px) 33vw, 140px"
            className="mx-auto h-10 w-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
}

