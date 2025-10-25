import type { Metadata } from 'next';
import styles from '../thanks.module.css';

export const metadata: Metadata = {
  title: 'Thank you | Orion Ascend Media',
  description: 'Your campaign request has been received.',
};

export default function CampaignThanks() {
  return (
    <div className={styles.page}>
      <h1>Thank you</h1>
      <p>
        Our media strategists will send a readiness checklist and scheduling link shortly.
      </p>
      <a href="/media">Return to Orion Ascend Media</a>
    </div>
  );
}
