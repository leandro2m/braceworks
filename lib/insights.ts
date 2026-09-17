export type PublishedArticle = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

export const publishedArticles: PublishedArticle[] = [
  {
    slug: "five-principles-for-securing-cloud-and-ai-environments",
    title: "Five Principles for Securing Cloud and AI Environments",
    description:
      "A practical look at identity, network visibility, API security, data protection, and DevSecOps, and how the BRACE methodology ties them together.",
    date: "2026-09-13",
  },
  {
    slug: "securing-agentic-ai-adoption",
    title: "Securing Agentic AI Adoption: What to Guard Against",
    description:
      "Prompt injection, MCP tool poisoning, memory poisoning, and supply chain risk are documented, growing threats to enterprise AI agents. Here's what each one means and how the BRACE methodology addresses them.",
    date: "2026-09-13",
  },
  {
    slug: "defense-in-depth-for-llm-applications",
    title: "Defense in Depth for LLM Applications",
    description:
      "How an LLM Gateway fits alongside the firewalls, WAFs, and identity controls companies already have, and why prompt injection, MCP tool poisoning, and supply chain risk call for inspection at the model layer too.",
    date: "2026-09-13",
  },
  {
    slug: "defense-in-depth-for-cloud-infrastructure",
    title: "Defense in Depth for Cloud Infrastructure",
    description:
      "How a Cloud Security Posture Assessment turns into a prioritized, risk-ranked roadmap, why software supply chain risk deserves special attention, and how Zero Trust, WAAP, and continuous monitoring close the loop.",
    date: "2026-09-17",
  },
];

export const plannedTopics: string[] = [
  "Reading a cloud security assessment: what “prioritized remediation” should actually mean",
  "Where your organization sits on the GenAI adoption spectrum, and why it matters",
  "Building an incident response playbook your team will actually use",
  "Cloud security baselines: what “well-architected” means in practice",
];
