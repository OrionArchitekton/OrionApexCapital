import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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

  const fadeUp = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    animate: { opacity: 1, y: 0 }
  };

  const transition = { duration: 0.9, ease: [0.16, 1, 0.3, 1] };

  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 px-6 py-24 sm:px-8 md:py-32">
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-[3rem] border border-white/10 bg-[rgba(10,18,34,0.92)] shadow-[0_40px_120px_-60px_rgba(0,0,0,0.7)]">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-55"
          autoPlay={!shouldReduceMotion}
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/branding/hero-1920x1080.jpg"
          aria-hidden="true"
        >
          <source src="/media/videos/curated/branding-loop.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(242,193,78,0.18),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(161,29,51,0.18),transparent_65%),linear-gradient(180deg,rgba(6,13,29,0.6)0%,rgba(6,13,29,0.9)100%)]" aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none" style={{ maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,1))" }} />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 text-center md:text-left">
        <motion.div
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={transition}
          className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(242,193,78,0.32)] bg-[rgba(12,21,39,0.72)] px-4 py-2 text-[0.65rem] uppercase tracking-[0.4em] text-[rgba(244,220,162,0.9)]">
            {taglines.micro}
          </span>
          <span className="hidden text-xs uppercase tracking-[0.32em] text-slate-300/80 md:inline-flex">
            Boutique digital asset operators • Confidential engagements only
          </span>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
          <motion.div
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...transition, delay: 0.08 }}
            className="flex flex-col items-center gap-6 text-center md:items-start md:text-left"
          >
            <div className="flex flex-col items-center gap-4 md:items-start">
              <Image
                src="/images/branding/02-horizontal_primary_white-transparent.png"
                alt="Orion Apex Capital wordmark"
                width={260}
                height={90}
                priority
                className="drop-shadow-[0_22px_48px_rgba(13,22,40,0.6)]"
              />
              <h1 className="max-w-2xl font-display text-4xl leading-tight text-slate-50 sm:text-5xl md:text-6xl">
                {taglines.signature}
              </h1>
              <p className="max-w-2xl text-base text-slate-300 md:text-lg">
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
              className="grid w-full gap-3 text-left text-sm text-slate-200 md:max-w-xl"
            >
              {FEATURE_BULLETS.map((bullet) => (
                <li key={bullet} className="glass relative flex items-center gap-3 rounded-2xl border border-white/10 bg-[rgba(12,21,39,0.72)] px-4 py-3">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[rgba(242,193,78,0.8)]" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-slate-200/90">{bullet}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.aside
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...transition, delay: 0.22 }}
            className="glass relative flex h-full flex-col justify-between gap-6 rounded-3xl border border-white/15 bg-[rgba(12,21,39,0.78)] p-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-slate-300/70">Mission Control</p>
                <p className="mt-2 text-2xl font-semibold text-slate-50">Operator Snapshot</p>
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
                <div key={label} className="rounded-2xl border border-white/10 bg-[rgba(9,16,30,0.72)] px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{label}</p>
                  <p className="mt-2 text-3xl font-semibold text-slate-50">{value}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-white/10 bg-[rgba(9,16,30,0.7)] px-5 py-4 text-left">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Confidence Rating</p>
              <div className="mt-3 flex items-center gap-3">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-[rgba(242,193,78,0.8)] via-[rgba(161,29,51,0.85)] to-[rgba(28,47,77,0.9)]" />
                </div>
                <span className="text-sm font-semibold text-slate-200">82%</span>
              </div>
              <p className="mt-3 text-xs text-slate-400">
                Active mandates across DeFi, digital assets, and revenue-backed transformations.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}