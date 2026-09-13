import GridPattern from "./GridPattern";
import CTAButton from "./CTAButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-brand-border bg-white">
      <GridPattern className="pointer-events-none absolute -right-16 -top-16 h-[420px] w-[420px] text-brand-navy/[0.06] sm:h-[520px] sm:w-[520px]" />
      <div className="relative mx-auto max-w-content px-4 py-20 sm:py-28">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold leading-tight text-brand-ink sm:text-5xl">
            Adopt cloud and AI with confidence.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-brand-muted">
            BRACEWorks helps organizations adopt cloud and AI securely, with practical
            guidance on strategy, security, and governance.
          </p>
          <p className="mt-4 max-w-3xl text-lg text-brand-muted">
            As an independent consultancy, we help your organization build a
            defense-in-depth strategy for cloud and AI, one that fits your business
            goals and risk tolerance rather than a vendor&rsquo;s roadmap.
          </p>
          <p className="mt-6 max-w-3xl text-lg font-semibold text-brand-ink">
            Let&rsquo;s talk about your next step.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <CTAButton href="/methodology" variant="primary">
              Explore our methodology
            </CTAButton>
            <CTAButton href="/contact" variant="secondary">
              Get in touch
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
