import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { ServiceCard } from '@/components/ServiceCard';
import { CTASection } from '@/components/CTASection';
import { oiaServices } from '@/lib/data';
import { buildBreadcrumb } from '@/lib/schema';

const service = oiaServices.find((item) => item.slug === 'market-diligence');

export const metadata: Metadata = {
  title: 'Market diligence | Orion Intelligence Agency',
  description: service?.summary ?? 'Evidence-led diligence for acquisitions, partnerships, and market entry.',
};

export default function MarketDiligencePage() {
  const breadcrumb = buildBreadcrumb([
    { name: 'Home', url: 'https://www.orionapexcapital.com/' },
    { name: 'Orion Intelligence Agency', url: 'https://www.orionapexcapital.com/intelligence' },
    { name: 'Market diligence', url: 'https://www.orionapexcapital.com/intelligence/services/market-diligence' },
  ]);

  if (!service) {
    return null;
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does the market diligence process include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Primary interviews, quantitative demand modeling, risk scoring, and executive-ready reporting.',
        },
      },
      {
        '@type': 'Question',
        name: 'How quickly can OIA deliver diligence?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We deploy pods within 48 hours and deliver initial findings in 10 business days, subject to jurisdictional constraints.',
        },
      },
    ],
  };

  return (
    <div data-theme="oia">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Hero
        eyebrow="Market diligence"
        title="Verified perspectives before capital is committed"
        description={service.summary}
        theme="oia"
        actions={<a href="/thanks/briefing">Request a briefing</a>}
      />
      <div className="container">
        <ServiceCard title={service.name} description={service.summary} outcomes={service.outcomes} />
        <section>
          <h2 className="section-heading">Deliverables</h2>
          <ul>
            <li>Source-backed market size and growth modeling</li>
            <li>Counterparty interviews with traceable notes</li>
            <li>Risk register with mitigation scenarios</li>
          </ul>
        </section>
      </div>
      <CTASection
        title="Schedule a diligence scope call"
        description="Share target details and confidentiality requirements to receive a tailored statement of work."
        primary={{ label: 'Request a briefing', href: '/thanks/briefing' }}
        theme="oia"
      />
    </div>
  );
}
