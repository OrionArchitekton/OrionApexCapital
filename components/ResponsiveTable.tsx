import { ReactNode } from "react";
import clsx from "clsx";

type ResponsiveTableProps = {
  head: ReactNode[];
  rows: ReactNode[][];
  className?: string;
  headClassName?: string;
  bodyClassName?: string;
};

export default function ResponsiveTable({
  head,
  rows,
  className,
  headClassName,
  bodyClassName
}: ResponsiveTableProps) {
  return (
    <div className={clsx("table-shell", className)}>
      <table className="responsive-table w-full text-sm">
        <thead className={clsx("sticky text-text-muted uppercase text-xs", headClassName)}>
          <tr>
            {head.map((cell, index) => (
              <th key={index} className="px-3 py-2 font-semibold tracking-[0.2em]">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={bodyClassName}>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-[rgba(28,47,77,0.35)] transition hover:-translate-y-[1px] hover:border-[rgba(242,193,78,0.28)] hover:bg-[rgba(12,21,39,0.6)]"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={clsx("px-3 py-2 align-middle", cellIndex > 1 && "num mono")}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
