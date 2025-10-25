import type { Metadata } from 'next';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { CTASection } from '@/components/CTASection';
import { oiaCaseStudies } from '@/lib/data';
import { buildBreadcrumb } from '@/lib/schema';

const study = oiaCaseStudies.find((item) => item.slug === 'strategic-market-entry');

export const metadata: Metadata = {
  title: 'Case study: Strategic market entry | Orion Intelligence Agency',
  description: study?.challenge ?? 'Defense supplier diligence case study.',
};

export default function StrategicMarketEntryCaseStudy() {
  const breadcrumb = buildBreadcrumb([
    { name: 'Home', url: 'https://www.orionapexcapital.com/' },
    { name: 'Orion Intelligence Agency', url: 'https://www.orionapexcapital.com/intelligence' },
    { name: 'Case studies', url: 'https://www.orionapexcapital.com/intelligence' },
    { name: 'Strategic market entry', url: 'https://www.orionapexcapital.com/intelligence/case-studies/strategic-market-entry' },
  ]);

  if (!study) {
    return null;
  }

  return (
    <div data-theme="oia">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="container">
        <CaseStudyCard title={study.title} challenge={study.challenge} solution={study.solution} impact={study.impact} />
      </div>
      <CTASection
        title="Need similar diligence?"
        description="Connect with our analysts to scope your market entry or acquisition thesis."
        primary={{ label: 'Request a briefing', href: '/thanks/briefing' }}
        theme="oia"
      />
    </div>
  );
}
