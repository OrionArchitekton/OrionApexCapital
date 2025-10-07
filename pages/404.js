import Layout from "@/components/Layout";
import Link from "next/link";

export default function NotFound() {
  return (
    <Layout title="404">
      <section className="container py-24 text-center">
        <h1 className="text-4xl font-bold">404 — Not Found</h1>
        <p className="text-slate-300 mt-3">
          The page you are looking for doesn’t exist.
        </p>
        <Link className="btn btn-primary mt-6 inline-block" href="/">
          Back to Home
        </Link>
      </section>
    </Layout>
  );
}

