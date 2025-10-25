import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { careersOpenings } from '@/lib/data';
import styles from './careers.module.css';
import { buildBreadcrumb } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Careers | Orion Apex Capital',
  description: 'Build your career at Orion Apex Capital and its subsidiaries across intelligence, media, and trading.',
};

export default function CareersPage() {
  const breadcrumb = buildBreadcrumb([
    { name: 'Home', url: 'https://www.orionapexcapital.com/' },
    { name: 'Careers', url: 'https://www.orionapexcapital.com/careers' },
  ]);

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Hero
        eyebrow="Careers"
        title="Join the operators building future market infrastructure"
        description="We hire analysts, creatives, and engineers who thrive in regulated, high-stakes environments."
        actions={<a href="mailto:talent@orionapexcapital.com" className={styles.apply}>Send your credentials</a>}
      />
      <section>
        <div className="container">
          <div className={styles.list}>
            {careersOpenings.map((role) => (
              <article key={role.title} className={styles.card} data-surface>
                <h3>{role.title}</h3>
                <p className={styles.meta}>
                  {role.location} • {role.type}
                </p>
                <p>{role.summary}</p>
                <a className={styles.readMore} href={`mailto:talent@orionapexcapital.com?subject=${encodeURIComponent(role.title)}`}>
                  Submit interest
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
