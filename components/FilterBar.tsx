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
    <div className="panel panel--accent panel--inline panel--static flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
      <div className="space-y-2 text-left">
        <p className="text-xs uppercase tracking-[0.32em] text-brand-gold">Filter engagement history</p>
        <p className="text-sm text-white">
          Narrow the portfolio by sector focus and measurable outcome.
        </p>
      </div>
      <div className="flex w-full flex-col gap-4 md:w-auto md:flex-row md:items-end">
        <label className="flex flex-1 flex-col gap-2 text-sm text-text-onCopper/80">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold/80">Industry</span>
          <select
            value={industry}
            onChange={handleOptionChange(selection, onChange, "industry")}
            className="form-field"
          >
            <option value="">All Industries</option>
            {industries.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-1 flex-col gap-2 text-sm text-text-onCopper/80">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold/80">Outcome</span>
          <select
            value={outcome}
            onChange={handleOptionChange(selection, onChange, "outcome")}
            className="form-field"
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
