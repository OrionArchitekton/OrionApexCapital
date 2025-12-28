import type { Metadata } from "next";
import Link from "next/link";
import { subsidiaries } from "@/lib/data";
import styles from "./companies.module.css";

export const metadata: Metadata = {
  title: "Portfolio Companies | Orion Apex Capital",
  description:
    "Explore Orion Apex Capital portfolio companies: Cosmocrat, Orion Intelligence Agency, Orion Ascend Media, and Apex Trading Systems.",
};

export default function CompaniesPage() {
  return (
    <div className={styles.page}>
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-6">
          <p className="text-sm uppercase tracking-widest opacity-70 mb-4">
            Portfolio
          </p>
          <h1 className="text-3xl font-semibold mb-4">Companies</h1>
          <p className="text-base opacity-70 mb-12 max-w-xl">
            Orion Apex Capital governs a portfolio of specialized operating
            companies across intelligence, media, trading, and cognitive
            systems.
          </p>

          <p className="text-sm opacity-50 mb-8">
            Each company operates independently within the Orion Apex Capital portfolio.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {subsidiaries.map((company) => (
              <Link
                key={company.slug}
                href={company.url}
                className="block rounded-lg border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors"
              >
                <span className="text-xs uppercase tracking-widest opacity-50">
                  {company.short}
                </span>
                <h2 className="text-xl font-semibold mt-2 mb-2">
                  {company.name}
                </h2>
                <p className="text-sm opacity-70">{company.description}</p>
                <span className="inline-block mt-4 text-sm opacity-50">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
