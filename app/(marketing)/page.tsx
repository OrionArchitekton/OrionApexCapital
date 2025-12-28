import type { Metadata } from "next";
import Link from "next/link";
import styles from "./home.module.css";

export const metadata: Metadata = {
  title: "Orion Apex Capital | Holding Company",
  description:
    "Orion Apex Capital is a holding company overseeing intelligence systems, digital assets, and automated operations.",
};

export default function HomePage() {
  return (
    <div className={styles.page}>
      <section className="py-24 text-center">
        <div className="container mx-auto max-w-3xl px-6">
          <p className="text-sm uppercase tracking-widest opacity-70 mb-4">
            Holding Company
          </p>
          <h1 className="text-4xl font-semibold mb-6">Orion Apex Capital</h1>
          <p className="text-xl leading-relaxed opacity-80 mb-8">
            A holding company overseeing intelligence systems, digital assets,
            and automated operations.
          </p>

          <div className="space-y-4 text-base leading-7 opacity-70 max-w-xl mx-auto mb-10">
            <p>
              Orion Apex Capital governs a portfolio of specialized operating
              companies.
            </p>
            <p>
              We provide structure, capital alignment, and shared infrastructure
              across the portfolio.
            </p>
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/companies"
              className="inline-flex items-center rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:opacity-90"
            >
              View Companies
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md border border-white/20 px-5 py-3 text-sm font-medium hover:bg-white/10"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
