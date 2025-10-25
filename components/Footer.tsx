import Link from 'next/link';
import styles from './Footer.module.css';
import { subsidiaries, navLinks } from '@/lib/data';

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className={styles.footer} data-theme="oac">
      <div className={styles.container}>
        <div>
          <p className={styles.brand}>Orion Apex Capital</p>
          <p className={styles.tagline}>
            Intelligence, Media, and Systems for modern markets.
          </p>
          <p className={styles.disclaimer}>
            Apex Trading System is made available to qualified institutional and
            professional investors only. It does not constitute investment
            advice, and trading involves risk, including potential loss of
            principal.
          </p>
        </div>
        <div className={styles.links}>
          <div>
            <p className={styles.heading}>Navigation</p>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={styles.heading}>Subsidiaries</p>
            <ul>
              {subsidiaries.map((company) => (
                <li key={company.slug}>
                  <Link href={company.url}>{company.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={styles.heading}>Compliance</p>
            <ul>
              <li>
                <Link href="/legal/privacy">Privacy</Link>
              </li>
              <li>
                <Link href="/legal/terms">Terms</Link>
              </li>
              <li>
                <Link href="/legal/disclosures">Disclosures</Link>
              </li>
              <li>
                <Link href="/security">Security</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>© {currentYear} Orion Apex Capital. All rights reserved.</p>
        <p>HQ: Washington, D.C. • New York • London</p>
      </div>
    </footer>
  );
}
