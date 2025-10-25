import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { CTAButton } from '@/components/CTAButton';
import { CTASection } from '@/components/CTASection';
import { subsidiaries, governanceValues } from '@/lib/data';
import { organizationSchema, websiteSchema } from '@/lib/schema';
import styles from './home.module.css';

export const metadata: Metadata = {
  title: 'Orion Apex Capital | Intelligence, Media, and Systems for modern markets.',
  description:
    'Orion Apex Capital is the holding company behind Orion Intelligence Agency, Orion Ascend Media, and Apex Trading System. We equip operators with verified intelligence, brand leadership, and algorithmic infrastructure.',
};

export default function HomePage() {
  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Hero
        eyebrow="Holding Company"
        title="Intelligence, media, and trading systems for decisive operators"
        description="Orion Apex Capital partners with leaders navigating complex markets. Our portfolio supplies rigorously sourced intelligence, trust-building media, and compliant algorithmic execution."
        actions={
          <>
            <CTAButton href="/companies">Explore the companies</CTAButton>
            <CTAButton href="/contact" variant="secondary">
              Talk to our team
            </CTAButton>
          </>
        }
      />
      <section className={styles.section}>
        <div className="container">
          <h2 className="section-heading">Portfolio companies</h2>
          <p className="text-subtle">
            Each subsidiary focuses on a critical operator workflow: sensing markets, shaping reputation, and executing strategies.
          </p>
          <div className={styles.cards}>
            {subsidiaries.map((company) => (
              <Link key={company.slug} href={company.url} className={styles.companyCard} data-theme={company.accent}>
                <div>
                  <span className={styles.companyShort}>{company.short}</span>
                  <h3>{company.name}</h3>
                  <p>{company.description}</p>
                </div>
                <span aria-hidden>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className="container">
          <h2 className="section-heading">What we solve</h2>
          <div className={styles.grid}>
            {governanceValues.map((item) => (
              <article key={item.title} data-surface>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Ready to brief your mandate?"
        description="Connect with our holding company team to scope diligence, media, or systematic trading initiatives."
        primary={{ label: 'Talk to our team', href: '/contact' }}
        secondary={{ label: 'Download the deck', href: '/press' }}
      />
    </div>
  );
}
