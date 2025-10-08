import Layout from "@/components/Layout";
import { Container } from "@/components/Container";
import Link from "next/link";

export default function NotFound() {
  return (
    <Layout title="404">
      <section className="py-24 sm:py-32">
        <Container className="flex justify-center">
          <div className="panel panel--accent panel--static w-full max-w-3xl space-y-6 p-10 text-center sm:p-12">
            <p className="panel-eyebrow">Navigation error</p>
            <h1 className="panel-title text-4xl sm:text-[2.75rem]">404 — Not Found</h1>
            <p className="text-base text-text-muted sm:text-lg">
              The page you’re looking for doesn’t exist or has been moved. Return to the command bridge to continue navigating the Orion Apex experience.
            </p>
            <Link className="btn btn-primary mt-6 inline-flex px-8 py-4" href="/">
              Back to Home
            </Link>
          </div>
        </Container>
      </section>
    </Layout>
  );
}

