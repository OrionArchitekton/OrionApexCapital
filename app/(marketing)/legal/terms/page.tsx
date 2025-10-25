import type { Metadata } from 'next';
import styles from '../legal.module.css';
import { buildBreadcrumb } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Terms of Use | Orion Apex Capital',
  description: 'Terms governing access to Orion Apex Capital websites and materials.',
};

export default function TermsPage() {
  const breadcrumb = buildBreadcrumb([
    { name: 'Home', url: 'https://www.orionapexcapital.com/' },
    { name: 'Terms', url: 'https://www.orionapexcapital.com/legal/terms' },
  ]);

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <h1>Terms of Use</h1>
      <p>Effective date: August 15, 2024</p>
      <h2>Acceptance</h2>
      <p>
        By accessing Orion Apex Capital sites you agree to these terms and any applicable subsidiary agreements.
      </p>
      <h2>Use of content</h2>
      <p>
        Materials are provided for informational purposes only and may not be redistributed without consent. No content constitutes investment advice.
      </p>
      <h2>Limitation of liability</h2>
      <p>
        We disclaim all warranties to the fullest extent permitted by law. Orion Apex Capital and its subsidiaries are not liable for indirect or consequential damages.
      </p>
      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the District of Columbia.</p>
      <h2>Contact</h2>
      <p>Legal inquiries: legal@orionapexcapital.com.</p>
    </div>
  );
}
