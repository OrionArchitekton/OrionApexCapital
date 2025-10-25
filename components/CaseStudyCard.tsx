import styles from './CaseStudyCard.module.css';

interface CaseStudyCardProps {
  title: string;
  challenge: string;
  solution: string;
  impact: string;
}

export function CaseStudyCard({ title, challenge, solution, impact }: CaseStudyCardProps) {
  return (
    <article className={styles.card} data-elevated>
      <h3>{title}</h3>
      <dl>
        <div>
          <dt>Challenge</dt>
          <dd>{challenge}</dd>
        </div>
        <div>
          <dt>Approach</dt>
          <dd>{solution}</dd>
        </div>
        <div>
          <dt>Impact</dt>
          <dd>{impact}</dd>
        </div>
      </dl>
    </article>
  );
}
