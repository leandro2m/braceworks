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
];

export const plannedTopics: string[] = [
  "Reading a cloud security assessment: what “prioritized remediation” should actually mean",
  "Where your organization sits on the GenAI adoption spectrum, and why it matters",
  "Building an incident response playbook your team will actually use",
  "Cloud security baselines: what “well-architected” means in practice",
];
