import type { Metadata } from "next";
import Link from "next/link";
import { Cloud, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cloud Security Posture Assessment | BRACEWorks - Cloud & AI Security",
  description:
    "BRACEWorks identifies misconfigurations, excess privilege, and compliance gaps across AWS, Azure, Google Cloud, and Oracle Cloud Infrastructure, and turns findings into a prioritized, actionable remediation roadmap.",
  openGraph: {
    title: "Cloud Security Posture Assessment | BRACEWorks - Cloud & AI Security",
    description:
      "BRACEWorks identifies misconfigurations, excess privilege, and compliance gaps across AWS, Azure, Google Cloud, and Oracle Cloud Infrastructure, and turns findings into a prioritized, actionable remediation roadmap.",
    url: "https://braceworks.net/services/cloud-security-posture-assessment",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Security Posture Assessment | BRACEWorks - Cloud & AI Security",
    description:
      "BRACEWorks identifies misconfigurations, excess privilege, and compliance gaps across AWS, Azure, Google Cloud, and Oracle Cloud Infrastructure, and turns findings into a prioritized, actionable remediation roadmap.",
  },
};

export default function CloudSecurityPostureAssessmentPage() {
  return (
    <div className="mx-auto max-w-content px-4 py-16 sm:py-20">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-brand-navy/10 text-brand-navy">
        <Cloud aria-hidden="true" className="h-7 w-7" strokeWidth={1.75} />
      </div>
      <h1 className="max-w-4xl text-4xl font-bold text-brand-ink">
        Cloud Security Posture Assessment &amp; Enhancement
      </h1>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-brand-ink">Overview</h2>
        <p className="mt-4 max-w-4xl text-brand-muted">
          Cloud environments become complex fast. Multiple accounts, multiple providers,
          and configuration drift outpace any single team&apos;s visibility. Our
          Cloud Security Posture Assessment identifies where that complexity has turned
          into real exposure, and builds a roadmap your team can actually execute.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-brand-ink">What we assess</h2>
        <ul className="mt-4 max-w-4xl list-disc space-y-3 pl-5 text-brand-muted">
          <li>
            Multi-cloud configuration and identity posture across AWS, Microsoft Azure,
            Google Cloud Platform, and Oracle Cloud Infrastructure
          </li>
          <li>Internet-facing exposure and attack surface</li>
          <li>
            Identity and access management, privileged access, and excess-permission risk
          </li>
          <li>Network segmentation and lateral-movement paths</li>
          <li>Data protection and data-leakage exposure</li>
          <li>
            Compliance gaps against relevant frameworks and internal policy (e.g., SOC
            2, ISO/IEC 27001, NIST CSF 2.0), see{" "}
            <Link
              href="/services/cloud-security-governance"
              className="font-semibold text-brand-navy hover:text-brand-slate"
            >
              Cloud Security Governance &amp; Playbook Development
            </Link>{" "}
            for how we help you align with them
          </li>
          <li>API security and application-layer risk within cloud-hosted systems</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-brand-ink">How we work</h2>
        <p className="mt-4 max-w-4xl text-brand-muted">
          Assessments draw on native cloud security services (AWS GuardDuty, AWS Config,
          AWS Security Hub, Microsoft Defender for Cloud, Google Security Command Center)
          and, where it genuinely fits the client&apos;s environment, third-party
          platforms selected based on your infrastructure and constraints, not a partner
          relationship.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-brand-ink">
          Extending Cloud Posture to AI Workloads
        </h2>
        <p className="mt-4 max-w-4xl text-brand-muted">
          As organizations adopt generative AI, the security challenge is rarely the
          model itself. It&apos;s the cloud infrastructure, network paths, and APIs
          around it. We apply the same cloud and network security discipline used for
          any critical workload to the infrastructure that runs and exposes AI
          services:
        </p>
        <ul className="mt-4 max-w-4xl list-disc space-y-3 pl-5 text-brand-muted">
          <li>
            <strong className="text-brand-ink">Secure cloud architecture:</strong>{" "}
            applying your cloud provider&apos;s well-architected best practices to the
            accounts, networks, and services that run AI workloads, and minimizing the
            attack surface exposed along the way.
          </li>
          <li>
            <strong className="text-brand-ink">Inspected connections:</strong> routing
            traffic to and from AI services through network and application security
            controls, so every connection is inspected rather than trusted by default.
          </li>
          <li>
            <strong className="text-brand-ink">Inference isolation:</strong> segmenting
            AI inference services from the rest of the environment, the same
            blast-radius reduction applied to any other critical workload.
          </li>
          <li>
            <strong className="text-brand-ink">AI-facing APIs:</strong> WAAP/WAF
            protection, service-to-service authentication, rate limiting, and
            input/output validation on the endpoints that expose a model to users or
            applications.
          </li>
          <li>
            <strong className="text-brand-ink">Continuous monitoring:</strong>{" "}
            extending posture monitoring and immutable logging to AI resources, so
            drift and anomalies surface the same way they would for any other cloud
            asset.
          </li>
          <li>
            <strong className="text-brand-ink">LLM Gateway adoption:</strong>{" "}
            consulting on deploying an LLM Gateway, including open-source options such
            as LiteLLM, as the central point for inspecting and governing traffic
            between your applications and the models they call.
          </li>
        </ul>
        <p className="mt-4 max-w-4xl text-brand-muted">
          For the agent-specific controls, prompt and response inspection, agent
          boundaries, that defend against prompt injection and MCP tool poisoning, see{" "}
          <Link
            href="/services/generative-ai-security"
            className="font-semibold text-brand-navy hover:text-brand-slate"
          >
            Generative AI Security Consulting
          </Link>
          .
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-brand-ink">What you get</h2>
        <p className="mt-4 max-w-4xl text-brand-muted">
          A prioritized, actionable remediation roadmap, not a generic scan report,
          tailored to your existing tools, budget, risk profile, and operational maturity.
          Findings are organized by the BRACE methodology&apos;s Baseline and Risk stages,
          so the roadmap connects directly to a governance plan your team can sustain (see{" "}
          <Link href="/services/cloud-security-governance" className="font-semibold text-brand-navy hover:text-brand-slate">
            Cloud Security Governance &amp; Playbook Development
          </Link>
          ).
        </p>
      </section>

      <div className="mt-14 border-t border-brand-border pt-8">
        <Link
          href="/methodology"
          className="inline-flex items-center gap-1.5 font-semibold text-brand-navy hover:text-brand-slate"
        >
          See how this fits into the BRACE methodology
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
