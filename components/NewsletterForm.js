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
      className="panel panel--inline panel--static flex flex-col gap-3 p-4 sm:flex-row sm:items-center"
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
        className="form-field"
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