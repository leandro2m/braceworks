import type { Metadata } from "next";
import Link from "next/link";
import { Bot, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Generative AI Security Consulting | BRACEWorks - Cloud & AI Security",
  description:
    "BRACEWorks helps organizations identify their stage of GenAI adoption and apply controls appropriate to that stage, from public-tool usage to custom models and autonomous agents.",
  openGraph: {
    title: "Generative AI Security Consulting | BRACEWorks - Cloud & AI Security",
    description:
      "BRACEWorks helps organizations identify their stage of GenAI adoption and apply controls appropriate to that stage, from public-tool usage to custom models and autonomous agents.",
    url: "https://braceworks.ai/services/generative-ai-security",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Generative AI Security Consulting | BRACEWorks - Cloud & AI Security",
    description:
      "BRACEWorks helps organizations identify their stage of GenAI adoption and apply controls appropriate to that stage, from public-tool usage to custom models and autonomous agents.",
  },
};

export default function GenerativeAiSecurityPage() {
  return (
    <div className="mx-auto max-w-content px-4 py-16 sm:py-20">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-brand-navy/10 text-brand-navy">
        <Bot aria-hidden="true" className="h-7 w-7" strokeWidth={1.75} />
      </div>
      <h1 className="max-w-3xl text-4xl font-bold text-brand-ink">
        Generative AI Security Consulting
      </h1>
      <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-brand-navy">
        LLM &amp; Agentic AI Security
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-brand-ink">Overview</h2>
        <p className="mt-4 max-w-3xl text-brand-muted">
          Generative AI adoption is rarely a single decision. It&apos;s a spectrum, and
          the right security controls depend on where an organization actually sits on
          it. We help organizations identify their stage of GenAI adoption and apply
          controls appropriate to that stage, rather than a one-size-fits-all AI policy.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-brand-ink">
          Three categories of GenAI exposure we assess
        </h2>
        <ol className="mt-4 max-w-3xl list-decimal space-y-4 pl-5 text-brand-muted">
          <li>
            <strong className="text-brand-ink">Consumer-facing GenAI use:</strong>{" "}
            employees using public tools (e.g., Claude, ChatGPT, Gemini, Perplexity). Risk
            centers on data leakage, lack of usage policy, and unmanaged exposure of
            sensitive corporate information.
          </li>
          <li>
            <strong className="text-brand-ink">Enterprise AI application security:</strong>{" "}
            GenAI features embedded in SaaS platforms your organization already uses
            (e.g., Microsoft Copilot, Salesforce AI features). Risk centers on shadow AI,
            integration security, and access governance.
          </li>
          <li>
            <strong className="text-brand-ink">Custom AI model and agent security:</strong>{" "}
            organizations building on platforms such as Amazon Bedrock, Azure AI
            Foundry, or Google Vertex AI. Risk centers on model validation, adversarial
            robustness, secure data pipelines, AI-agent boundary enforcement, and runtime
            protection.
          </li>
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-brand-ink">
          Our framework: Observability → Governance → Agent Boundaries → Runtime
          Protection
        </h2>
        <p className="mt-4 max-w-3xl text-brand-muted">
          We apply a four-stage progression across all three categories, recommending
          specific technical controls based on what your environment and risk profile
          actually require, from usage policy and DLP to LLM gateways, CNAPP integration,
          and runtime monitoring. The framework is vendor-agnostic: no recommendation is
          tied to a single product line.
        </p>
        <p className="mt-4 max-w-3xl text-brand-muted">
          An LLM Gateway is one of the key controls at the Runtime Protection stage,
          giving you a central point to inspect prompts and tool calls before they
          reach a model or an external service. See our breakdown of how that fits
          alongside your existing firewalls, WAFs, and identity controls in{" "}
          <Link
            href="/insights/defense-in-depth-for-llm-applications"
            className="font-semibold text-brand-navy hover:text-brand-slate"
          >
            Defense in Depth for LLM Applications
          </Link>
          .
        </p>
        <p className="mt-4 max-w-3xl text-brand-muted">
          At the Agent Boundaries stage, we also assess execution sandboxing, isolating
          the code an agent runs and the actions it takes in a disposable, restricted
          environment so that a manipulated agent cannot reach beyond the task it was
          given. This contains the damage even when a prompt injection or a poisoned
          tool gets past inspection.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-brand-ink">What we help you guard against</h2>
        <p className="mt-4 max-w-3xl text-brand-muted">
          Analysts are increasingly explicit about the stakes of getting AI governance
          wrong: Gartner predicts that by 2028, misconfigured AI in cyber-physical
          systems will shut down national critical infrastructure in a G20 country. The
          risks specific to adopting AI agents in the enterprise are different, but
          equally well documented:
        </p>
        <ul className="mt-4 max-w-3xl list-disc space-y-4 pl-5 text-brand-muted">
          <li>
            <strong className="text-brand-ink">Prompt injection:</strong> malicious
            instructions embedded in user input or retrieved content that alter an
            LLM&apos;s intended behavior, ranked the top risk in the OWASP Top 10 for LLM
            Applications (LLM01:2025).
          </li>
          <li>
            <strong className="text-brand-ink">MCP tool poisoning:</strong> malicious
            instructions embedded in a Model Context Protocol tool&apos;s metadata or
            responses, exploiting the gap between how tools are reviewed when an agent
            connects and how their output is trusted at runtime.
          </li>
          <li>
            <strong className="text-brand-ink">Memory poisoning:</strong> an attacker
            writes malicious content into an agent&apos;s persistent memory so it acts on
            it in future sessions, long after the original interaction ends (tracked as
            ASI06 in the OWASP Top 10 for Agentic Applications).
          </li>
          <li>
            <strong className="text-brand-ink">Supply chain vulnerabilities:</strong> risk
            introduced through foundation models, hosted APIs, fine-tuned models, RAG data
            sources, and MCP tools sourced from third parties (OWASP Top 10 for LLM
            Applications, LLM03:2025).
          </li>
        </ul>
        <p className="mt-4 max-w-3xl text-brand-muted">
          This is exactly what our four-stage framework above is built to address, from
          observability that surfaces anomalous tool and memory behavior, to agent
          boundaries and runtime protection that contain it. See the full breakdown in{" "}
          <Link
            href="/insights/securing-agentic-ai-adoption"
            className="font-semibold text-brand-navy hover:text-brand-slate"
          >
            our Insights article on securing agentic AI adoption
          </Link>
          .
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-brand-ink">What you get</h2>
        <p className="mt-4 max-w-3xl text-brand-muted">
          A clear picture of where your organization sits on the GenAI adoption spectrum,
          the specific risks tied to your actual use cases, and a practical set of
          controls for data protection, governance, AI-agent boundaries, and responsible
          deployment.
        </p>
      </section>

      <div className="mt-14 border-t border-brand-border pt-8">
        <Link
          href="/methodology"
          className="inline-flex items-center gap-1.5 font-semibold text-brand-navy hover:text-brand-slate"
        >
          See how this fits into the BRACE methodology
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
