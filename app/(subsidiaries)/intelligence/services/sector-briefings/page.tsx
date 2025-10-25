import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { ServiceCard } from '@/components/ServiceCard';
import { CTASection } from '@/components/CTASection';
import { oiaServices } from '@/lib/data';
import { buildBreadcrumb } from '@/lib/schema';

const service = oiaServices.find((item) => item.slug === 'sector-briefings');

export const metadata: Metadata = {
  title: 'Sector briefings | Orion Intelligence Agency',
  description: service?.summary ?? 'Executive briefings tailored to your mandate.',
};

export default function SectorBriefingsPage() {
  const breadcrumb = buildBreadcrumb([
    { name: 'Home', url: 'https://www.orionapexcapital.com/' },
    { name: 'Orion Intelligence Agency', url: 'https://www.orionapexcapital.com/intelligence' },
    { name: 'Sector briefings', url: 'https://www.orionapexcapital.com/intelligence/services/sector-briefings' },
  ]);

  if (!service) {
    return null;
  }

  return (
    <div data-theme="oia">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Hero
        eyebrow="Sector briefings"
        title="Decision-ready narratives each week"
        description={service.summary}
        theme="oia"
        actions={<a href="/thanks/briefing">Request a briefing</a>}
      />
      <div className="container">
        <ServiceCard title={service.name} description={service.summary} outcomes={service.outcomes} />
        <section>
          <h2 className="section-heading">What you receive</h2>
          <ul>
            <li>Weekly analyst summary with AI cross-checks</li>
            <li>Scenario planning across regulatory, competitive, and technology vectors</li>
            <li>Recommended executive actions with responsible disclosures</li>
          </ul>
        </section>
      </div>
      <CTASection
        title="Put intelligence on your calendar"
        description="Book a briefing cadence that aligns with board or investment committee rhythms."
        primary={{ label: 'Request a briefing', href: '/thanks/briefing' }}
        theme="oia"
      />
    </div>
  );
}
