import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  title: string;
  description: string;
  outcomes: string[];
}

export function ServiceCard({ title, description, outcomes }: ServiceCardProps) {
  return (
    <article className={styles.card} data-surface>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {outcomes.map((outcome) => (
          <li key={outcome}>{outcome}</li>
        ))}
      </ul>
    </article>
  );
}
