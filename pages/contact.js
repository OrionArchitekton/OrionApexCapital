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
        <Container className="max-w-3xl space-y-8">
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
            Tell us about your objectives, constraints, and timeline. We reply within one to two business days to schedule discovery or send next steps.
          </p>
          <div className="rounded-3xl border border-white/10 bg-surface-1/70 p-6 text-sm text-text-muted">
            <p className="font-semibold uppercase tracking-[0.3em] text-brand-copper">What to include</p>
            <ul className="mt-4 space-y-2">
              {[
                "Scope of work or trading mandate",
                "Capital allocation or operating budget",
                "Any compliance or governance requirements"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-copper" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <ContactForm />
        </Container>
      </Section>
    </Layout>
  );
}
