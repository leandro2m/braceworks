import type { BraceStep } from "@/lib/methodology";

export default function MethodologyStep({ letter, title, description, tagline, color }: BraceStep) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-brand-border bg-white p-6 sm:flex-row sm:p-8">
      <span
        className="flex h-12 w-12 flex-none items-center justify-center rounded-md text-xl font-bold text-white"
        style={{ backgroundColor: color }}
      >
        {letter}
      </span>
      <div>
        <h3 className="text-lg font-semibold text-brand-ink">{title}</h3>
        <p className="mt-1 text-brand-muted">{description}</p>
        <p className="mt-2 text-sm font-bold" style={{ color }}>
          {tagline}
        </p>
      </div>
    </div>
  );
}
