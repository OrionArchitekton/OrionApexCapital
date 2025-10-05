"use client";

import { motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import { PropsWithChildren } from "react";
import { Container } from "./Container";

interface SectionProps extends PropsWithChildren {
  title?: string;
  eyebrow?: string;
  description?: string;
  className?: string;
  containerClassName?: string;
  id?: string;
}

export function Section({
  title,
  eyebrow,
  description,
  className,
  containerClassName,
  id,
  children
}: SectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={clsx("py-20 sm:py-24", className)}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Container className={clsx("space-y-10", containerClassName)}>
        {(eyebrow || title || description) && (
          <header className="max-w-3xl space-y-4">
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-copper">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-display tracking-tight text-text-primary sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-base text-text-muted sm:text-lg">{description}</p>
            )}
          </header>
        )}
        {children}
      </Container>
    </motion.section>
  );
}
