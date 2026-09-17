import type { Metadata } from "next";
import Link from "next/link";
import { publishedArticles } from "@/lib/insights";

const article = publishedArticles[3];

export const metadata: Metadata = {
  title: `${article.title} | BRACEWorks - Cloud & AI Security`,
  description: article.description,
  openGraph: {
    title: `${article.title} | BRACEWorks - Cloud & AI Security`,
    description: article.description,
    url: `https://braceworks.net/insights/${article.slug}`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `${article.title} | BRACEWorks - Cloud & AI Security`,
    description: article.description,
  },
};

const linkClass = "font-semibold text-brand-navy hover:text-brand-slate";

export default function DefenseInDepthForCloudInfrastructureArticlePage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
      <p className="text-sm text-brand-muted">BRACEWorks - Cloud &amp; AI Security</p>
      <h1 className="mt-2 text-4xl font-bold text-brand-ink">{article.title}</h1>

      <p className="mt-8 text-brand-muted">
        Our engagements start with an assessment that establishes a baseline of an
        organization&apos;s current cloud services and infrastructure architecture.
        Based on the underlying services a customer&apos;s applications actually use,
        we identify security gaps and translate them into a clear, prioritized
        implementation plan.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-brand-ink">
        Establishing the baseline
      </h2>
      <p className="mt-4 text-brand-muted">
        The engagement begins with a Cloud Security Posture Assessment that
        inventories the services in use and examines security controls across
        containers, Kubernetes, virtual machines, networks, applications and APIs,
        data and identity protection, secure development practices, and vulnerability
        management.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-brand-ink">Prioritizing by risk</h2>
      <p className="mt-4 text-brand-muted">
        Based on the risks identified, we present an improvement roadmap with the
        right priorities, higher risk first. The recommendations include practices and
        solutions tailored to the customer&apos;s environment, with the objective of
        reducing its attack surface and adopting solutions for quick identification
        when something goes wrong.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-brand-ink">
        What defense in depth means here
      </h2>
      <p className="mt-4 text-brand-muted">
        The aim is to establish a defense-in-depth architecture, applying multiple
        layers of protection across the environment, consistent with NIST&apos;s
        definition of defense in depth. The recommendations address coding errors,
        vulnerable components, malicious code, and software supply chain attacks.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-brand-ink">
        Why software supply chain security deserves special attention
      </h2>
      <p className="mt-4 text-brand-muted">
        Most modern software is not built from scratch. The Linux Foundation&apos;s{" "}
        <a
          href="https://www.linuxfoundation.org/blog/blog/a-summary-of-census-ii-open-source-software-application-libraries-the-world-depends-on"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Census II research
        </a>{" "}
        estimates that open-source software accounts for 70% to 90% of a modern
        application stack. In practice, this means an organization&apos;s security
        also depends on external components and libraries it did not develop and may
        have limited control over.
      </p>
      <p className="mt-4 text-brand-muted">
        Without a disciplined process to identify these components and check them
        against known vulnerabilities before adoption and throughout their use, an
        organization can unknowingly build or continue running applications on
        software that attackers already know how to exploit. Secure development
        practices and vulnerability management help identify this exposure and guide
        remediation. Protecting against malicious components or compromised software
        updates also requires checking where software comes from and how it is built
        and delivered.
      </p>
      <p className="mt-4 text-brand-muted">
        The 2023 compromise of the MOVEit file transfer platform shows what this
        exposure looks like in practice. The Cl0p ransomware gang exploited a SQL
        injection vulnerability in MOVEit Transfer to deploy a web shell and steal data
        directly from customer databases, affecting organizations that had no direct
        relationship with the attacker and no way to know the vulnerability existed
        until it was disclosed. See the{" "}
        <a
          href="https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-158a"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          joint CISA and FBI advisory
        </a>{" "}
        for the full technical breakdown. Software supply chain attacks like this one
        continue to make headlines, with{" "}
        <a
          href="https://www.cm-alliance.com/cybersecurity-blog/5-of-the-biggest-supply-chain-attacks-of-2026-so-far"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          new incidents documented through 2026
        </a>
        .
      </p>

      <h2 className="mt-10 text-2xl font-bold text-brand-ink">
        Remediation: a Zero Trust architecture
      </h2>
      <p className="mt-4 text-brand-muted">
        The remediation phase proposes an architecture aligned with NIST&apos;s Zero
        Trust principles, using SP 800-207 and SP 800-207A for cloud-native
        applications across multicloud environments. The proposed architecture
        includes access controls based on user and workload identity, least-privilege
        access, increased traffic visibility, and encryption to protect connections
        and data in transit.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-brand-ink">
        Application and API security
      </h2>
      <p className="mt-4 text-brand-muted">
        This phase also includes a review of application and API security practices.
        We recommend controls tailored to the customer&apos;s application, such as
        virtual patching and Web Application and API Protection (WAAP), to reduce
        exposure to vulnerabilities that can be exploited through web and API traffic
        while permanent fixes are developed and deployed. These controls provide an
        additional layer of protection, but their coverage must be evaluated for each
        vulnerability.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-brand-ink">
        Continuous monitoring
      </h2>
      <p className="mt-4 text-brand-muted">
        Finally, the proposal includes continuous infrastructure monitoring, using
        tools like Cloud Security Posture Management (CSPM), vulnerability scanning
        and patch management, Software Composition Analysis (SCA) and dependency
        monitoring, and SIEM (Security Information and Event Management) to detect
        suspicious activity, including possible exploitation of vulnerabilities that
        have not yet been remediated. It also defines containment mechanisms to limit
        the impact of an incident.
      </p>
      <p className="mt-4 text-brand-muted">
        This is the same progression we apply under the BRACE methodology&apos;s
        Baseline, Risk, and Cloud stages. See our{" "}
        <Link href="/services/cloud-security-posture-assessment" className={linkClass}>
          Cloud Security Posture Assessment &amp; Enhancement
        </Link>{" "}
        service for how this translates into an engagement.
      </p>
    </article>
  );
}
