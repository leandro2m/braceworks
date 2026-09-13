import type { Metadata } from "next";
import { publishedArticles } from "@/lib/insights";

const article = publishedArticles[0];

export const metadata: Metadata = {
  title: `${article.title} | BRACEWorks - Cloud & AI Security`,
  description: article.description,
  openGraph: {
    title: `${article.title} | BRACEWorks - Cloud & AI Security`,
    description: article.description,
    url: `https://braceworks.ai/insights/${article.slug}`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `${article.title} | BRACEWorks - Cloud & AI Security`,
    description: article.description,
  },
};

export default function FivePrinciplesArticlePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
      <p className="text-sm text-brand-muted">BRACEWorks - Cloud &amp; AI Security</p>
      <h1 className="mt-2 text-4xl font-bold text-brand-ink">{article.title}</h1>

      <p className="mt-8 text-brand-muted">
        Cloud adoption hasn’t slowed down, and generative AI adoption is moving even
        faster, often faster than the governance needed to keep it safe. Organizations
        that get this right aren’t the ones with the most security tools; they’re the
        ones that have gotten five fundamentals right, consistently, across every cloud
        environment they run. Here’s how we think about each one, and how they map to
        the BRACE methodology we use in every BRACEWorks engagement.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-brand-ink">
        1. Identity is the new perimeter
      </h2>
      <p className="mt-4 text-brand-muted">
        In a cloud environment, there is no network edge to defend the way there used to
        be. The username and password (or the API key, or the service role) is the
        perimeter. Most significant cloud breaches trace back to leaked credentials or
        over-permissive roles, not to a firewall that failed.
      </p>
      <p className="mt-4 text-brand-muted">
        A few practices consistently separate organizations that get this right:
      </p>
      <ul className="mt-4 list-disc space-y-3 pl-5 text-brand-muted">
        <li>
          A single source of truth for identity across every cloud account and provider,
          instead of identity sprawled across a dozen disconnected consoles.
        </li>
        <li>
          Role-based and attribute-based access control, so permissions are granted by
          job function and context, not copied from whoever set up the account first.
        </li>
        <li>
          Least privilege as a default, not an aspiration. Every identity, human or
          service, gets the minimum access it needs and nothing more.
        </li>
        <li>
          Phishing-resistant multi-factor authentication and credential rotation for
          anything long-lived, like API keys and access tokens.
        </li>
        <li>
          Continuous, automated monitoring for anomalous identity behavior, with a real
          response workflow behind it, not just an alert nobody reads.
        </li>
      </ul>
      <p className="mt-4 text-brand-muted">
        This is where our engagements start: identity is Baseline work. You can’t
        assess risk on top of an identity model nobody can actually describe.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-brand-ink">
        2. Visibility has to span every cloud you run
      </h2>
      <p className="mt-4 text-brand-muted">
        Most organizations don’t run one cloud. They run several, often without a
        unified view of network traffic across any of them. Native cloud tooling alone
        often can’t provide the deep inspection or east-west visibility that
        containerized and serverless workloads need, especially once you account for how
        often those workloads talk to third-party APIs.
      </p>
      <p className="mt-4 text-brand-muted">
        Two capabilities matter most here, and they complement each other rather than
        compete:
      </p>
      <ul className="mt-4 list-disc space-y-3 pl-5 text-brand-muted">
        <li>
          In-line protection (a next-generation firewall, integrated natively with your
          cloud provider’s networking layer) where it fits your architecture.
        </li>
        <li>
          Out-of-band detection (network detection and response) where in-line
          inspection isn’t practical, passively watching traffic for anomalies,
          including within encrypted sessions.
        </li>
      </ul>
      <p className="mt-4 text-brand-muted">
        Neither replaces the other. Together, they’re what turns “we think we’d notice”
        into “we can show you exactly what happened.”
      </p>

      <h2 className="mt-10 text-2xl font-bold text-brand-ink">
        3. Treat every API as a front door
      </h2>
      <p className="mt-4 text-brand-muted">
        APIs carry the majority of traffic on the modern web. Akamai’s research has
        repeatedly found that the large majority of web traffic is API traffic, not
        browser traffic, and every one of those APIs is a direct line into your
        application logic and, often, your sensitive data. That makes API security a
        frontline concern, not an afterthought bolted onto a web application firewall.
      </p>
      <p className="mt-4 text-brand-muted">
        A modern approach to API and application security combines:
      </p>
      <ul className="mt-4 list-disc space-y-3 pl-5 text-brand-muted">
        <li>Bot management based on behavior, not just rate limits.</li>
        <li>
          Coverage against the OWASP Top 10, including injection flaws, broken
          authentication, and cross-site scripting, updated continuously as new
          techniques emerge.
        </li>
        <li>
          Behavioral anomaly detection, profiling what “normal” looks like for a given
          application so deviations stand out.
        </li>
      </ul>
      <p className="mt-4 text-brand-muted">
        This is Cloud Posture work in BRACE terms: your API surface is part of your
        configuration and exposure, whether or not you’ve been treating it that way.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-brand-ink">
        4. Data protection has to extend into your AI pipeline
      </h2>
      <p className="mt-4 text-brand-muted">
        Knowing where sensitive data lives has always been hard across hybrid and
        multi-cloud environments. Generative AI adds a genuinely new dimension: once an
        organization starts using retrieval-augmented generation to ground a model in
        its own data, the question isn’t just “where is our sensitive data.” It’s
        “exactly what is being fed into that model, and could any of it leak back out.”
      </p>
      <p className="mt-4 text-brand-muted">
        Modern data security posture management (DSPM) tools use machine learning to
        discover and classify sensitive data automatically, rather than relying on
        static regex rules. The technology only helps if it’s paired with a process:
        continuous classification, access monitoring, prioritized remediation
        of overly broad permissions, and an incident response plan that assumes
        something will eventually be misclassified or overexposed.
      </p>
      <p className="mt-4 text-brand-muted">
        For any organization building on large language models, that means enforcing
        encryption, classification, and access control at every stage, including
        storage, processing, and training, and treating AI data governance as part of
        the software development lifecycle, not a separate track. This is exactly where
        BRACE’s Cloud Posture and AI Security stages meet: data protection doesn’t stop
        being a cloud problem just because a model sits on top of it.
      </p>
      <p className="mt-4 text-brand-muted">
        Frameworks worth building toward here: the NIST AI Risk Management Framework,
        NIST Cybersecurity Framework 2.0, and the Cloud Security Alliance’s AI security
        guidance. All of them are vendor-neutral and publicly available.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-brand-ink">
        5. Build security into the pipeline, not after it
      </h2>
      <p className="mt-4 text-brand-muted">
        The least glamorous principle is often the one with the highest return: knowing
        exactly what’s in your code before it reaches production.
      </p>
      <p className="mt-4 text-brand-muted">
        Think of it like reading a food label. If you have an allergy, you check the
        ingredient list before you eat, not after. Software needs the same discipline:
      </p>
      <ul className="mt-4 list-disc space-y-3 pl-5 text-brand-muted">
        <li>
          Software composition analysis to catalogue every third-party library and
          package in your code, infrastructure-as-code templates, and container images.
        </li>
        <li>Vulnerability scanning against known CVEs in those components.</li>
        <li>
          Risk-based prioritization of which vulnerabilities actually threaten your
          environment, instead of treating every finding as equally urgent.
        </li>
      </ul>
      <p className="mt-4 text-brand-muted">
        Embedding this into every stage of the CI/CD pipeline, rather than as a
        pre-launch scramble, is what turns DevSecOps from a slogan into a working
        practice. In BRACE terms, this is Risk and Enhancement working together:
        findings that get prioritized, and a pipeline that keeps them from recurring.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-brand-ink">
        Why this matters as one system
      </h2>
      <p className="mt-4 text-brand-muted">
        These five principles aren’t independent checkboxes. They reinforce each other.
        Weak identity controls undermine network segmentation. Unmonitored APIs expose
        the same data a DSPM program is trying to protect. A DevSecOps pipeline without
        clear risk prioritization just produces more alerts, not less risk. That’s the
        reasoning behind BRACE: Baseline, Risk, AI Security, Cloud Posture, and
        Enhancement are designed to be worked through together, not as a checklist you
        complete once and file away.
      </p>
    </article>
  );
}
