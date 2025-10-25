import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { insightArticles } from '@/lib/data';
import styles from './insights.module.css';
import { buildBreadcrumb } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Insights | Orion Apex Capital',
  description: 'Read Orion Apex Capital intelligence, media, and trading insights for institutional operators.',
};

export default function InsightsPage() {
  const breadcrumb = buildBreadcrumb([
    { name: 'Home', url: 'https://www.orionapexcapital.com/' },
    { name: 'Insights', url: 'https://www.orionapexcapital.com/insights' },
  ]);

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Hero
        eyebrow="Insights"
        title="Signals from the front lines of modern markets"
        description="We publish periodic briefings drawn from diligence engagements, campaign performance, and systematic trading research."
      />
      <section>
        <div className="container">
          <div className={styles.list}>
            {insightArticles.map((article) => (
              <article key={article.link} className={styles.card} data-surface>
                <time dateTime={article.published} className={styles.date}>
                  {new Date(article.published).toLocaleDateString(undefined, {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
                <a href={article.link} className={styles.readMore}>
                  Get the one-pager
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
