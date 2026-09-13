import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About BRACEWorks - Cloud & AI Security",
  description:
    "BRACEWorks is an independent cybersecurity advisory practice built to close the gap between fast-moving cloud and AI adoption and real security governance.",
  openGraph: {
    title: "About BRACEWorks - Cloud & AI Security",
    description:
      "BRACEWorks is an independent cybersecurity advisory practice built to close the gap between fast-moving cloud and AI adoption and real security governance.",
    url: "https://braceworks.net/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About BRACEWorks - Cloud & AI Security",
    description:
      "BRACEWorks is an independent cybersecurity advisory practice built to close the gap between fast-moving cloud and AI adoption and real security governance.",
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-content px-4 py-16 sm:py-20">
      <h1 className="text-4xl font-bold text-brand-ink">About</h1>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-brand-ink">Our Story</h2>
        <p className="mt-4 max-w-4xl text-brand-muted">
          BRACEWorks was founded to close a specific gap: organizations moving fast into
          cloud infrastructure and generative AI often outrun their own security
          governance. Much of the advice available to them is shaped by whatever a
          vendor is selling that quarter.
        </p>
        <p className="mt-4 max-w-4xl text-brand-muted">
          BRACEWorks is built to be different from the outset. It&apos;s an independent
          practice with no reseller incentives, no product to push, and a single
          objective: helping clients understand and reduce real exposure in cloud and AI
          environments.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-brand-ink">About the Founder</h2>
        <p className="mt-4 max-w-4xl text-brand-muted">
          Leandro Momesso de Moraes is the founder and principal consultant at
          BRACEWorks Consulting. He has spent more than two decades designing and
          securing complex technology infrastructure, from enterprise and industrial
          networks to multi-cloud environments and, most recently, generative and
          agentic AI systems.
        </p>
        <p className="mt-4 max-w-4xl text-brand-muted">
          His technical background includes the Cisco Certified Internetwork Expert
          (CCIE) certification, the Certified Kubernetes Administrator (CKA)
          certification, and the AWS Certified Machine Learning Engineer certification,
          alongside graduate-level study in Data Science and Artificial Intelligence.
          Over his career, he has designed and implemented security architectures for
          organizations across the energy, mining, media, finance, and cloud
          infrastructure sectors.
        </p>
        <p className="mt-4 max-w-4xl text-brand-muted">
          BRACEWorks Consulting was founded to bring that same rigor, architecture
          first, vendor-agnostic, and grounded in real operational risk, to
          organizations navigating cloud and AI adoption in the United States.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-brand-ink">Our Approach</h2>
        <p className="mt-4 max-w-4xl text-brand-muted">
          We don&apos;t start with a product. We start with your environment: what
          you&apos;ve built, what you&apos;ve adopted, what&apos;s actually at risk, and
          what you can realistically operationalize. Every recommendation is evaluated
          against your infrastructure, budget, compliance obligations, and operational
          maturity.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-brand-ink">Independence, in Practice</h2>
        <p className="mt-4 max-w-4xl text-brand-muted">
          Being vendor-agnostic isn&apos;t a slogan on our site. It shapes how
          engagements are structured:
        </p>
        <ul className="mt-4 max-w-4xl list-disc space-y-3 pl-5 text-brand-muted">
          <li>
            We do not receive referral fees or reseller margins tied to specific security
            products.
          </li>
          <li>
            Our assessments can recommend native cloud tooling (e.g., AWS GuardDuty, AWS
            Config, Microsoft Defender for Cloud, Google Security Command Center),
            third-party platforms, or no new purchase at all, whichever fits.
          </li>
          <li>
            Our methodology (BRACE) and technical frameworks are our own intellectual
            property, independent of any single vendor&apos;s proprietary approach.
          </li>
        </ul>
      </section>
    </div>
  );
}
