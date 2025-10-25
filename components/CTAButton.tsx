import Link from 'next/link';
import styles from './CTAButton.module.css';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export function CTAButton({ href, children, variant = 'primary' }: CTAButtonProps) {
  return (
    <Link href={href} className={variant === 'primary' ? styles.primary : styles.secondary}>
      {children}
    </Link>
  );
}
