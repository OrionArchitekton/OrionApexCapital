import Layout from "@/components/Layout";
import Logo from "@/components/Logo";
import { getCanonical } from "@/lib/seo/canonical";
import { generateFreelanceServiceJsonLd, renderJsonLdScript } from "@/lib/seo/jsonldService";
import Head from "next/head";

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
        <section className="container py-16">
          <div className="flex items-center gap-3 mb-6">
            <Logo variant="crestWhite" size={28} />
            <h1 className="text-3xl md:text-4xl font-bold">Client Services</h1>
          </div>

          <div className="mb-8">
            <p className="text-xl text-neutral-300 mb-6 max-w-3xl">
              Strategic consulting and implementation services for operators, investors, and founders. 
              We deliver <span className="text-gold-500 font-semibold">measurable outcomes</span> through 
              disciplined execution across finance, operations, and digital assets.
            </p>
            
            <div className="bg-gold-500/10 border border-gold-500/30 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-gold-500 mb-2">Note</h2>
              <p className="text-neutral-300">
                This page has been moved to our main Client Services section. 
                <a href="/freelance" className="text-gold-400 hover:text-gold-300 underline ml-1">
                  Visit our updated Client Services page →
                </a>
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}