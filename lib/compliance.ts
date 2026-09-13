export const complianceFrameworks: string[] = [
  "NIST Cybersecurity Framework 2.0",
  "ISO/IEC 27001 and ISO/IEC 27002",
  "CIS Critical Security Controls v8.1",
  "SOC 2",
  "PCI DSS",
  "NERC Critical Infrastructure Protection (CIP) standards",
  "Cybersecurity Maturity Model Certification (CMMC)",
  "NYDFS 23 NYCRR 500",
  "GLBA Safeguards Rule",
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
