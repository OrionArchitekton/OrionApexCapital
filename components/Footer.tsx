import Link from "next/link";
import styles from "./Footer.module.css";
import { subsidiaries, navLinks } from "@/lib/data";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className={styles.footer} data-theme="oac">
      <div className={styles.container}>
        <div>
          <p className={styles.brand}>Orion Apex Capital</p>
          <p className={styles.tagline}>Holding Company</p>
        </div>
        <div className={styles.links}>
          <div>
            <p className={styles.heading}>Navigation</p>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={styles.heading}>Portfolio</p>
            <ul>
              {subsidiaries.map((company) => (
                <li key={company.slug}>
                  <Link href={company.url}>{company.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={styles.heading}>Legal</p>
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
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>© {currentYear} Orion Apex Capital. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
