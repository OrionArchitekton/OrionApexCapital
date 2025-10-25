import type { Metadata } from 'next';
import styles from '../thanks.module.css';

export const metadata: Metadata = {
  title: 'Thank you | Orion Apex Capital',
  description: 'We received your message.',
};

export default function DemoThanks() {
  return (
    <div className={styles.page}>
      <h1>Thank you</h1>
      <p>
        A member of our team will reply with next steps and compliance requirements shortly.
      </p>
      <a href="/">Return home</a>
    </div>
  );
}
