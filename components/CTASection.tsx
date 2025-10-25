import styles from './CTASection.module.css';
import { CTAButton } from './CTAButton';

interface CTASectionProps {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  theme?: 'oac' | 'oia' | 'oam' | 'ats';
}

export function CTASection({ title, description, primary, secondary, theme = 'oac' }: CTASectionProps) {
  return (
    <section className={styles.section} data-theme={theme}>
      <div className={styles.inner}>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.actions}>
          <CTAButton href={primary.href}>{primary.label}</CTAButton>
          {secondary ? (
            <CTAButton href={secondary.href} variant="secondary">
              {secondary.label}
            </CTAButton>
          ) : null}
        </div>
      </div>
    </section>
  );
}
