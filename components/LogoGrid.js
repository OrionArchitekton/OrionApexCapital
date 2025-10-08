import Image from "next/image";

export default function LogoGrid() {
  const logos = [
    "03-icon_crest_white-transparent.png",
    "04-wordmark_white-transparent.png",
    "03-icon_crest_white-transparent.png",
    "04-wordmark_white-transparent.png",
    "03-icon_crest_white-transparent.png",
    "04-wordmark_white-transparent.png"
  ];

  return (
    <div className="container py-10">
      <p className="mb-6 text-center text-sm text-text-muted">
        Operators &amp; Partners We&apos;ve Worked With
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 opacity-60">
        {logos.map((src, i) => (
          <Image
            key={i}
            src={`/images/branding/${src}`}
            alt="Partner logo"
            width={120}
            height={32}
            className="h-8 mx-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
}

