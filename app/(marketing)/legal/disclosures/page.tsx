import type { Metadata } from 'next';
import styles from '../legal.module.css';
import { buildBreadcrumb } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Regulatory disclosures | Orion Apex Capital',
  description: 'Regulatory disclosures for Orion Apex Capital subsidiaries, including risk statements for Apex Trading System.',
};

export default function DisclosuresPage() {
  const breadcrumb = buildBreadcrumb([
    { name: 'Home', url: 'https://www.orionapexcapital.com/' },
    { name: 'Disclosures', url: 'https://www.orionapexcapital.com/legal/disclosures' },
  ]);

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <h1>Regulatory disclosures</h1>
      <h2>Orion Intelligence Agency</h2>
      <p>
        Orion Intelligence Agency delivers research and diligence services to institutional clients. We do not conduct surveillance activities for unlawful purposes and comply with OFAC and ITAR controls.
      </p>
      <h2>Orion Ascend Media</h2>
      <p>
        Orion Ascend Media operates as a marketing services provider. Campaigns undergo regulatory review when targeting regulated industries. We observe CAN-SPAM, GDPR, and other regional marketing laws.
      </p>
      <h2>Apex Trading System</h2>
      <p>
        Apex Trading System is provided solely to qualified institutional buyers and regulated entities. It is not a brokerage or investment adviser. Trading involves risk and may result in losses exceeding initial capital. Historical performance is not indicative of future results.
      </p>
      <p>
        Access requires completion of KYC, AML, and suitability assessments. All clients must maintain active risk supervision and comply with their jurisdiction’s regulations.
      </p>
    </div>
  );
}
