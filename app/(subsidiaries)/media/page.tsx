import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { CTAButton } from '@/components/CTAButton';
import { CTASection } from '@/components/CTASection';
import { ServiceCard } from '@/components/ServiceCard';
import { oamServices, oamPortfolio } from '@/lib/data';
import { buildBreadcrumb, oamServiceSchema } from '@/lib/schema';
import styles from './media.module.css';

export const metadata: Metadata = {
  title: 'Orion Ascend Media | Brand, content, and growth media',
  description: 'Orion Ascend Media builds brand systems, content programs, and paid growth media for complex B2B organizations.',
};

export default function MediaPage() {
  const breadcrumb = buildBreadcrumb([
    { name: 'Home', url: 'https://www.orionapexcapital.com/' },
    { name: 'Companies', url: 'https://www.orionapexcapital.com/companies' },
    { name: 'Orion Ascend Media', url: 'https://www.orionapexcapital.com/media' },
  ]);

  return (
    <div className={styles.page} data-theme="oam">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(oamServiceSchema) }} />
      <Hero
        eyebrow="Orion Ascend Media"
        title="Compound attention and trust"
        description="We translate complex value propositions into brand systems, editorial programs, and compliant demand generation."
        actions={<CTAButton href="/media/services/brand">See services</CTAButton>}
        theme="oam"
      />
      <section className={styles.section}>
        <div className="container">
          <h2 className="section-heading">Services</h2>
          <div className={styles.services}>
            {oamServices.map((service) => (
              <ServiceCard key={service.slug} title={service.name} description={service.summary} outcomes={service.outcomes} />
            ))}
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className="container">
          <h2 className="section-heading">Selected work</h2>
          <div className={styles.portfolio}>
            {oamPortfolio.map((item) => (
              <article key={item.slug} data-elevated>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <p className={styles.result}>{item.results}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Launch your next campaign"
        description="Tell us about your product, audience, and compliance guardrails so we can design the right activation mix."
        primary={{ label: 'Start a campaign', href: '/thanks/campaign' }}
        secondary={{ label: 'See portfolio', href: '/media/portfolio/infrastructure-brand-reset' }}
        theme="oam"
      />
    </div>
  );
}
