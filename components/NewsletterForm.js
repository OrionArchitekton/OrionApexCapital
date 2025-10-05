import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("Loading...");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setStatus(data.message || "Subscribed!");
      setEmail("");
    } catch (e) {
      setStatus("Subscription failed. Try again later.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-surface-0/60 p-4 sm:flex-row sm:items-center"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="w-full rounded-xl border border-white/10 bg-surface-1/80 px-4 py-3 text-sm text-text-primary outline-none transition focus:border-brand-copper focus:ring-2 focus:ring-brand-copper/70"
      />
      <button
        className="btn btn-primary w-full rounded-xl sm:w-auto"
        type="submit"
        disabled={status === "Loading..."}
      >
        {status === "Loading..." ? "Sending..." : "Get Insights"}
      </button>
      {status && status !== "Loading..." && (
        <p className="text-xs text-brand-copper sm:pl-4">{status}</p>
      )}
    </form>
  );
}