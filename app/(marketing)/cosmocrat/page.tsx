export const metadata = {
  title: "Cosmocrat | Orion Apex Capital",
  description:
    "Cosmocrat is a user-owned cognitive operating system designed to preserve continuity, intent, and identity across time.",
};

export default function CosmocratPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Cosmocrat</h1>

      <div className="mt-6 space-y-4 text-base leading-7">
        <p>
          <strong>Cosmocrat</strong> is a user-owned cognitive operating system designed to
          preserve continuity, intent, and identity across time.
        </p>

        <p>
          It provides a private, batteries-included intelligence runtime with persistent
          memory, lane separation, and model-agnostic orchestration.
        </p>

        <p>
          Cosmocrat operates independently and is governed as part of the Orion Apex Capital
          portfolio.
        </p>
      </div>

      <div className="mt-10">
        <a
          href="https://cosmocrat.ai"
          className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium hover:opacity-80"
        >
          Visit cosmocrat.ai
        </a>
      </div>
    </main>
  );
}


