import Link from "next/link";
import type { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "inverted";
  className?: string;
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const variants = {
    primary: "bg-brand-navy text-white hover:bg-brand-slate",
    secondary:
      "border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white",
    inverted: "border border-white text-white hover:bg-white hover:text-brand-navy",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
