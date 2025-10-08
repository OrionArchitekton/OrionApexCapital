import { useEffect, useState } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const v = localStorage.getItem('consent_analytics');
    if (!v) setVisible(true);
  }, []);

  if (!visible) return null;

  const accept = () => {
    localStorage.setItem('consent_analytics', 'granted');
    setVisible(false);
  };
  const decline = () => {
    localStorage.setItem('consent_analytics', 'denied');
    setVisible(false);
  };

  return (
    <div role="dialog" aria-live="polite" className="fixed bottom-4 left-1/2 z-50 w-[92%] max-w-xl -translate-x-1/2">
      <div className="glass border border-white/15 bg-[rgba(9,16,30,0.88)] p-5">
        <p className="text-sm text-text-muted">
          We use minimal analytics to improve the site. Consent is optional.
        </p>
        <div className="mt-3 flex justify-end gap-3">
          <button onClick={decline} className="btn btn-secondary text-sm">Decline</button>
          <button onClick={accept} className="btn btn-primary text-sm">Accept</button>
        </div>
      </div>
    </div>
  );
}


