import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServiceSummary } from "@/lib/services";

export default function ServiceCard({ title, description, href, icon: Icon }: ServiceSummary) {
  return (
    <div className="flex flex-col rounded-lg border border-brand-border bg-white p-6 sm:p-8">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-brand-navy/10 text-brand-navy">
        <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.75} />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-brand-ink">{title}</h3>
      <p className="mb-5 flex-1 text-brand-muted">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy hover:text-brand-slate"
      >
        Learn more
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </Link>
    </div>
  );
}
