import type { Metadata } from "next";
import Link from "next/link";
import { publishedArticles, plannedTopics } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights | BRACEWorks - Cloud & AI Security",
  description:
    "BRACEWorks publishes technical insights on cloud security, generative AI security, and security governance, grounded in documented industry data and public frameworks.",
  openGraph: {
    title: "Insights | BRACEWorks - Cloud & AI Security",
    description:
      "BRACEWorks publishes technical insights on cloud security, generative AI security, and security governance, grounded in documented industry data and public frameworks.",
    url: "https://braceworks.net/insights",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights | BRACEWorks - Cloud & AI Security",
    description:
      "BRACEWorks publishes technical insights on cloud security, generative AI security, and security governance, grounded in documented industry data and public frameworks.",
  },
};

export default function InsightsPage() {
  return (
    <div className="mx-auto max-w-content px-4 py-16 sm:py-20">
      <h1 className="text-4xl font-bold text-brand-ink">Insights</h1>
      <p className="mt-6 max-w-4xl text-brand-muted">
        BRACEWorks publishes technical insights on cloud security, generative AI security,
        and security governance. They&apos;re grounded in documented industry data and
        public frameworks rather than vendor marketing. Articles will be added here as
        they&apos;re published.
      </p>

      <section className="mt-12">
        <ul className="max-w-4xl space-y-4">
          {publishedArticles.map((article) => (
            <li
              key={article.slug}
              className="rounded-lg border border-brand-border bg-white p-6"
            >
              <h2 className="text-xl font-semibold text-brand-ink">
                <Link
                  href={`/insights/${article.slug}`}
                  className="hover:text-brand-navy"
                >
                  {article.title}
                </Link>
              </h2>
              <p className="mt-2 text-brand-muted">{article.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-brand-ink">
          Planned topics (not yet published)
        </h2>
        <ul className="mt-4 max-w-4xl list-disc space-y-3 pl-5 text-brand-muted">
          {plannedTopics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
