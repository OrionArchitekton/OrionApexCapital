import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ padding: '8rem 0', textAlign: 'center' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--step-5)' }}>Page not found</h1>
      <p style={{ color: 'var(--color-muted)' }}>
        The resource you requested is unavailable. Use the navigation to continue exploring Orion Apex Capital.
      </p>
      <Link href="/" style={{ display: 'inline-block', marginTop: '2rem', padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-full)', border: '1px solid rgba(148,163,184,0.3)' }}>
        Return home
      </Link>
    </div>
  );
}
