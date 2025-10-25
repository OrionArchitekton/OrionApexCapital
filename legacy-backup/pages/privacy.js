import Layout from "@/components/Layout";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function Privacy() {
  return (
    <Layout 
      title="Privacy Policy"
      description="Orion Apex Capital LLC privacy policy. Learn about how we collect, use, and protect your information."
      url="/privacy"
    >
      <Section className="pb-12" containerClassName="space-y-10">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Privacy Policy" }
          ]}
        />
        <div className="panel panel--subtle panel--static space-y-8 p-10">
          <div className="space-y-4">
            <h1 className="font-display text-4xl leading-tight text-text-primary sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="text-sm text-text-muted">
              <strong>Last updated:</strong> October 16, 2025
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-text-primary [&_h2]:mt-8 [&_h2]:mb-4 [&_p]:text-text-muted [&_p]:leading-relaxed [&_ul]:space-y-2 [&_ul]:text-text-muted [&_li]:pl-2 [&_strong]:text-text-primary [&_blockquote]:border-l-2 [&_blockquote]:border-brand-gold [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-text-muted">
            
            <div>
              <h2>Who we are</h2>
              <p>
                <strong>Orion Apex Capital LLC</strong> ("<strong>OAC</strong>," "we," "us") operates <strong>orionapexcapital.com</strong>. This Policy explains what we collect, how we use it, and your choices.
              </p>
            </div>

            <div>
              <h2>Information we collect</h2>
              <ul className="list-disc pl-6">
                <li><strong>Contact information</strong> you submit (name, email, company, phone) via forms or email.</li>
                <li><strong>Communications & files</strong> you send (e.g., partnership/media inquiries).</li>
                <li><strong>Usage data</strong> (pages viewed, timestamps, referrer, approximate location, browser/device).</li>
                <li><strong>Cookies</strong> for basic site operation, preferences, and aggregate analytics.</li>
              </ul>
              <blockquote className="mt-4">
                We do <strong>not</strong> knowingly collect personal information from children under 13. If we learn we have, we'll delete it.
              </blockquote>
            </div>

            <div>
              <h2>How we use information</h2>
              <ul className="list-disc pl-6">
                <li>Operate the site, respond to inquiries, maintain security/fraud prevention.</li>
                <li>Create <strong>aggregated or de-identified</strong> analytics to improve reliability.</li>
                <li>Comply with legal, regulatory, and audit obligations.</li>
              </ul>
              <p className="mt-4">
                <strong>Legal bases (EEA/UK visitors).</strong> Performance of a contract (responding to a request), <strong>consent</strong> (marketing emails you opt into), and <strong>legitimate interests</strong> (security, service improvement) balanced against your rights.
              </p>
            </div>

            <div>
              <h2>Selling/sharing personal information</h2>
              <p>
                We <strong>do not sell or share</strong> personal information as those terms are defined under California law. If this changes, we will update this Policy and provide a "Do Not Sell or Share" mechanism. We honor <strong>Global Privacy Control (GPC)</strong> signals where applicable.
              </p>
            </div>

            <div>
              <h2>Security</h2>
              <p>
                We use reasonable safeguards (encryption in transit, access controls, least‑privilege, logging). No method is 100% secure.
              </p>
            </div>

            <div>
              <h2>Data retention</h2>
              <p>
                We keep personal data only as long as necessary for the purposes above or as required by law, then delete or de‑identify it.
              </p>
            </div>

            <div>
              <h2>Third parties & links</h2>
              <p>
                Our site may link to third‑party sites or tools (e.g., calendar, email, analytics). Their practices are governed by their own policies.
              </p>
            </div>

            <div>
              <h2>International transfers</h2>
              <p>
                We are based in the United States. Your data may be processed in the U.S. or other countries with different laws than your own.
              </p>
            </div>

            <div>
              <h2>Your rights</h2>
              <p>
                Depending on your location, you may have rights to <strong>access</strong>, <strong>correct</strong>, <strong>delete</strong>, or <strong>opt‑out</strong> of certain processing and to not be discriminated against for exercising those rights. Submit requests to <strong>privacy@orionapexcapital.com</strong>.
              </p>
            </div>

            <div>
              <h2>Not investment advice</h2>
              <p>
                Content on this site is for informational purposes only and <strong>is not investment, legal, or tax advice</strong>. We do <strong>not</strong> manage client funds, execute trades for customers, or provide individualized investment recommendations.
              </p>
            </div>

            <div>
              <h2>Changes</h2>
              <p>
                We may update this Policy; material changes will be noted by updating the "Last updated" date.
              </p>
            </div>

            <div>
              <h2>Contact</h2>
              <p>
                <strong>Email:</strong> privacy@orionapexcapital.com<br />
                <strong>Mail:</strong> Orion Apex Capital LLC, Ohio, USA
              </p>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}

