import { ChevronRight, ChevronDown } from "lucide-react";
import { braceSteps } from "@/lib/methodology";

export default function BraceDiagram() {
  return (
    <div>
      <div className="flex items-center justify-center gap-4 sm:gap-6">
        <span aria-hidden="true" className="h-px flex-1 bg-brand-border" />
        <h3 className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.3em] text-brand-muted">
          The BRACE Methodology
        </h3>
        <span aria-hidden="true" className="h-px flex-1 bg-brand-border" />
      </div>

      <div className="mt-12 flex flex-col items-stretch gap-8 sm:flex-row sm:items-start sm:justify-center sm:gap-2">
        {braceSteps.map((step, index) => (
          <div key={step.letter} className="flex flex-col items-center sm:flex-row">
            <div className="flex w-full max-w-[200px] flex-col items-center px-2 text-center">
              <span
                className="text-6xl font-extrabold leading-none sm:text-7xl"
                style={{ color: step.color }}
              >
                {step.letter}
              </span>
              <span
                className="mt-3 text-sm font-bold uppercase tracking-wide"
                style={{ color: step.color }}
              >
                {step.title}
              </span>
              <span
                aria-hidden="true"
                className="mt-2 h-0.5 w-8"
                style={{ backgroundColor: step.color }}
              />
              <p className="mt-4 text-sm text-brand-muted">{step.description}</p>
              <p className="mt-3 text-sm font-bold" style={{ color: step.color }}>
                {step.tagline}
              </p>
            </div>

            {index < braceSteps.length - 1 && (
              <>
                <ChevronDown
                  aria-hidden="true"
                  className="my-2 h-5 w-5 flex-none text-brand-border sm:hidden"
                />
                <ChevronRight
                  aria-hidden="true"
                  className="mt-8 hidden h-5 w-5 flex-none text-brand-border sm:block"
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
