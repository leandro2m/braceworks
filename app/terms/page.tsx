import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | BRACEWorks - Cloud & AI Security",
  description: "Terms of Service for BRACEWorks Cloud & AI Security.",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-content px-4 py-16 sm:py-20">
      <h1 className="text-4xl font-bold text-brand-ink">Terms of Service</h1>
      <p className="mt-6 max-w-3xl text-brand-muted">
        This page is a placeholder. BRACEWorks Cloud & AI Security&apos;s Terms of Service are
        being finalized and will be published here following review by licensed counsel.
      </p>
    </div>
  );
}
