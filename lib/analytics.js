export function track(event, params = {}) {
  if (typeof window === "undefined") return;

  // Hook to GA4 or Plausible; defaults to console
  if (window.gtag) {
    window.gtag("event", event, params);
  } else {
    console.debug("[analytics]", event, params);
  }
}

export const trackEvent = track;
