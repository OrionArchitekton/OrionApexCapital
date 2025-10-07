type Props = { head: string[]; rows: (string | number | React.ReactNode)[][]; className?: string };
export default function ResponsiveTable({ head, rows, className="" }: Props) {
  return (
    <div className={`table-shell ${className}`}>
      <table className="responsive-table w-full text-sm">
        <thead className="sticky text-slate-300 uppercase text-xs">
          <tr>{head.map((h,i)=>(<th key={i} className="px-3 py-2">{h}</th>))}</tr>
        </thead>
        <tbody>
          {rows.map((r,ri)=>(
            <tr key={ri} className="border-b border-slate-800/40 hover:bg-slate-800/30 transition">
              {r.map((c,ci)=>(<td key={ci} className={`px-3 py-2 ${ci>1?'num mono':''}`}>{c}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
