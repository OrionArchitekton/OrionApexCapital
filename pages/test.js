import Layout from "@/components/Layout";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";

export default function TestPage() {
  return (
    <Layout
      title="UI System Test"
      description="Internal preview surface for validating Orion Apex Trading UI components."
      url="/test"
    >
      <Section
        eyebrow="System Diagnostics"
        title="Trading UI skin verification"
        description="Use this surface to confirm panel, typography, and background layers render as expected across deployments."
        containerClassName="max-w-4xl space-y-10"
      >
        <Container className="space-y-8">
          <div className="panel panel--accent panel--static space-y-4 p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-brand-copper">Panel showcase</p>
            <h2 className="text-2xl font-semibold text-text-primary">Accent Panel</h2>
            <p className="text-sm text-text-muted">
              This block mirrors the hero panels used across the site. Verify glow, border, and hover interactions in both desktop and mobile breakpoints.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { variant: "subtle", label: "Subtle" },
              { variant: "accent", label: "Accent" },
              { variant: "metric", label: "Metric" }
            ].map(({ variant, label }) => (
              <div key={variant} className={`panel panel--${variant} panel--static space-y-2 p-6`}>
                <p className="text-xs uppercase tracking-[0.28em] text-text-muted">Variant</p>
                <p className="text-lg font-semibold text-text-primary">{label}</p>
                <p className="text-sm text-text-muted">
                  Panels inherit pointer-tracking glow via <code>--cursor-x</code> and <code>--cursor-y</code> custom properties.
                </p>
              </div>
            ))}
          </div>

          <div className="panel panel--inline panel--static p-6 text-sm text-text-muted">
            <p>
              Typography, spacing, and glassmorphism tokens originate from <code>styles/ui.css</code>. Review this page after major theme updates to ensure regression-free visuals.
            </p>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}