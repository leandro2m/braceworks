import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | BRACEWorks - Cloud & AI Security",
  description:
    "The deliverable templates BRACEWorks develops with clients as part of an engagement: cloud security baselines, risk registers, incident response playbooks, and more.",
  openGraph: {
    title: "Resources | BRACEWorks - Cloud & AI Security",
    description:
      "The deliverable templates BRACEWorks develops with clients as part of an engagement: cloud security baselines, risk registers, incident response playbooks, and more.",
    url: "https://braceworks.net/resources",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources | BRACEWorks - Cloud & AI Security",
    description:
      "The deliverable templates BRACEWorks develops with clients as part of an engagement: cloud security baselines, risk registers, incident response playbooks, and more.",
  },
};

const deliverables = [
  "Cloud Security Baseline",
  "Cloud Security Assessment Report",
  "Risk Register",
  "Executive Risk Dashboard",
  "Security Architecture Review",
  "Incident Response Playbook",
  "AI Security Governance Checklist",
  "Cloud Security Governance Playbook",
];

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-content px-4 py-16 sm:py-20">
      <h1 className="text-4xl font-bold text-brand-ink">Resources</h1>
      <p className="mt-6 max-w-3xl text-brand-muted">
        As part of our engagements, BRACEWorks develops the following deliverable
        templates with clients. They&apos;re listed here to show what a BRACEWorks
        engagement produces. They&apos;re available as part of an engagement, not as
        free downloads.
      </p>

      <ul className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
        {deliverables.map((item) => (
          <li
            key={item}
            className="rounded-lg border border-brand-border bg-white px-5 py-4 font-medium text-brand-ink"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
