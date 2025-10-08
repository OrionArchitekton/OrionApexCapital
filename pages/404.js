import Layout from "@/components/Layout";
import Link from "next/link";

export default function NotFound() {
  return (
    <Layout title="404">
      <section className="container py-24">
  <div className="panel panel--accent panel--static mx-auto max-w-3xl space-y-6 p-12 text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-brand-copper">Navigation error</p>
          <h1 className="text-4xl font-display text-text-primary">404 — Not Found</h1>
          <p className="text-base text-text-muted">
            The page you’re looking for doesn’t exist or has been moved. Return to the command bridge to continue navigating the Orion Apex experience.
          </p>
          <Link className="btn btn-primary mt-4 inline-flex px-8 py-4" href="/">
            Back to Home
          </Link>
        </div>
      </section>
    </Layout>
  );
}

