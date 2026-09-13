import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact BRACEWorks - Cloud & AI Security",
  description:
    "Get in touch with BRACEWorks about our methodology, a potential partnership, or a press or research inquiry.",
  openGraph: {
    title: "Contact BRACEWorks - Cloud & AI Security",
    description:
      "Get in touch with BRACEWorks about our methodology, a potential partnership, or a press or research inquiry.",
    url: "https://braceworks.net/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact BRACEWorks - Cloud & AI Security",
    description:
      "Get in touch with BRACEWorks about our methodology, a potential partnership, or a press or research inquiry.",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-content px-4 py-16 sm:py-20">
      <h1 className="text-4xl font-bold text-brand-ink">Get in touch</h1>
      <p className="mt-6 max-w-3xl text-brand-muted">
        Whether you have a question about our methodology, want to discuss a potential
        partnership, or are a member of the press or a research community, we&apos;d like
        to hear from you.
      </p>

      <div className="mt-12">
        <ContactForm />
      </div>

      <p className="mt-16 max-w-3xl border-t border-brand-border pt-8 text-sm text-brand-muted">
        BRACEWorks is an independent, U.S.-based cybersecurity advisory practice.
      </p>
    </div>
  );
}
