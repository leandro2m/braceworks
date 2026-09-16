import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CTAButton from "@/components/CTAButton";
import BraceDiagram from "@/components/BraceDiagram";
import ComplianceFrameworks from "@/components/ComplianceFrameworks";
import { serviceSummaries } from "@/lib/services";
import { complianceFrameworks, frameworkSteps } from "@/lib/compliance";

export const metadata: Metadata = {
  title: "BRACEWorks - Cloud & AI Security | Vendor-Agnostic Cloud & AI Security Advisory",
  description:
    "BRACEWorks helps organizations adopt cloud and AI securely, with independent, vendor-agnostic guidance on strategy, security, and governance.",
  openGraph: {
    title: "BRACEWorks - Cloud & AI Security | Vendor-Agnostic Cloud & AI Security Advisory",
    description:
      "BRACEWorks helps organizations adopt cloud and AI securely, with independent, vendor-agnostic guidance on strategy, security, and governance.",
    url: "https://braceworks.net",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BRACEWorks - Cloud & AI Security | Vendor-Agnostic Cloud & AI Security Advisory",
    description:
      "BRACEWorks helps organizations adopt cloud and AI securely, with independent, vendor-agnostic guidance on strategy, security, and governance.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-content px-4 py-20">
        <h2 className="text-3xl font-bold text-brand-ink">Why BRACEWorks</h2>
        <p className="mt-6 max-w-4xl text-brand-muted">
          Most cybersecurity engagements are shaped by the tools a vendor wants to sell.
          BRACEWorks starts from the opposite direction. We look at your architecture,
          your risk profile, and your existing investments, then recommend the controls
          and technologies that actually fit, whether that means native cloud services, a
          specific third-party platform, or no new tooling at all.
        </p>

        <p className="mt-8 font-semibold text-brand-ink">Three things define how we work:</p>
        <ul className="mt-4 grid gap-6 sm:grid-cols-3">
          <li className="rounded-lg border border-brand-border bg-white p-6">
            <p className="text-brand-muted">
              <span className="font-semibold text-brand-ink">Vendor-agnostic.</span> We
              are not resellers. Our recommendations are shaped by your environment, not
              by a partner incentive.
            </p>
          </li>
          <li className="rounded-lg border border-brand-border bg-white p-6">
            <p className="text-brand-muted">
              <span className="font-semibold text-brand-ink">
                Vendor-agnostic doesn&apos;t mean generic.
              </span>{" "}
              Every engagement follows the BRACE methodology, a structured, repeatable
              way of moving from exposure to a governed, defensible security posture.
            </p>
          </li>
          <li className="rounded-lg border border-brand-border bg-white p-6">
            <p className="text-brand-muted">
              <span className="font-semibold text-brand-ink">
                Built for how organizations actually adopt technology.
              </span>{" "}
              Cloud environments sprawl. GenAI adoption moves faster than governance. We
              meet organizations wherever they are on that curve.
            </p>
          </li>
        </ul>
      </section>

      <section className="mx-auto max-w-content px-4 py-20">
        <BraceDiagram />
        <div className="mt-14 flex justify-center">
          <Link
            href="/methodology"
            className="inline-flex items-center gap-1.5 font-semibold text-brand-navy hover:text-brand-slate"
          >
            See how BRACE works
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="border-y border-brand-border bg-white">
        <div className="mx-auto max-w-content px-4 py-20">
          <h2 className="text-3xl font-bold text-brand-ink">What We Do</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {serviceSummaries.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section id="compliance" className="border-b border-brand-border bg-white">
        <div className="mx-auto max-w-content px-4 py-20">
          <h2 className="text-3xl font-bold text-brand-ink">
            Compliance for Critical Infrastructure &amp; Financial Services
          </h2>
          <p className="mt-6 max-w-4xl text-brand-muted">
            Our methodology is informed by leading cybersecurity and compliance
            frameworks relevant to critical infrastructure and financial services in the
            United States, including:
          </p>
          <ComplianceFrameworks frameworks={complianceFrameworks} />

          <h3 className="mt-16 text-2xl font-bold text-brand-ink">
            How to Choose and Use the Right Frameworks
          </h3>
          <ol className="mt-6 max-w-4xl list-decimal space-y-5 pl-5 text-brand-muted">
            {frameworkSteps.map((step) => (
              <li key={step.title}>
                <span className="font-semibold text-brand-ink">{step.title}.</span>{" "}
                {step.description}
              </li>
            ))}
          </ol>

          <h3 className="mt-16 text-2xl font-bold text-brand-ink">
            The Real Goal Is Defensible, Continuous Risk Management
          </h3>
          <p className="mt-6 max-w-4xl text-brand-muted">
            Frameworks, certifications, and reports provide valuable structure and
            evidence. But each one has a defined scope and a point-in-time or
            period-of-time boundary, while your assets, cloud services, vulnerabilities,
            suppliers, and threats keep changing. The real challenge is connecting
            written requirements to the systems and relationships that actually create
            exposure. A defensible program shows what applies, what&apos;s in scope,
            which controls address the risk, whether those controls work, and how you
            respond when conditions change.
          </p>

          <h3 className="mt-16 text-2xl font-bold text-brand-ink">How BRACEWorks Helps</h3>
          <p className="mt-6 max-w-4xl text-brand-muted">
            BRACEWorks adds an outside-in view of cyber risk to the internal evidence you
            already collect. That combined picture helps your team see what&apos;s
            changed between formal assessments and focus follow-up work where it
            matters. BRACEWorks does not certify compliance or replace legal advice,
            audits, regulator-required assessments, or internal control testing.
          </p>
        </div>
      </section>

      <section className="bg-brand-navy">
        <div className="mx-auto max-w-content px-4 py-20 text-center">
          <h2 className="text-3xl font-bold text-white">
            An independent practice, built to last beyond any single engagement.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-white/85">
            BRACEWorks is an independent, U.S.-based cybersecurity advisory practice.
            We&apos;re continuing to build our methodology to help organizations meet
            security requirements, reduce their attack surface, and respond immediately
            when something happens, through well-defined playbooks.
          </p>
          <CTAButton href="/contact" variant="inverted" className="mt-8">
            Get in touch
          </CTAButton>
        </div>
      </section>
    </>
  );
}
