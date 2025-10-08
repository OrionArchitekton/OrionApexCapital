export function ContactForm() {
  return (
    <form className="space-y-6" method="post" action="/api/contact">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-text-muted">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-copper">
            Name
          </span>
          <input
            className="form-field"
            name="name"
            placeholder="Your name"
            autoComplete="name"
            required
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-text-muted">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-copper">
            Email
          </span>
          <input
            className="form-field"
            type="email"
            name="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-text-muted">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-copper">
            Company / Fund
          </span>
          <input
            className="form-field"
            name="company"
            placeholder="Optional"
            autoComplete="organization"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-text-muted">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-copper">
            Engagement focus
          </span>
          <select
            className="form-field"
            name="interest"
            defaultValue=""
          >
            <option value="" disabled>
              Select a focus area
            </option>
            <option value="Crypto Trading">Crypto Trading</option>
            <option value="Digital Asset Investing">Digital Asset Investing</option>
            <option value="Advisory / Operations">Advisory / Operations</option>
            <option value="Other">Other</option>
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm text-text-muted">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-copper">
          How can we help?
        </span>
        <textarea
          className="form-field form-field--textarea"
          name="message"
          placeholder="Tell us about your objectives, constraints, and timeline..."
          required
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button className="btn btn-primary px-8 py-4 text-sm" type="submit">
          Send Message
        </button>
        <p className="text-xs uppercase tracking-[0.28em] text-text-muted/80">
          We reply within 1-2 business days
        </p>
      </div>
    </form>
  );
}

