import Layout from "@/components/Layout";
import Logo from "@/components/Logo";
import { ContactForm } from "@/components/Forms";

export default function Contact() {
  return (
    <Layout
      title="Contact"
      description="Tell us about your objectives and constraints. We'll reply within 1–2 business days to discuss your strategic needs and partnership opportunities."
      url="/contact"
    >
      <section className="container py-16 space-y-6 max-w-2xl">
        <div className="flex items-center gap-3">
          <Logo variant="crestWhite" size={28} />
          <h1 className="text-3xl md:text-4xl font-bold">Contact</h1>
        </div>
        <p className="text-slate-300">
          Tell us about your objectives and constraints. We'll reply within 1–2
          business days.
        </p>
        <ContactForm />
      </section>
    </Layout>
  );
}
