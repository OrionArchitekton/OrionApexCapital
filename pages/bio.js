import Layout from "@/components/Layout";
import Logo from "@/components/Logo";

export default function Bio() {
  return (
    <Layout title="Personal Bio">
      <section className="container py-16 space-y-8">
        <div className="flex items-center gap-3">
          <Logo variant="crestWhite" size={28} />
          <h2 className="text-2xl font-semibold">Personal Bio</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3 items-start">
          <div className="card md:col-span-1 flex flex-col items-center text-center">
            <img
              src="/images/branding/logo_avatar_round_1024.png"
              alt="Dan — Orion Apex Capital"
              className="h-40 w-40 mb-4 rounded-full object-cover"
            />
            <h1 className="text-2xl font-bold">Dan</h1>
            <p className="text-slate-300">General Manager • Trader • Builder</p>
          </div>

          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-semibold">Personal Bio</h2>
            <p className="text-slate-300">
              I lead operations and sales at a major fitness brand while
              building Orion Apex Capital—an operator's studio focused on
              disciplined growth across crypto and digital assets.
            </p>
            <p className="text-slate-300">
              Trading specialty: short-term setups with strict risk management
              (≥2:1 R:R, ATR-based stops).
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="card">
                <h3 className="font-semibold">Focus Areas</h3>
                <ul className="list-disc pl-5 text-slate-300 space-y-1 mt-2">
                  <li>Crypto trading (scalp, breakout, swing)</li>
                  <li>Website investing & resale</li>
                  <li>Sales systems & GTM execution</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="font-semibold">Operating Principles</h3>
                <ul className="list-disc pl-5 text-slate-300 space-y-1 mt-2">
                  <li>Risk first, always</li>
                  <li>Speed with discipline</li>
                  <li>Transparent reporting</li>
                  <li>Purpose-aligned decisions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="font-semibold text-xl">Story & Milestones</h3>
          <ul className="list-disc pl-5 text-slate-300 space-y-2 mt-2">
            <li>
              Sales & operations leadership, 24 Hour Fitness (multi-site
              impact).
            </li>
            <li>
              Short-term trading framework with automated SL/TP management.
            </li>
            <li>
              Launched website investing and AI-assisted assets.
            </li>
          </ul>
        </div>

        <div className="card bg-teal-400/5 border-teal-400/20">
          <p className="text-slate-300">
            <strong>For collaborations, speaking, or advisory requests</strong>,
            visit the{" "}
            <a href="/contact" className="underline text-teal-400">
              contact page
            </a>
            .
          </p>
        </div>
      </section>
    </Layout>
  );
}
