import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="starfield border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-gold-500 to-teal-400 rounded-full blur opacity-30 animate-pulse"></div>
            <Image
              src="/images/branding/01-stacked_primary_white-transparent.png"
              alt="Orion Apex Capital"
              width={200}
              height={120}
              className="relative z-10 filter drop-shadow-2xl"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Orion Apex Capital
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 text-lg md:text-2xl text-slate-300"
        >
          Precision. Growth. Legacy.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-6 text-slate-300 max-w-3xl mx-auto"
        >
          We deploy disciplined, risk‑managed strategies across crypto markets and digital assets—aligning returns with long‑term purpose.
        </motion.p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link href="/services" className="btn btn-primary">Explore Strategies</Link>
          <Link href="/contact" className="btn btn-secondary">Partner With Us</Link>
        </div>
      </div>
    </section>
  );
}