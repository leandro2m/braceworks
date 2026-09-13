import type { LucideIcon } from "lucide-react";
import { Cloud, Bot, ClipboardList } from "lucide-react";

export type ServiceSummary = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export const serviceSummaries: ServiceSummary[] = [
  {
    title: "Cloud Security Posture Assessment & Enhancement",
    description:
      "Identify misconfigurations, excess privilege, and compliance gaps across AWS, Azure, Google Cloud, and Oracle Cloud Infrastructure, and turn findings into a prioritized, actionable remediation roadmap.",
    href: "/services/cloud-security-posture-assessment",
    icon: Cloud,
  },
  {
    title: "Generative AI Security Consulting",
    description:
      "Assess where your organization sits on the GenAI adoption curve, from employee use of public AI tools to custom models and autonomous agents, and apply the right controls for that stage.",
    href: "/services/generative-ai-security",
    icon: Bot,
  },
  {
    title: "Cloud Security Governance & Playbook Development",
    description:
      "Build the durable governance layer that keeps improvements from eroding: security baselines, incident response playbooks, and compliance-monitoring practices your team can run without us.",
    href: "/services/cloud-security-governance",
    icon: ClipboardList,
  },
];
