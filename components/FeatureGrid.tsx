import styles from './FeatureGrid.module.css';

interface FeatureGridProps {
  items: { name: string; description: string }[];
}

export function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <article key={item.name} className={styles.card} data-surface>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
}
