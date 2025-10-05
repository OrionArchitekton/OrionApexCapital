import Layout from "@/components/Layout";
import Logo from "@/components/Logo";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { getCanonical } from "@/lib/seo/canonical";
import { generateFreelanceServiceJsonLd, renderJsonLdScript } from "@/lib/seo/jsonldService";
import Head from "next/head";
import Link from "next/link";

export default function ClientServices() {
  const freelanceJsonLd = generateFreelanceServiceJsonLd();

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={renderJsonLdScript(freelanceJsonLd)}
        />
      </Head>
      <Layout
        title="Client Services"
        description="Strategic consulting and implementation services for operators, investors, and founders. We deliver measurable outcomes through disciplined execution across finance, operations, and digital assets."
        url="/services/client-services"
        canonical={getCanonical("/freelance")}
      >
        <Section containerClassName="space-y-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Client Services" }
            ]}
          />
          <Container className="space-y-8">
            <div className="flex items-center gap-4">
              <Logo variant="crestWhite" size={32} />
              <h1 className="font-display text-4xl text-text-primary sm:text-5xl">
                Client Services
              </h1>
            </div>
            <p className="max-w-3xl text-base text-text-muted sm:text-lg">
              Strategic consulting and implementation services for operators, investors, and founders. We deliver measurable outcomes through disciplined execution across finance, operations, and digital assets.
            </p>
            <div className="rounded-3xl border border-brand-copper/30 bg-brand-copper/10 p-6 text-sm text-text-onCopper">
              <h2 className="text-base font-semibold uppercase tracking-[0.3em]">Note</h2>
              <p className="mt-3">
                This page has been consolidated into our main Client Services hub.
                <Link
                  href="/freelance"
                  className="ml-1 inline-flex items-center gap-2 font-semibold underline"
                  aria-label="Visit our updated Client Services page"
                >
                  Visit our updated Client Services page
                  <span aria-hidden="true">→</span>
                </Link>
              </p>
            </div>
          </Container>
        </Section>
      </Layout>
    </>
  );
}