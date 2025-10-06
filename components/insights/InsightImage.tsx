import Image from "next/image";
import clsx from "clsx";

interface InsightImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  priority?: boolean;
  className?: string;
}

export function InsightImage({
  src,
  alt,
  width = 1200,
  height = 720,
  caption,
  priority = false,
  className
}: InsightImageProps) {
  return (
    <figure className={clsx("my-12 space-y-4", className)}>
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-brand-navy/60 shadow-[0_25px_60px_-40px_rgba(14,36,51,0.95)]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="h-auto w-full object-cover transition duration-700 hover:scale-[1.01]"
          sizes="(min-width: 1280px) 900px, (min-width: 768px) 70vw, 100vw"
        />
      </div>
      {caption && (
        <figcaption className="text-center text-sm text-text-muted/80">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
