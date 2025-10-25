import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { teamMembers } from '@/lib/data';
import styles from './team.module.css';
import { buildBreadcrumb } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Leadership team | Orion Apex Capital',
  description: 'Meet the Orion Apex Capital leadership team guiding Orion Intelligence Agency, Orion Ascend Media, and Apex Trading System.',
};

export default function TeamPage() {
  const breadcrumb = buildBreadcrumb([
    { name: 'Home', url: 'https://www.orionapexcapital.com/' },
    { name: 'Team', url: 'https://www.orionapexcapital.com/team' },
  ]);

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Hero
        eyebrow="Leadership"
        title="Operators with intelligence, media, and trading pedigrees"
        description="Our leadership has built intelligence networks, scaled GTM functions, and engineered market infrastructure inside regulated environments."
      />
      <section>
        <div className="container">
          <div className={styles.grid}>
            {teamMembers.map((member) => (
              <article key={member.name} className={styles.card} data-surface>
                <h3>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p>{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
