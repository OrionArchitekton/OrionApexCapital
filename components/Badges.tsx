export function Badge({ children, className="" }: { children: React.ReactNode; className?: string }) {
  return <span className={`badge ${className}`}>{children}</span>;
}
export const BadgeCap = (p:any)=> <Badge className="badge-cap" {...p} />;
export const BadgeLift = (p:any)=> <Badge className="badge-lift" {...p} />;
export const BadgeTtl = (p:any)=> <Badge className="badge-ttl" {...p} />;
