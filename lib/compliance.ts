export type ComplianceFramework = {
  name: string;
  description: string;
};

export const complianceFrameworks: ComplianceFramework[] = [
  {
    name: "NIST Cybersecurity Framework 2.0",
    description:
      "A voluntary framework from the U.S. National Institute of Standards and Technology, organized into six functions: Govern, Identify, Protect, Detect, Respond, and Recover. Widely used as a common language for assessing and communicating cyber risk across industries.",
  },
  {
    name: "ISO/IEC 27001 and ISO/IEC 27002",
    description:
      "ISO/IEC 27001 is the international standard for an information security management system, the one organizations can be certified against. ISO/IEC 27002 provides the detailed implementation guidance for the controls it references.",
  },
  {
    name: "CIS Critical Security Controls v8.1",
    description:
      "A prioritized set of safeguards from the Center for Internet Security, grouped into implementation groups so organizations can adopt them based on size and risk profile. Often used as a practical complement to higher-level frameworks like NIST CSF.",
  },
  {
    name: "SOC 2",
    description:
      "An attestation report based on the AICPA's Trust Services Criteria (security, availability, processing integrity, confidentiality, and privacy). Commonly required by enterprise customers of SaaS and technology vendors as proof of operational security controls.",
  },
  {
    name: "PCI DSS",
    description:
      "The Payment Card Industry Data Security Standard: technical and operational requirements for any organization that stores, processes, or transmits cardholder data, maintained by the PCI Security Standards Council.",
  },
  {
    name: "NERC Critical Infrastructure Protection (CIP) standards",
    description:
      "Mandatory, enforceable standards from the North American Electric Reliability Corporation governing the cybersecurity of the bulk electric system across the United States and Canada.",
  },
  {
    name: "Cybersecurity Maturity Model Certification (CMMC)",
    description:
      "A U.S. Department of Defense certification program verifying that contractors and subcontractors in the Defense Industrial Base meet specific cybersecurity maturity levels before handling controlled unclassified information.",
  },
  {
    name: "NYDFS 23 NYCRR 500",
    description:
      "A cybersecurity regulation from the New York State Department of Financial Services requiring banks, insurers, and other New York-licensed financial services companies to maintain a risk-based cybersecurity program, including incident reporting and executive certification.",
  },
  {
    name: "GLBA Safeguards Rule",
    description:
      "A rule under the Gramm-Leach-Bliley Act, enforced by the FTC, requiring financial institutions to develop, implement, and maintain a comprehensive information security program to protect customer financial data.",
  },
];

export type FrameworkStep = {
  title: string;
  description: string;
};

export const frameworkSteps: FrameworkStep[] = [
  {
    title: "Start with scope",
    description:
      "We start by identifying the laws, sector rules, contracts, customer commitments, data types, and locations that apply to your organization. That's what determines which requirements are mandatory and which frameworks can help you organize the work.",
  },
  {
    title: "Choose a core structure",
    description:
      "NIST CSF 2.0 or an ISO/IEC 27001 information security management system can provide the backbone for governance and risk management. A more detailed control set, such as the CIS Controls or NIST SP 800-53, guides implementation.",
  },
  {
    title: "Map obligations to shared controls",
    description:
      "One well-designed control can support several requirements at once. We build a central mapping that shows where evidence can be reused and where a regulation requires something unique.",
  },
  {
    title: "Test and monitor",
    description:
      "Policies and diagrams describe intended controls. Technical testing, internal review, independent assessment, and ongoing monitoring show whether those controls actually work, and whether your environment has changed.",
  },
  {
    title: "Report what matters",
    description:
      "Leadership needs a clear view of material exposure, business impact, ownership, deadlines, and progress. A long compliance checklist is far less useful when it doesn't show where action is needed.",
  },
];
