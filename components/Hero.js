import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import taglines from "@/public/taglines.json";

const DEFAULT_BADGES = [
  { label: "Client Projects Delivered", value: "15+" },
  { label: "On-Time Delivery", value: "97%" },
  { label: "Years Operating", value: "3+" }
];

const FEATURE_BULLETS = [
  "Systematic wealth operations with AI + human oversight",
  "Live capital dashboards with compliance-ready reporting",
  "Boutique operator pods that ship outcomes, not decks"
];

export default function Hero({ badges = DEFAULT_BADGES }) {
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
              className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between"
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
              <span className="hidden text-xs uppercase tracking-[0.32em] text-text-muted/90 md:inline-flex">
                Boutique digital asset operators &bull; Confidential engagements only
              </span>
            </motion.div>

            <div className="grid gap-12 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
              <motion.div
                initial={fadeUp.initial}
                animate={fadeUp.animate}
                transition={{ ...transition, delay: 0.08 }}
                className="flex flex-col items-center gap-6 text-center md:items-start md:text-left"
              >
                <div className="flex flex-col items-center gap-3 md:items-start">
                  <h1 className="max-w-2xl font-display text-4xl leading-tight text-text-primary sm:text-5xl md:text-6xl">
                    {taglines.signature}
                  </h1>
                  <p className="max-w-2xl text-base text-text-muted md:text-lg">
                    {taglines.short}
                  </p>
                </div>

                <div className="flex flex-col items-center gap-4 sm:flex-row md:items-center">
                  <Link href="/services" className="btn btn-primary min-w-[180px] text-sm uppercase tracking-[0.28em]">
                    Explore Strategies
                  </Link>
                  <Link href="/contact" className="btn btn-secondary min-w-[180px] text-sm uppercase tracking-[0.28em]">
                    Partner With Us
                  </Link>
                </div>

                <motion.ul
                  initial={fadeUp.initial}
                  animate={fadeUp.animate}
                  transition={{ ...transition, delay: 0.18 }}
                  className="grid w-full gap-3 text-left text-sm text-text-muted md:max-w-xl"
                >
                  {FEATURE_BULLETS.map((bullet) => (
                    <li key={bullet} className="panel panel--inline panel--static flex items-center gap-3 p-4">
                      <span className="inline-flex h-2 w-2 rounded-full bg-[rgba(242,193,78,0.8)]" aria-hidden="true" />
                      <span className="text-sm leading-relaxed text-text-primary/90">{bullet}</span>
                    </li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.aside
                initial={fadeUp.initial}
                animate={fadeUp.animate}
                transition={{ ...transition, delay: 0.22 }}
                className="panel panel--subtle panel--static relative flex h-full flex-col justify-between gap-6 p-8"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-text-muted/80">Mission Control</p>
                    <p className="mt-2 text-2xl font-semibold text-text-primary">Operator Snapshot</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(242,193,78,0.35)] bg-[rgba(18,28,49,0.65)] text-[rgba(242,193,78,0.9)]">
                    <svg
                      className="h-6 w-6"
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
                <div className="grid gap-4">
                  {badges.map(({ label, value }) => (
                    <div key={label} className="panel panel--inline panel--static p-5">
                      <p className="text-xs uppercase tracking-[0.3em] text-text-muted/80">{label}</p>
                      <p className="mt-2 text-3xl font-semibold text-text-primary">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="panel panel--inline panel--static p-5 text-left">
                  <p className="text-xs uppercase tracking-[0.3em] text-text-muted/80">Confidence Rating</p>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-brand-gold/15">
                      <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-[rgba(242,193,78,0.8)] via-[rgba(161,29,51,0.85)] to-[rgba(28,47,77,0.9)]" />
                    </div>
                    <span className="text-sm font-semibold text-text-primary/90">82%</span>
                  </div>
                  <p className="mt-3 text-xs text-text-muted">
                    Active mandates across DeFi, digital assets, and revenue-backed transformations.
                  </p>
                </div>
              </motion.aside>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue highlight overlay */}
      <div
        className="panel panel--inline panel--static absolute bottom-6 left-6 right-6 flex flex-col gap-4 p-6 backdrop-blur"
        role="region"
        aria-label="Monthly revenue performance snapshot"
      >
        <div className="flex items-center justify-between text-sm text-text-muted">
          <span>Monthly revenue</span>
          <span className="font-semibold text-brand-gold">Up +18.2%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-brand-gold/15">
          <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-brand-copper to-brand-blue" aria-hidden="true" />
        </div>
        <dl className="grid grid-cols-2 gap-4 text-xs text-text-muted">
          <div className="flex flex-col gap-1">
            <dt className="tracking-[0.1em] uppercase text-text-muted/80">This month</dt>
            <dd className="text-lg font-semibold text-text-primary">$247K</dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="tracking-[0.1em] uppercase text-text-muted/80">Last month</dt>
            <dd className="text-lg font-semibold text-text-primary/70">$209K</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
