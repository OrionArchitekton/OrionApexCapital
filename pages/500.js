import Layout from "@/components/Layout";
import Link from "next/link";

export default function ServerError() {
  return (
    <Layout title="500">
      <section className="container py-24">
        <div className="mx-auto max-w-3xl space-y-6 rounded-[2.5rem] border border-white/10 bg-surface-1/70 p-12 text-center shadow-[0_34px_90px_-60px_rgba(0,0,0,0.75)]">
          <p className="text-xs uppercase tracking-[0.32em] text-brand-copper">System notice</p>
          <h1 className="text-4xl font-display text-text-primary">500 — Server Error</h1>
          <p className="text-base text-text-muted">
            Something went wrong on our side. The operators have been alerted and we’re on it. Please refresh or return to the command bridge.
          </p>
          <Link className="btn btn-primary mt-4 inline-flex px-8 py-4" href="/">
            Back to Home
          </Link>
        </div>
      </section>
    </Layout>
  );
}


