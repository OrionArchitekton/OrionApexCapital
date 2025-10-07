export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="section-title mb-3">
      <svg viewBox="0 0 24 24" className="w-4 h-4 opacity-75" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
      </svg>
      <span>{children}</span>
    </h2>
  );
}
