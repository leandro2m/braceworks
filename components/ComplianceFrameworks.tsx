"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { ComplianceFramework } from "@/lib/compliance";

export default function ComplianceFrameworks({
  frameworks,
}: {
  frameworks: ComplianceFramework[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ul className="mt-6 grid max-w-4xl gap-3 sm:grid-cols-2">
      {frameworks.map((framework, index) => {
        const isOpen = openIndex === index;
        return (
          <li
            key={framework.name}
            className="rounded-lg border border-brand-border sm:col-span-1"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-3 px-5 py-3 text-left text-sm font-medium text-brand-ink"
            >
              {framework.name}
              <ChevronDown
                aria-hidden="true"
                className={`h-4 w-4 flex-none text-brand-muted transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <p className="px-5 pb-4 text-sm text-brand-muted">
                {framework.description}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
}
