export type NavLink = {
  label: string;
  href: string;
};

export const serviceLinks: NavLink[] = [
  {
    label: "Cloud Security Posture Assessment & Enhancement",
    href: "/services/cloud-security-posture-assessment",
  },
  {
    label: "Generative AI Security Consulting",
    href: "/services/generative-ai-security",
  },
  {
    label: "Cloud Security Governance & Playbook Development",
    href: "/services/cloud-security-governance",
  },
];

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Methodology", href: "/methodology" },
  { label: "Insights", href: "/insights" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];
