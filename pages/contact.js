import Layout from "@/components/Layout";
import Logo from "@/components/Logo";
import { ContactForm } from "@/components/Forms";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function Contact() {
  return (
    <Layout
      title="Contact"
      description="Tell us about your objectives and constraints. We'll reply within 1–2 business days to discuss your strategic needs and partnership opportunities."
      url="/contact"
    >
      <Section containerClassName="space-y-10">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Contact" }
          ]}
        />
        <Container className="max-w-5xl space-y-12">
          <section className="panel panel--accent panel--static grid gap-10 p-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-7">
              <div className="flex items-center gap-4">
                <Logo variant="crestWhite" size={32} />
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-brand-copper">Partnerships</p>
                  <h1 className="font-display text-4xl leading-tight text-text-primary sm:text-5xl">
                    Contact Orion Apex
                  </h1>
                </div>
              </div>
              <p className="text-base text-text-muted sm:text-lg">
                Tell us about your objectives, constraints, and timeline. We reply within one to two business days to schedule discovery or share next steps.
              </p>
              <div className="panel panel--accent panel--inline panel--static space-y-4 p-6 text-sm text-text-onCopper">
                <p className="text-xs uppercase tracking-[0.32em]">What to include</p>
                <ul className="space-y-3">
                  {[
                    "Scope of work or trading mandate",
                    "Capital allocation or operating budget",
                    "Compliance, governance, or timeline constraints"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-text-onCopper/90">
                      <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Response time", value: "1-2 days" },
                  { label: "Engagement cap", value: "2 concurrent" },
                  { label: "Preferred start", value: "2+ weeks" }
                ].map((item) => (
                  <div key={item.label} className="panel panel--inline panel--static p-4 text-left">
                    <p className="text-xs uppercase tracking-[0.3em] text-text-muted">{item.label}</p>
                    <p className="mt-2 text-xl font-semibold text-text-primary">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="panel panel--subtle panel--static p-6">
              <ContactForm />
            </div>
          </section>
        </Container>
      </Section>
    </Layout>
  );
}
