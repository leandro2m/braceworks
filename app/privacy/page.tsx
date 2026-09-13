import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | BRACEWorks - Cloud & AI Security",
  description: "Privacy Policy for BRACEWorks Cloud & AI Security.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-content px-4 py-16 sm:py-20">
      <h1 className="text-4xl font-bold text-brand-ink">Privacy Policy</h1>
      <p className="mt-6 max-w-2xl text-brand-muted">
        This page is a placeholder. BRACEWorks Cloud & AI Security&apos;s Privacy Policy is being
        finalized and will be published here following review by licensed counsel.
      </p>
    </div>
  );
}
