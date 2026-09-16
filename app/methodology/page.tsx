import type { Metadata } from "next";
import MethodologyStep from "@/components/MethodologyStep";
import { braceSteps } from "@/lib/methodology";

export const metadata: Metadata = {
  title: "The BRACE Methodology | BRACEWorks - Cloud & AI Security",
  description:
    "BRACE is BRACEWorks's structured, repeatable methodology behind every engagement: Baseline, Risk Mitigation, AI Security, Cloud, Enhancement.",
  openGraph: {
    title: "The BRACE Methodology | BRACEWorks - Cloud & AI Security",
    description:
      "BRACE is BRACEWorks's structured, repeatable methodology behind every engagement: Baseline, Risk Mitigation, AI Security, Cloud, Enhancement.",
    url: "https://braceworks.net/methodology",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The BRACE Methodology | BRACEWorks - Cloud & AI Security",
    description:
      "BRACE is BRACEWorks's structured, repeatable methodology behind every engagement: Baseline, Risk Mitigation, AI Security, Cloud, Enhancement.",
  },
};

export default function MethodologyPage() {
  return (
    <div className="mx-auto max-w-content px-4 py-16 sm:py-20">
      <h1 className="text-4xl font-bold text-brand-ink">The BRACE Methodology</h1>
      <p className="mt-6 max-w-4xl text-brand-muted">
        Every BRACEWorks engagement follows BRACE, a structured, repeatable path from
        &ldquo;where is this organization exposed&rdquo; to &ldquo;how does it stay ahead
        of that exposure.&rdquo; BRACE is BRACEWorks&apos;s own methodology, built
        specifically around the three service pillars above.
      </p>

      <div className="mt-12 space-y-6">
        {braceSteps.map((step) => (
          <MethodologyStep key={step.letter} {...step} />
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-brand-ink">AI Adoption Security</h2>
        <p className="mt-4 max-w-4xl text-brand-muted">
          The AI Security stage of BRACE isn&apos;t about auditing model behavior or
          training data. It&apos;s about applying the same infrastructure discipline we
          use everywhere else to the systems that run and expose AI: hardened cloud
          architecture, network and application security controls that inspect every
          connection, isolated inference workloads, and a central point, an LLM
          Gateway, for governing traffic between your applications and the models they
          call. That&apos;s where we&apos;re positioned to help, regardless of which
          model or provider your organization uses.
        </p>
      </section>

      <p className="mt-12 max-w-4xl border-t border-brand-border pt-8 text-lg font-medium text-brand-ink">
        BRACE isn&apos;t a checklist. It&apos;s how we make sure every assessment
        produces something a client&apos;s team can actually run with, long after
        we&apos;re gone.
      </p>
    </div>
  );
}
