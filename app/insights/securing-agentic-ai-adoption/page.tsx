import type { Metadata } from "next";
import Link from "next/link";
import { publishedArticles } from "@/lib/insights";

const article = publishedArticles[1];

export const metadata: Metadata = {
  title: `${article.title} | BRACEWorks - Cloud & AI Security`,
  description: article.description,
  openGraph: {
    title: `${article.title} | BRACEWorks - Cloud & AI Security`,
    description: article.description,
    url: `https://braceworks.net/insights/${article.slug}`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `${article.title} | BRACEWorks - Cloud & AI Security`,
    description: article.description,
  },
};

export default function SecuringAgenticAiAdoptionArticlePage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
      <p className="text-sm text-brand-muted">BRACEWorks - Cloud &amp; AI Security</p>
      <h1 className="mt-2 text-4xl font-bold text-brand-ink">{article.title}</h1>

      <p className="mt-8 text-brand-muted">
        Analysts are getting more explicit about what AI governance failures can
        actually cost. Gartner predicts that by 2028, misconfigured AI in cyber-physical
        systems (the engineered systems behind operational technology, industrial
        control systems, and industrial IoT) will shut down national critical
        infrastructure in a G20 country. That prediction is about physical
        infrastructure, not the AI agents most enterprises are adopting today. Still, it
        is a useful signal of how seriously governance failures are now being taken at
        the board level.
      </p>
      <p className="mt-4 text-brand-muted">
        The risks specific to adopting AI agents in the enterprise are different, and
        they are already documented rather than hypothetical. Four of them show up
        consistently across current security research: prompt injection, MCP tool
        poisoning, memory poisoning, and supply chain risk. Here is what each one
        actually means, and how the BRACE methodology addresses it.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-brand-ink">
        1. Prompt injection
      </h2>
      <p className="mt-4 text-brand-muted">
        Prompt injection happens when instructions embedded in user input or in content
        an agent retrieves, such as a webpage, a document, or an email, override or
        redirect the model’s intended behavior. It is the top-ranked risk in the OWASP Top 10 for LLM
        Applications (LLM01:2025), and for good reason: any agent that reads
        untrusted content is exposed to it, not just agents with obviously risky inputs.
      </p>
      <p className="mt-4 text-brand-muted">
        Traditional input validation does not fully solve this, because the malicious
        instruction often looks like ordinary text to anything short of the model
        itself. That is why prompt injection sits squarely in BRACE’s AI Security stage:
        it has to be addressed with controls designed for how LLMs actually process
        untrusted content, not with the access-control tools built for traditional
        applications.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-brand-ink">
        2. MCP tool poisoning
      </h2>
      <p className="mt-4 text-brand-muted">
        As organizations connect AI agents to external tools through the Model Context
        Protocol (MCP), a new attack surface has opened up: a malicious or compromised
        MCP server can embed instructions inside a tool’s description or its responses,
        and an agent will often follow those instructions without the user ever seeing
        them. Security researchers, including the team at Invariant Labs who first
        disclosed the pattern, and the OWASP community have documented this as MCP tool
        poisoning.
      </p>
      <p className="mt-4 text-brand-muted">
        The root cause is a trust gap: tool descriptions are typically reviewed once,
        when an agent first connects to a server, but the tool’s actual responses flow
        straight into the model’s context afterward with no equivalent check.
        Documented cases include one trusted tool’s behavior being hijacked by
        instructions hidden inside an unrelated, poisoned tool. MCP is still a young
        standard, and its security posture is still catching up to its adoption. That is
        exactly the kind of exposure BRACE’s Agent Boundaries work is designed to
        contain.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-brand-ink">
        3. Memory poisoning
      </h2>
      <p className="mt-4 text-brand-muted">
        Memory poisoning is what happens when an attacker manages to write malicious
        content into an agent’s persistent memory, such as conversation history, a
        vector store used for semantic search, a scratchpad, or a RAG index, so that the
        agent acts on it in a future session. OWASP tracks this as ASI06 in its Top 10 for Agentic
        Applications.
      </p>
      <p className="mt-4 text-brand-muted">
        What makes memory poisoning distinct from prompt injection is persistence: a
        prompt injection attempt is generally scoped to the session it occurs in, but a
        successful memory poisoning attack keeps affecting the agent’s behavior long
        after the original interaction has ended. That persistence is why it needs to be
        addressed at the Runtime Protection stage of BRACE, through ongoing monitoring of
        what an agent is actually doing, not just a one-time review of what it was
        configured to do.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-brand-ink">
        4. Supply chain vulnerabilities
      </h2>
      <p className="mt-4 text-brand-muted">
        An AI agent is rarely built from a single, self-contained model. It typically
        depends on a foundation model, one or more hosted APIs, fine-tuned models
        sourced from a vendor, retrieval-augmented generation (RAG) data sources, and a
        growing number of third-party MCP tools. Each of those components can
        introduce risk through behavioral drift, hidden backdoors, or poisoned training
        or retrieval data. The OWASP Top 10 for LLM Applications tracks this as LLM03,
        and it rose from fifth to third place in the 2025 ranking, reflecting how quickly
        this category of risk is growing as AI supply chains get more complex.
      </p>
      <p className="mt-4 text-brand-muted">
        This is why BRACE treats vendor and model provenance as a Governance question,
        not an afterthought: the same discipline that applies to vetting a new cloud
        service provider needs to apply to every model, dataset, and tool an agent
        depends on.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-brand-ink">
        Why this belongs in one framework
      </h2>
      <p className="mt-4 text-brand-muted">
        These four risks map cleanly onto the four-stage framework we apply in every
        Generative AI Security engagement: Observability surfaces anomalous tool and
        memory behavior before it causes damage; Governance sets the policy for which
        models, tools, and data sources an agent is allowed to depend on; Agent
        Boundaries scope what a given agent or tool can actually do, limiting the blast
        radius of a poisoned tool or a hijacked session; and Runtime Protection watches
        what agents are doing in production, not just what they were configured to do at
        launch.
      </p>
      <p className="mt-4 text-brand-muted">
        Adopting AI agents does not have to mean accepting these risks as a cost of
        doing business. It means treating agent security with the same rigor
        organizations have learned to apply to cloud security. That is exactly what
        our{" "}
        <Link
          href="/services/generative-ai-security"
          className="font-semibold text-brand-navy hover:text-brand-slate"
        >
          Generative AI Security Consulting
        </Link>{" "}
        engagements are built to do.
      </p>
    </article>
  );
}
