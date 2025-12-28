export const metadata = {
  title: "Orion Intelligence Agency | Orion Apex Capital",
  description:
    "Orion Intelligence Agency (OIA) is the services and delivery arm of Orion Apex Capital.",
};

export default function OIAPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Orion Intelligence Agency</h1>

      <div className="mt-6 space-y-4 text-base leading-7">
        <p>
          <strong>Orion Intelligence Agency (OIA)</strong> is the services and delivery arm of
          Orion Apex Capital.
        </p>

        <p>
          OIA operates independently within the Orion Apex Capital portfolio.
        </p>
      </div>

      <div className="mt-10">
        <a
          href="/contact"
          className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium hover:opacity-80"
        >
          Contact
        </a>
      </div>
    </main>
  );
}

