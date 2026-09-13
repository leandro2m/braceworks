import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cloud Security Governance & Playbooks | BRACEWorks - Cloud & AI Security",
  description:
    "BRACEWorks builds the durable, institutional layer your team needs to sustain a strong security posture after any single engagement ends: baselines, playbooks, and reporting.",
  openGraph: {
    title: "Cloud Security Governance & Playbooks | BRACEWorks - Cloud & AI Security",
    description:
      "BRACEWorks builds the durable, institutional layer your team needs to sustain a strong security posture after any single engagement ends: baselines, playbooks, and reporting.",
    url: "https://braceworks.net/services/cloud-security-governance",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Security Governance & Playbooks | BRACEWorks - Cloud & AI Security",
    description:
      "BRACEWorks builds the durable, institutional layer your team needs to sustain a strong security posture after any single engagement ends: baselines, playbooks, and reporting.",
  },
};

export default function CloudSecurityGovernancePage() {
  return (
    <div className="mx-auto max-w-content px-4 py-16 sm:py-20">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-brand-navy/10 text-brand-navy">
        <ClipboardList aria-hidden="true" className="h-7 w-7" strokeWidth={1.75} />
      </div>
      <h1 className="max-w-3xl text-4xl font-bold text-brand-ink">
        Cloud Security Governance &amp; Playbook Development
      </h1>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-brand-ink">Overview</h2>
        <p className="mt-4 max-w-3xl text-brand-muted">
          An assessment identifies risk. Governance is what keeps that risk from coming
          back. This service builds the durable, institutional layer your team needs to
          sustain a strong security posture after any single engagement ends.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-brand-ink">What we build with you</h2>
        <ul className="mt-4 max-w-3xl list-disc space-y-3 pl-5 text-brand-muted">
          <li>
            Cloud security baselines aligned to your cloud provider&apos;s
            well-architected framework
          </li>
          <li>Security architecture and landing-zone design standards</li>
          <li>Identity, logging, and configuration standards</li>
          <li>
            Incident response playbooks: preparation, detection, analysis, containment,
            remediation, and recovery
          </li>
          <li>Risk registers and executive risk reporting</li>
          <li>Compliance-monitoring methodologies and exception-management processes</li>
          <li>
            AI security governance checklists (see{" "}
            <Link
              href="/services/generative-ai-security"
              className="font-semibold text-brand-navy hover:text-brand-slate"
            >
              Generative AI Security Consulting
            </Link>
            )
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-brand-ink">
          Frameworks we help you align with
        </h2>
        <p className="mt-4 max-w-3xl text-brand-muted">
          Extremely regulated industries, including financial services, healthcare, and
          critical infrastructure, are increasingly held to named compliance frameworks,
          not just internal policy. Our governance work aligns
          your cloud security posture and control environment with the frameworks your
          organization is actually held to, including:
        </p>
        <ul className="mt-4 max-w-3xl list-disc space-y-3 pl-5 text-brand-muted">
          <li>
            <strong className="text-brand-ink">SOC 2:</strong> the Trust Services
            Criteria most commonly required by enterprise customers, covering security,
            availability, and confidentiality controls.
          </li>
          <li>
            <strong className="text-brand-ink">ISO/IEC 27001:</strong> the
            internationally recognized standard for an information security management
            system.
          </li>
          <li>
            <strong className="text-brand-ink">ISO/IEC 42001:</strong> the emerging
            standard for AI management systems, directly relevant to organizations
            deploying generative AI and autonomous agents (see{" "}
            <Link
              href="/services/generative-ai-security"
              className="font-semibold text-brand-navy hover:text-brand-slate"
            >
              Generative AI Security Consulting
            </Link>
            ).
          </li>
          <li>
            <strong className="text-brand-ink">
              NIST Cybersecurity Framework (CSF) 2.0 and NIST SP 800-53:
            </strong>{" "}
            the control baselines most U.S. regulators and enterprise customers
            reference.
          </li>
        </ul>
        <p className="mt-4 max-w-3xl text-brand-muted">
          BRACEWorks is not an accredited auditor, CPA firm, or certification body.
          This work prepares your environment for a formal audit or certification. The
          assessment or attestation itself must be performed by an appropriately
          accredited third party.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-brand-ink">Why this matters</h2>
        <p className="mt-4 max-w-3xl text-brand-muted">
          A cloud security assessment may identify risk; a governance program prevents
          the same weaknesses from recurring. An incident response playbook reduces
          confusion during a real event, shortens response time, and clarifies who owns
          what. This is the pillar that converts a one-time engagement into lasting
          internal capability.
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
