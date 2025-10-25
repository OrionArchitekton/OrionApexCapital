import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import styles from './security.module.css';
import { buildBreadcrumb } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Security | Orion Apex Capital',
  description: 'Understand Orion Apex Capital security practices including CSP, data handling, and incident response.',
};

export default function SecurityPage() {
  const breadcrumb = buildBreadcrumb([
    { name: 'Home', url: 'https://www.orionapexcapital.com/' },
    { name: 'Security', url: 'https://www.orionapexcapital.com/security' },
  ]);

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Hero
        eyebrow="Security"
        title="Control frameworks that match institutional expectations"
        description="We operate under a defense-in-depth approach covering network security, data governance, and incident response for every subsidiary."
      />
      <section>
        <div className="container">
          <div className={styles.grid}>
            <article data-surface>
              <h2>Content Security Policy</h2>
              <p>
                We enforce a strict Content Security Policy with allow-lists for script, frame, and image sources. Third-party integrations undergo security review and are restricted to HTTPS endpoints.
              </p>
            </article>
            <article data-surface>
              <h2>Data handling</h2>
              <p>
                Client data is encrypted at rest using AES-256 and in transit using TLS 1.3. Access is role-based with quarterly audits. Sensitive research inputs are segregated from media and trading environments.
              </p>
            </article>
            <article data-surface>
              <h2>Incident response</h2>
              <p>
                Our response plan aligns with NIST 800-61. We provide breach notification within 24 hours and maintain runbooks covering containment, eradication, and recovery across intelligence, media, and trading systems.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
