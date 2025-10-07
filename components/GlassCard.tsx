export default function GlassCard({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`card rounded-xl p-4 shadow ${className}`}>{children}</div>;
}
