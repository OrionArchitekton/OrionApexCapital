import type { Metadata } from 'next';
import styles from '../thanks.module.css';

export const metadata: Metadata = {
  title: 'Thank you | Orion Intelligence Agency',
  description: 'Your briefing request has been received.',
};

export default function BriefingThanks() {
  return (
    <div className={styles.page}>
      <h1>Thank you</h1>
      <p>
        Our intelligence directors will confirm scope and compliance requirements within one business day.
      </p>
      <a href="/intelligence">Return to Orion Intelligence Agency</a>
    </div>
  );
}
