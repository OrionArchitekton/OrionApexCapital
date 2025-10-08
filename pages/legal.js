import Layout from "@/components/Layout";
import Logo from "@/components/Logo";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";

const LEGAL_BLOCKS = [
  {
    title: "Disclosures",
    copy:
      "The information on this site is for educational and informational purposes only. It is not financial, legal, or tax advice. No offer or solicitation to buy or sell securities is being made."
  },
  {
    title: "Privacy",
    copy:
      "We collect limited data through contact and newsletter forms. We do not sell personal data. For deletion requests, email privacy@orionapexcapital.com.",
    link: {
      href: "mailto:privacy@orionapexcapital.com",
      label: "privacy@orionapexcapital.com"
    }
  },
  {
    title: "Terms of Use",
    copy:
      "Use this website responsibly. Do not attempt to exploit, copy, or reverse engineer site code or assets without permission."
  }
];

export default function Legal() {
  return (
    <Layout title="Legal">
      <Section
        className="pb-10"
        containerClassName="max-w-5xl space-y-12"
        eyebrow="Compliance"
        title="Legal"
        description="Our commitments to transparency, data stewardship, and responsible use of Orion Apex assets."
      >
        <Container className="space-y-8">
          <div className="rounded-[2.5rem] border border-white/12 bg-surface-1/70 p-8 shadow-[0_36px_90px_-60px_rgba(0,0,0,0.75)]">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <Logo variant="crestWhite" size={36} />
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-brand-gold/80">Orion Apex Capital</p>
                  <p className="text-lg font-semibold text-text-primary">Governance & Policies</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Jurisdictions", value: "US + global" },
                  { label: "Data retention", value: "12 months" },
                  { label: "Consent refresh", value: "Quarterly" }
                ].map(({ label, value }) => (
                  <div key={label} className="rounded-3xl border border-white/10 bg-surface-0/70 p-4 text-left">
                    <p className="text-xs uppercase tracking-[0.28em] text-text-muted">{label}</p>
                    <p className="mt-2 text-base font-semibold text-text-primary">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-6 text-sm text-text-muted md:max-w-3xl">
              We operate under the same rigor we demand from our clients: clear communication, custody hygiene, and defensible record keeping.
            </p>
          </div>

          <div className="grid gap-6">
            {LEGAL_BLOCKS.map(({ title, copy, link }) => (
              <article key={title} className="card space-y-4 rounded-3xl border border-white/12 bg-surface-0/80 p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-brand-gold/80">{title}</p>
                <p className="text-sm leading-relaxed text-text-muted">
                  {copy.split(link?.label ?? "__NONE__").map((segment, index, arr) => (
                    <span key={`${title}-segment-${index}`}>
                      {segment}
                      {index < arr.length - 1 && link && (
                        <a
                          href={link.href}
                          className="text-brand-gold underline-offset-4 transition hover:text-brand-gold/80"
                        >
                          {link.label}
                        </a>
                      )}
                    </span>
                  ))}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
