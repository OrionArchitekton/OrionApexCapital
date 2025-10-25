export const trackEvent = (event: string, payload?: Record<string, any>) => {
  if (typeof window === 'undefined') return;
  window.plausible?.(event, { props: payload });
};

declare global {
  interface Window {
    plausible?: (event: string, payload?: { props?: Record<string, any> }) => void;
  }
}
