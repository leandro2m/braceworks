export type BraceStep = {
  letter: string;
  title: string;
  description: string;
  tagline: string;
  color: string;
};

export const braceSteps: BraceStep[] = [
  {
    letter: "B",
    title: "Baseline",
    description: "Establish the cloud security baseline.",
    tagline: "Know where you stand.",
    color: "#131F44",
  },
  {
    letter: "R",
    title: "Risk Mitigation",
    description: "Reduce risks and minimize the attack surface.",
    tagline: "Know what matters.",
    color: "#2F6FE9",
  },
  {
    letter: "A",
    title: "AI Security",
    description: "Secure the adoption of AI tools, applications and autonomous agents.",
    tagline: "Adopt AI securely.",
    color: "#6941C6",
  },
  {
    letter: "C",
    title: "Cloud",
    description: "Protect private, public, hybrid and multi-cloud environments.",
    tagline: "Secure everywhere.",
    color: "#19B0D6",
  },
  {
    letter: "E",
    title: "Enhancement",
    description:
      "Build remediation roadmaps, governance frameworks and operational playbooks.",
    tagline: "Continuously improve.",
    color: "#158A55",
  },
];
