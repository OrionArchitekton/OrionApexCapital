import { ChangeEvent } from "react";

type FilterSelection = {
  industry: string;
  outcome: string;
};

type FilterBarProps = {
  industries: string[];
  outcomes: string[];
  industry: string;
  outcome: string;
  onChange: (selection: FilterSelection) => void;
};

function handleOptionChange(
  current: FilterSelection,
  onChange: (selection: FilterSelection) => void,
  key: keyof FilterSelection
) {
  return (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    onChange({ ...current, [key]: value });
  };
}

export default function FilterBar({ industries, outcomes, industry, outcome, onChange }: FilterBarProps) {
  const selection: FilterSelection = { industry, outcome };
  const resetDisabled = !industry && !outcome;

  return (
    <div className="glass flex flex-col gap-5 rounded-3xl border border-white/10 bg-[rgba(12,21,39,0.72)] p-6 md:flex-row md:items-center md:justify-between">
      <div className="space-y-2 text-left">
        <p className="text-xs uppercase tracking-[0.32em] text-slate-300/70">Filter engagement history</p>
        <p className="text-sm text-slate-300/90">
          Narrow the portfolio by sector focus and measurable outcome.
        </p>
      </div>
      <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:items-end">
        <label className="flex flex-1 flex-col text-left text-xs uppercase tracking-[0.28em] text-slate-300/60">
          Industry
          <select
            value={industry}
            onChange={handleOptionChange(selection, onChange, "industry")}
            className="mt-2 w-full rounded-2xl border border-white/15 bg-[rgba(10,18,34,0.85)] px-4 py-3 text-sm text-slate-100 shadow-inner transition focus:border-[rgba(242,193,78,0.4)] focus:outline-none focus:ring-2 focus:ring-[rgba(242,193,78,0.35)]"
          >
            <option value="">All Industries</option>
            {industries.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-1 flex-col text-left text-xs uppercase tracking-[0.28em] text-slate-300/60">
          Outcome
          <select
            value={outcome}
            onChange={handleOptionChange(selection, onChange, "outcome")}
            className="mt-2 w-full rounded-2xl border border-white/15 bg-[rgba(10,18,34,0.85)] px-4 py-3 text-sm text-slate-100 shadow-inner transition focus:border-[rgba(242,193,78,0.4)] focus:outline-none focus:ring-2 focus:ring-[rgba(242,193,78,0.35)]"
          >
            <option value="">All Outcomes</option>
            {outcomes.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <button
          type="button"
          onClick={() => onChange({ industry: "", outcome: "" })}
          className="btn btn-ghost md:ml-3"
          disabled={resetDisabled}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
