import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";
import { PropsWithChildren, ReactNode } from "react";

const crestSrc = "/images/branding/03-icon_crest_white-transparent.png";

interface InsightHeroProps extends PropsWithChildren {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  meta?: ReactNode;
  imageSrc: string;
  imageAlt?: string;
  priorityImage?: boolean;
  className?: string;
}

export function InsightHero({
  title,
  subtitle,
  eyebrow,
  meta,
  imageSrc,
  imageAlt = "Insight illustration",
  priorityImage = false,
  className,
  children
}: InsightHeroProps) {
  return (
    <motion.header
      className={clsx(
        "relative overflow-hidden bg-gradient-to-b from-brand-navy/95 via-brand-navy/85 to-surface-2 text-center",
        "py-20 sm:py-24 md:py-28",
        className
      )}
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={crestSrc}
          alt=""
          fill
          className="object-contain object-center opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/50 via-transparent to-brand-copper/20" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-10 px-6">
        <div className="space-y-4 text-text-primary">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-gold/80">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto max-w-2xl text-base text-text-muted sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>

        <motion.div
          className="relative w-full max-w-4xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        >
          <div className="absolute -inset-3 rounded-[40px] bg-gradient-to-r from-brand-copper/30 via-brand-gold/20 to-brand-copper/10 opacity-70 blur-xl" />
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1400}
            height={750}
            priority={priorityImage}
            className="relative z-10 rounded-[32px] border border-white/15 shadow-[0_28px_60px_-30px_rgba(0,0,0,0.55)]"
          />
        </motion.div>

        {meta && <div className="text-xs uppercase tracking-[0.35em] text-text-muted">{meta}</div>}
        {children}
      </div>
    </motion.header>
  );
}
