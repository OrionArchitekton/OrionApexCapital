import type { Metadata } from 'next';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { CTASection } from '@/components/CTASection';
import { oiaCaseStudies } from '@/lib/data';
import { buildBreadcrumb } from '@/lib/schema';

const study = oiaCaseStudies.find((item) => item.slug === 'competitive-advantage-signal');

export const metadata: Metadata = {
  title: 'Case study: Competitive advantage signal | Orion Intelligence Agency',
  description: study?.challenge ?? 'Fintech acquisition insight case study.',
};

export default function CompetitiveAdvantageSignalCaseStudy() {
  const breadcrumb = buildBreadcrumb([
    { name: 'Home', url: 'https://www.orionapexcapital.com/' },
    { name: 'Orion Intelligence Agency', url: 'https://www.orionapexcapital.com/intelligence' },
    { name: 'Case studies', url: 'https://www.orionapexcapital.com/intelligence' },
    { name: 'Competitive advantage signal', url: 'https://www.orionapexcapital.com/intelligence/case-studies/competitive-advantage-signal' },
  ]);

  if (!study) {
    notFound();
  }

  return (
    <div data-theme="oia">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="container">
        <CaseStudyCard title={study.title} challenge={study.challenge} solution={study.solution} impact={study.impact} />
      </div>
      <CTASection
        title="Strengthen your acquisition thesis"
        description="Let us stress-test customer retention, pricing power, and reputation before you sign."
        primary={{ label: 'Request a briefing', href: '/thanks/briefing' }}
        theme="oia"
      />
    </div>
  );
}
