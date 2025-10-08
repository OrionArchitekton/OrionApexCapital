import Image from "next/image";

// Surface unique marks instead of repeating the same raster asset
const PARTNER_MARKS = [
  { src: "/images/branding/03-icon_crest_white-transparent.png", label: "Orion Apex Capital" },
  { src: "/images/branding/03-icon_crest_white-transparent.png", label: "Partner Mark 1" },
  { src: "/images/branding/03-icon_crest_white-transparent.png", label: "Partner Mark 2" },
  { src: "/images/branding/03-icon_crest_white-transparent.png", label: "Partner Mark 3" },
  { src: "/images/branding/03-icon_crest_white-transparent.png", label: "Partner Mark 4" },
  { src: "/images/branding/03-icon_crest_white-transparent.png", label: "Partner Mark 5" }
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

