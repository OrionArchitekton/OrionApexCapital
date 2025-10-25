import styles from './Hero.module.css';
import type { ReactNode } from 'react';

interface HeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
  theme?: 'oac' | 'oia' | 'oam' | 'ats';
}

export function Hero({ eyebrow, title, description, actions, theme = 'oac' }: HeroProps) {
  return (
    <section className={styles.hero} data-theme={theme}>
      <div className={styles.wrapper}>
        {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        {actions ? <div className={styles.actions}>{actions}</div> : null}
      </div>
    </section>
  );
}
