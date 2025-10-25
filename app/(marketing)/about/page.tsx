import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { governanceValues } from '@/lib/data';
import styles from './about.module.css';
import { buildBreadcrumb } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About Orion Apex Capital',
  description: 'Learn how Orion Apex Capital governs intelligence, media, and trading subsidiaries with disciplined oversight and ethics.',
};

export default function AboutPage() {
  const breadcrumb = buildBreadcrumb([
    { name: 'Home', url: 'https://www.orionapexcapital.com/' },
    { name: 'About', url: 'https://www.orionapexcapital.com/about' },
  ]);

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Hero
        eyebrow="About Orion Apex Capital"
        title="Operating playbooks built for accountability"
        description="We were founded to close the gap between complex market moves and the operators charged with responding. Our governance spans mission alignment, ethical sourcing, and regulated execution."
      />
      <section>
        <div className="container">
          <div className={styles.grid}>
            {governanceValues.map((value) => (
              <article key={value.title} data-surface>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="section-heading">Governance cadence</h2>
          <ul className={styles.list}>
            <li>
              <strong>Quarterly risk committee.</strong> Cross-subsidiary committee reviews audit findings, vendor exposure, and incident reports.
            </li>
            <li>
              <strong>Annual ethics attestation.</strong> Every employee signs and trains on our responsible intelligence, media, and trading standards.
            </li>
            <li>
              <strong>Limited partner transparency.</strong> We distribute holdco dashboards covering pipeline, compliance, and capital allocation. No surprises.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
