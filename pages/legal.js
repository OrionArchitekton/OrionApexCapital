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
        containerClassName="max-w-4xl space-y-10"
        eyebrow="Compliance"
        title="Legal"
        description="Our commitments to transparency, data stewardship, and responsible use of Orion Apex assets."
      >
        <Container className="space-y-8">
          <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-surface-1/70 p-6 shadow-glow md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <Logo variant="crestWhite" size={36} />
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-brand-gold/80">Orion Apex Capital</p>
                <p className="text-lg font-semibold text-text-primary">Governance & Policies</p>
              </div>
            </div>
            <p className="text-sm text-text-muted md:max-w-sm">
              We operate under the same rigor we demand from our clients: clear communication, custody hygiene, and defensible record keeping.
            </p>
          </div>

          <div className="grid gap-6">
            {LEGAL_BLOCKS.map(({ title, copy, link }) => (
              <article key={title} className="glass space-y-3 p-6">
                <h2 className="text-xl font-semibold text-text-primary">{title}</h2>
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
