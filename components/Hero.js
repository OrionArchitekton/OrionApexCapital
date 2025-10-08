import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import taglines from "@/public/taglines.json";

const FEATURE_BULLETS = [
  "Systematic wealth operations with AI + human oversight",
  "Live capital dashboards with compliance-ready reporting",
  "Boutique operator pods that ship outcomes, not decks"
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const rotatingTaglines = useMemo(() => {
    if (Array.isArray(taglines.rotation) && taglines.rotation.length > 0) {
      return taglines.rotation;
    }
    return [taglines.micro].filter(Boolean);
  }, []);

  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion || rotatingTaglines.length <= 1) return;

    const interval = typeof taglines.intervalMs === "number" ? taglines.intervalMs : 6000;
    const id = window.setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % rotatingTaglines.length);
    }, interval);

    return () => window.clearInterval(id);
  }, [rotatingTaglines, shouldReduceMotion]);

  const fadeUp = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    animate: { opacity: 1, y: 0 }
  };

  const transition = { duration: 0.9, ease: [0.16, 1, 0.3, 1] };

  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="panel panel--accent panel--static relative overflow-hidden p-8 sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(242,193,78,0.18),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(161,29,51,0.22),transparent_68%),linear-gradient(180deg,rgba(6,13,29,0.4)0%,rgba(6,13,29,0.88)100%)]" aria-hidden="true" />
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            style={{ WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,1))", maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,1))" }}
          />

          <div className="relative flex flex-col gap-12 text-center md:text-left">
            <motion.div
              initial={fadeUp.initial}
              animate={fadeUp.animate}
              transition={transition}
              className="flex flex-col items-center gap-4"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingTaglines[taglineIndex] ?? taglines.micro}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: [0.4, 0, 0.2, 1] }}
                  role="status"
                  aria-live="polite"
                  className="inline-flex items-center gap-2 rounded-full border border-[rgba(242,193,78,0.32)] bg-[rgba(12,21,39,0.72)] px-4 py-2 text-[0.65rem] uppercase tracking-[0.4em] text-[rgba(244,220,162,0.9)]"
                >
                  {rotatingTaglines[taglineIndex] ?? taglines.micro}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:items-center">
              <motion.div
                initial={fadeUp.initial}
                animate={fadeUp.animate}
                transition={{ ...transition, delay: 0.08 }}
                className="flex flex-col items-center gap-8 text-center md:items-start md:text-left"
              >
                <div className="flex flex-col items-center gap-4 md:items-start">
                  <h1 className="max-w-2xl font-display text-4xl leading-tight text-text-primary sm:text-5xl md:text-6xl">
                    {taglines.signature}
                  </h1>
                  <p className="max-w-lg text-lg text-text-muted/80 md:text-xl">
                    {taglines.short}
                  </p>
                </div>

                <div className="flex flex-col items-center gap-4 sm:flex-row">
                  <Link href="/services#ai-trading" className="btn btn-primary min-w-[200px] px-8 py-3 text-sm uppercase tracking-[0.28em]">
                    Explore Strategies
                  </Link>
                  <Link href="/contact" className="btn btn-secondary min-w-[200px] px-8 py-3 text-sm uppercase tracking-[0.28em]">
                    Partner With Us
                  </Link>
                </div>
              </motion.div>

              <motion.aside
                initial={fadeUp.initial}
                animate={fadeUp.animate}
                transition={{ ...transition, delay: 0.16 }}
                className="panel panel--accent relative flex h-full flex-col gap-6 p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-text-muted/80">Mission Control</p>
                    <p className="mt-2 text-xl font-semibold text-text-primary">Operator Snapshot</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(242,193,78,0.35)] bg-[rgba(18,28,49,0.65)] text-[rgba(242,193,78,0.9)]">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                  </div>
                </div>
                <div className="grid gap-3 text-center">
                  {[
                    { label: "Projects", value: "15+" },
                    { label: "On-Time", value: "97%" },
                    { label: "Operating", value: "3+ yrs" }
                  ].map(({ label, value }) => (
                    <div key={label} className="panel panel--inline panel--static p-3 text-center">
                      <p className="text-xs uppercase tracking-[0.28em] text-text-muted/80">{label}</p>
                      <p className="mt-1 text-lg font-semibold text-text-primary">{value}</p>
                    </div>
                  ))}
                </div>
              </motion.aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
