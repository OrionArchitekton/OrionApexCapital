import type { Metadata } from 'next';
import Link from 'next/link';
import { subsidiaries } from '@/lib/data';
import { Hero } from '@/components/Hero';
import styles from './companies.module.css';
import { buildBreadcrumb } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Portfolio companies | Orion Apex Capital',
  description: 'Explore Orion Apex Capital subsidiaries: Orion Intelligence Agency, Orion Ascend Media, and Apex Trading System.',
};

export default function CompaniesPage() {
  const breadcrumb = buildBreadcrumb([
    { name: 'Home', url: 'https://www.orionapexcapital.com/' },
    { name: 'Companies', url: 'https://www.orionapexcapital.com/companies' },
  ]);

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Hero
        eyebrow="HoldCo portfolio"
        title="Three specialist firms. One shared governance framework."
        description="Orion Apex Capital owns and operates subsidiaries that complement one another: intelligence to sense, media to influence, and systems to execute."
      />
      <section>
        <div className="container">
          <div className={styles.cards}>
            {subsidiaries.map((company) => (
              <article key={company.slug} className={styles.card} data-theme={company.accent}>
                <div>
                  <span className={styles.short}>{company.short}</span>
                  <h2>{company.name}</h2>
                  <p>{company.description}</p>
                </div>
                <div className={styles.actions}>
                  <Link href={`${company.url}`} className={styles.primary}>
                    View overview
                  </Link>
                  <Link href={`${company.url}/services/${company.primaryServiceSlug}`} className={styles.secondary}>
                    Explore services
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
