import Link from "next/link";

export default function NavAurora() {
  return (
    <header className="sticky top-0 z-30 glass relative">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl border border-[rgba(242,193,78,.22)] shadow-[0_18px_32px_-22px_rgba(242,193,78,.45)] bg-[rgba(18,28,49,.6)]" />
          <div className="leading-tight">
            <p className="uppercase tracking-[0.34em] text-xs text-slate-200">ORION APEX</p>
            <p className="uppercase tracking-[0.22em] text-[11px] text-slate-400">Capital</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-2">
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/insights" className="nav-link">Insights</Link>
          <Link href="/freelance" className="nav-link">Client Work</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
