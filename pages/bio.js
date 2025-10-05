import Layout from "@/components/Layout";
import Logo from "@/components/Logo";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function Bio() {
  return (
    <Layout title="Personal Bio">
      <Section containerClassName="space-y-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Bio" }
          ]}
        />
        <Container className="grid gap-10 lg:grid-cols-12">
          <aside className="lg:col-span-4 flex flex-col items-center rounded-3xl border border-white/10 bg-surface-1/70 p-8 text-center shadow-2xl">
            <div className="relative h-44 w-44 overflow-hidden rounded-full border border-white/10">
              <Image
                src="/images/branding/logo_avatar_round_1024.png"
                alt="Dan — Orion Apex Capital"
                fill
                className="object-cover"
                sizes="176px"
              />
            </div>
            <h1 className="mt-6 font-display text-3xl text-text-primary">Dan</h1>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-copper">
              General Manager • Trader • Builder
            </p>
            <div className="mt-6 grid gap-3 text-sm text-text-muted">
              <p>24 Hour Fitness — Sales & Ops Leadership</p>
              <p>Operator Studio — Orion Apex Capital</p>
              <p>Mandates across crypto, advisory, digital assets</p>
            </div>
          </aside>
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Logo variant="crestWhite" size={32} />
                <h2 className="text-3xl font-semibold text-text-primary">Personal Bio</h2>
              </div>
              <p className="text-base text-text-muted sm:text-lg">
                I lead operations and sales at a national fitness brand while building Orion Apex Capital—an operator studio focused on disciplined growth across crypto markets and digital assets. Every initiative is grounded in risk management, data fluency, and operator discipline.
              </p>
              <p className="text-base text-text-muted sm:text-lg">
                Trading specialty: short-duration setups with strict risk protocols (≥2:1 R:R, ATR-based stops) and structured post-trade reviews.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-surface-1/70 p-6">
                <h3 className="text-xl font-semibold text-text-primary">Focus Areas</h3>
                <ul className="mt-3 space-y-2 text-sm text-text-muted">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-copper" />
                    Crypto trading (scalp, breakout, swing)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-copper" />
                    Website investing & resale systems
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-copper" />
                    Revenue architecture & GTM execution
                  </li>
                </ul>
              </div>
              <div className="rounded-3xl border border-white/10 bg-surface-1/70 p-6">
                <h3 className="text-xl font-semibold text-text-primary">Operating Principles</h3>
                <ul className="mt-3 space-y-2 text-sm text-text-muted">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-copper" />
                    Risk first, always
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-copper" />
                    Speed with discipline
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-copper" />
                    Transparent reporting
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-copper" />
                    Purpose-aligned decisions
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-surface-1/70 p-6">
              <h3 className="text-xl font-semibold text-text-primary">Story & Milestones</h3>
              <ul className="mt-3 space-y-3 text-sm text-text-muted">
                <li>Scaled sales operations across multi-site fitness portfolio.</li>
                <li>Built short-duration trading framework with automated SL/TP management and post-trade prompts.</li>
                <li>Launched digital asset acquisition playbooks blending AI tooling with operator oversight.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-brand-copper/30 bg-brand-copper/10 p-6 text-sm text-text-onCopper">
              <p>
                <strong>For collaborations, speaking, or advisory requests</strong>, connect via the {" "}
                <Link href="/contact" className="underline">
                  contact page
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
