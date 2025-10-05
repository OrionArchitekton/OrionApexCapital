import Layout from "@/components/Layout";
import Logo from "@/components/Logo";

export default function About() {
  return (
    <Layout title="About">
      <section className="container py-16 space-y-6">
        <div className="flex items-center gap-3">
          <Logo variant="crestWhite" size={28} />
          <h1 className="text-3xl md:text-4xl font-bold">About Orion Apex Capital</h1>
        </div>
        <p className="text-slate-300 text-lg">
          Orion Apex Capital was founded on a simple idea: disciplined strategy
          beats noise.           We operate across crypto markets and digital assets with an emphasis on risk management,
          execution speed, and long-term alignment.
        </p>

        <div className="grid gap-6 md:grid-cols-3 mt-12">
          <div className="card">
            <h3 className="font-semibold text-xl">Mission</h3>
            <p className="text-slate-300 mt-2">
              Build wealth with integrity and precision, compounding returns
              into lasting legacy.
            </p>
          </div>

          <div className="card">
            <h3 className="font-semibold text-xl">Values</h3>
            <ul className="text-slate-300 mt-2 list-disc pl-5 space-y-1">
              <li>Trust & transparency</li>
              <li>Risk-managed growth</li>
              <li>Operator discipline</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="font-semibold text-xl">Edge</h3>
            <p className="text-slate-300 mt-2">
              A blended approach: quantified trading systems + on-the-ground
              execution in cashflow businesses.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
