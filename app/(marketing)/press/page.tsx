import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { pressAssets } from '@/lib/data';
import styles from './press.module.css';
import { buildBreadcrumb } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Press kit | Orion Apex Capital',
  description: 'Download Orion Apex Capital brand assets, executive bios, and media contacts.',
};

export default function PressPage() {
  const breadcrumb = buildBreadcrumb([
    { name: 'Home', url: 'https://www.orionapexcapital.com/' },
    { name: 'Press', url: 'https://www.orionapexcapital.com/press' },
  ]);

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Hero
        eyebrow="Press kit"
        title="Brand and leadership resources"
        description="Journalists and partners can access official brand files, leadership bios, and communications contacts."
      />
      <section>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.block} data-surface>
              <h2>Logos</h2>
              <ul>
                {pressAssets.logos.map((logo) => (
                  <li key={logo.url}>
                    <Link href={logo.url} target="_blank" rel="noopener noreferrer">
                      {logo.description} ({logo.format})
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.block} data-surface>
              <h2>Palette</h2>
              <ul className={styles.colors}>
                {pressAssets.colors.map((color) => (
                  <li key={color.value}>
                    <span style={{ backgroundColor: color.value }} aria-hidden />
                    <span>
                      <strong>{color.name}</strong>
                      <small>{color.value}</small>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.block} data-surface>
              <h2>Contacts</h2>
              <ul>
                {pressAssets.contacts.map((contact) => (
                  <li key={contact.email}>
                    <strong>{contact.name}</strong>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
