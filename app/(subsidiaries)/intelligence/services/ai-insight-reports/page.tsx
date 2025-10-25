import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { ServiceCard } from '@/components/ServiceCard';
import { CTASection } from '@/components/CTASection';
import { oiaServices } from '@/lib/data';
import { buildBreadcrumb } from '@/lib/schema';

const service = oiaServices.find((item) => item.slug === 'ai-insight-reports');

export const metadata: Metadata = {
  title: 'AI insight reports | Orion Intelligence Agency',
  description: service?.summary ?? 'Scenario analysis and forecasting accelerated by proprietary AI models.',
};

export default function AIInsightReportsPage() {
  const breadcrumb = buildBreadcrumb([
    { name: 'Home', url: 'https://www.orionapexcapital.com/' },
    { name: 'Orion Intelligence Agency', url: 'https://www.orionapexcapital.com/intelligence' },
    { name: 'AI insight reports', url: 'https://www.orionapexcapital.com/intelligence/services/ai-insight-reports' },
  ]);

  if (!service) {
    return null;
  }

  return (
    <div data-theme="oia">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Hero
        eyebrow="AI insight reports"
        title="Model future risk with transparent AI"
        description={service.summary}
        theme="oia"
        actions={<a href="/thanks/briefing">Request a briefing</a>}
      />
      <div className="container">
        <ServiceCard title={service.name} description={service.summary} outcomes={service.outcomes} />
        <section>
          <h2 className="section-heading">How we work</h2>
          <ul>
            <li>Structured data ingestion with human verification</li>
            <li>Explainable AI outputs with audit trails</li>
            <li>Counterfactual scenario testing with compliance-ready documentation</li>
          </ul>
        </section>
      </div>
      <CTASection
        title="Commission an insight report"
        description="Request a project outline including data sources, delivery milestones, and licensing."
        primary={{ label: 'Request a briefing', href: '/thanks/briefing' }}
        theme="oia"
      />
    </div>
  );
}
