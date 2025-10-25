import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { CTAButton } from '@/components/CTAButton';
import { CTASection } from '@/components/CTASection';
import { ServiceCard } from '@/components/ServiceCard';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { oiaServices, oiaCaseStudies, oiaFaq } from '@/lib/data';
import { buildBreadcrumb, oiaServiceSchema } from '@/lib/schema';
import styles from './intelligence.module.css';

export const metadata: Metadata = {
  title: 'Orion Intelligence Agency | Market diligence and AI insight',
  description: 'Orion Intelligence Agency delivers market diligence, sector briefings, and AI-supported insight reports for institutional operators.',
};

export default function IntelligencePage() {
  const breadcrumb = buildBreadcrumb([
    { name: 'Home', url: 'https://www.orionapexcapital.com/' },
    { name: 'Companies', url: 'https://www.orionapexcapital.com/companies' },
    { name: 'Orion Intelligence Agency', url: 'https://www.orionapexcapital.com/intelligence' },
  ]);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: oiaFaq.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className={styles.page} data-theme="oia">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(oiaServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Hero
        eyebrow="Orion Intelligence Agency"
        title="Evidence to cut through market noise"
        description="We combine primary research, proprietary data access, and supervised AI synthesis to give decision makers a verified picture of markets, competitors, and risk."
        actions={<CTAButton href="/intelligence/services/market-diligence">See services</CTAButton>}
        theme="oia"
      />
      <section className={styles.section}>
        <div className="container">
          <h2 className="section-heading">Services</h2>
          <div className={styles.services}>
            {oiaServices.map((service) => (
              <ServiceCard key={service.slug} title={service.name} description={service.summary} outcomes={service.outcomes} />
            ))}
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className="container">
          <h2 className="section-heading">Case briefs</h2>
          <div className={styles.caseGrid}>
            {oiaCaseStudies.map((study) => (
              <CaseStudyCard
                key={study.slug}
                title={study.title}
                challenge={study.challenge}
                solution={study.solution}
                impact={study.impact}
              />
            ))}
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className="container">
          <h2 className="section-heading">FAQ</h2>
          <dl className={styles.faq}>
            {oiaFaq.map((faq) => (
              <div key={faq.question}>
                <dt>{faq.question}</dt>
                <dd>{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <CTASection
        title="Ready for a briefing?"
        description="Share your mandate and compliance requirements. We respond within one business day."
        primary={{ label: 'Request a briefing', href: '/thanks/briefing' }}
        secondary={{ label: 'Download the deck', href: '/press' }}
        theme="oia"
      />
    </div>
  );
}
