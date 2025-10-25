import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Form } from '@/components/Form';
import styles from './contact.module.css';
import { buildBreadcrumb } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contact Orion Apex Capital',
  description: 'Request a conversation with Orion Apex Capital about intelligence, media, or trading initiatives.',
};

export default function ContactPage() {
  const breadcrumb = buildBreadcrumb([
    { name: 'Home', url: 'https://www.orionapexcapital.com/' },
    { name: 'Contact', url: 'https://www.orionapexcapital.com/contact' },
  ]);

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Hero
        eyebrow="Contact"
        title="Talk to our team"
        description="Tell us about your mandate, timeline, and compliance requirements so we can route you to the right subsidiary leadership."
      />
      <Form
        title="Start the conversation"
        description="We respond within one business day. HubSpot and ConvertKit handle secure routing and opt-in confirmations."
        endpoint="/api/contact"
        successRedirect="/thanks/demo"
        cta="Send message"
        eventName="form_submit"
        fields={[
          { name: 'name', label: 'Full name', type: 'text', required: true },
          { name: 'email', label: 'Work email', type: 'email', required: true },
          { name: 'company', label: 'Company', type: 'text', required: true },
          {
            name: 'interest',
            label: 'Primary interest',
            type: 'select',
            required: true,
            options: [
              { label: 'Orion Intelligence Agency', value: 'oia' },
              { label: 'Orion Ascend Media', value: 'oam' },
              { label: 'Apex Trading System', value: 'ats' },
            ],
          },
          { name: 'timeline', label: 'Timeline', type: 'text' },
          { name: 'notes', label: 'Context', type: 'textarea' },
        ]}
      />
    </div>
  );
}
