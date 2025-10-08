import Layout from "@/components/Layout";
import Link from "next/link";

export default function ServerError() {
  return (
    <Layout title="500">
      <section className="container py-24 text-center">
        <h1 className="text-4xl font-display text-text-primary">500 — Server Error</h1>
        <p className="mt-3 text-base text-text-muted">
          Something went wrong on our side. Please try again shortly.
        </p>
        <Link className="btn btn-primary mt-6 inline-block" href="/">
          Back to Home
        </Link>
      </section>
    </Layout>
  );
}


