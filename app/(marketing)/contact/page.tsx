import type { Metadata } from "next";
import { Form } from "@/components/Form";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact | Orion Apex Capital",
  description: "Get in touch with Orion Apex Capital.",
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <section className="py-16">
        <div className="container mx-auto max-w-xl px-6">
          <h1 className="text-3xl font-semibold mb-4">Contact</h1>
          <p className="text-base opacity-70 mb-8">
            Get in touch with Orion Apex Capital.
          </p>

          <Form
            title=""
            description=""
            endpoint="/api/contact"
            successRedirect="/contact"
            cta="Send"
            eventName="form_submit"
            fields={[
              { name: "name", label: "Name", type: "text", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "message", label: "Message", type: "textarea", required: true },
            ]}
          />

          <p className="mt-8 text-xs opacity-50">
            We respond within 1-2 business days.
          </p>
        </div>
      </section>
    </div>
  );
}
