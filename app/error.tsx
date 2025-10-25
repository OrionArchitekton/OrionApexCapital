'use client';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body data-theme="oac" style={{ display: 'grid', placeItems: 'center', minHeight: '100vh' }}>
        <div style={{ textAlign: 'center', maxWidth: '480px' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--step-5)' }}>Something went wrong</h1>
          <p style={{ color: 'var(--color-muted)' }}>{error.message}</p>
          <button
            onClick={() => reset()}
            style={{ marginTop: '2rem', padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-full)', border: 'none', background: 'var(--color-accent)', color: '#020817', fontWeight: 600 }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
