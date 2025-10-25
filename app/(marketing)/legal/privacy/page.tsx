import type { Metadata } from 'next';
import styles from '../legal.module.css';
import { buildBreadcrumb } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Privacy Notice | Orion Apex Capital',
  description: 'Orion Apex Capital privacy practices covering data collection, processing, and rights.',
};

export default function PrivacyPage() {
  const breadcrumb = buildBreadcrumb([
    { name: 'Home', url: 'https://www.orionapexcapital.com/' },
    { name: 'Legal', url: 'https://www.orionapexcapital.com/legal/privacy' },
  ]);

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <h1>Privacy Notice</h1>
      <p>Effective date: August 15, 2024</p>
      <h2>Information we collect</h2>
      <p>
        We collect business contact information, engagement records, and usage metrics for Orion Apex Capital and its subsidiaries. We do not collect consumer financial information.
      </p>
      <h2>How we use data</h2>
      <p>
        Data informs service delivery, compliance obligations, marketing communications, and platform improvements. We rely on legitimate interest, contract performance, and consent where required.
      </p>
      <h2>Sharing</h2>
      <p>
        We share information with trusted processors including HubSpot, ConvertKit, and Plausible Analytics. All vendors execute DPAs and adhere to regional data transfer safeguards.
      </p>
      <h2>Your rights</h2>
      <p>
        You may request access, correction, deletion, or restriction by emailing privacy@orionapexcapital.com. We respond within 30 days and honor all applicable regulatory timelines.
      </p>
      <h2>Contact</h2>
      <p>Email privacy@orionapexcapital.com or write to 1100 15th St NW, Washington, DC 20005.</p>
    </div>
  );
}
