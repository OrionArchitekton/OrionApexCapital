import { useEffect, useMemo, useState } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const v = localStorage.getItem('consent_analytics');
    if (!v) setVisible(true);
  }, []);

  const ids = useMemo(() => ({
    dialog: 'cookie-consent-dialog',
    description: 'cookie-consent-description'
  }), []);

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
    <div
      role="dialog"
      aria-live="polite"
      aria-modal="true"
      aria-labelledby={ids.dialog}
      aria-describedby={ids.description}
      className="fixed bottom-4 left-1/2 z-50 w-[92%] max-w-xl -translate-x-1/2"
    >
      {/* Ensure announcement text remains discoverable for assistive tech */}
      <div className="glass border border-white/15 bg-[rgba(9,16,30,0.88)] p-5" id={ids.dialog}>
        <p id={ids.description} className="text-sm text-text-muted">
          We use minimal analytics to improve the site. Consent is optional.
        </p>
        <div className="mt-3 flex justify-end gap-3">
          <button type="button" onClick={decline} className="btn btn-secondary text-sm">Decline</button>
          <button type="button" onClick={accept} className="btn btn-primary text-sm">Accept</button>
        </div>
      </div>
    </div>
  );
}


