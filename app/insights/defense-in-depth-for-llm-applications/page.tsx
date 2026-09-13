import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { publishedArticles } from "@/lib/insights";

const article = publishedArticles[2];

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

const linkClass = "font-semibold text-brand-navy hover:text-brand-slate";

export default function DefenseInDepthForLlmApplicationsArticlePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
      <p className="text-sm text-brand-muted">BRACEWorks - Cloud &amp; AI Security</p>
      <h1 className="mt-2 text-4xl font-bold text-brand-ink">{article.title}</h1>

      <p className="mt-8 text-brand-muted">
        Companies are moving quickly to put AI into everyday work. Employees are using
        advanced models to analyze information and create content. Development teams
        are building chatbots that retrieve internal documents. Agents are connecting to
        business systems and taking actions on behalf of users.
      </p>
      <p className="mt-4 text-brand-muted">
        These capabilities create opportunities for productivity. They also introduce a
        security question: what happens when the information an AI application reads
        contains instructions designed to manipulate it?
      </p>
      <p className="mt-4 text-brand-muted">
        A connection can be encrypted. The user can be authenticated. The destination
        can be approved. And the interaction can still lead to data exposure or an
        unauthorized action.
      </p>
      <p className="mt-4 text-brand-muted">
        This is why we see the LLM Gateway becoming an important part of enterprise
        security architecture. It provides a central place to apply policies and inspect
        interactions with models, while working with the network, identity, and
        application controls the company already has.
      </p>
      <p className="mt-4 text-brand-muted">
        IBM and the Ponemon Institute&rsquo;s{" "}
        <a
          href="https://www.ibm.com/reports/data-breach"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Cost of a Data Breach Report 2026
        </a>{" "}
        makes a similar point at scale. Among organizations that had an AI-related
        breach, incidents were less about which model they chose than about the security
        of the model and its surrounding environment. Root causes were often structural:
        compromised APIs, applications, and cloud misconfigurations, pointing to
        governance failures rather than model risk. AI-related breaches also grew
        sharply, up 61% year over year to 21% of the organizations studied.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-brand-ink">
        Firewalls and WAFs remain essential
      </h2>
      <p className="mt-4 text-brand-muted">
        We have spent years building layers of protection around our applications.
        Firewalls control communications and restrict access. WAFs help protect web
        applications against exploitation and abuse. Identity platforms determine who
        can access a resource.
      </p>
      <p className="mt-4 text-brand-muted">
        All of these controls remain critical as we adopt AI.
      </p>
      <p className="mt-4 text-brand-muted">
        The challenge is that attacks against LLM applications can operate through
        legitimate content and legitimate connections. A document can contain
        instructions that attempt to change an agent&rsquo;s behavior. A tool response
        can ask the agent to disclose information. Neither situation necessarily
        requires a malformed request or a traditional software exploit.
      </p>
      <p className="mt-4 text-brand-muted">
        Consider a chatbot using Retrieval Augmented Generation, or RAG. It retrieves
        documents and includes them in the context sent to the model. Those documents
        help the application answer questions, but their contents should not acquire
        the authority to change the application&rsquo;s instructions.
      </p>
      <p className="mt-4 text-brand-muted">
        The same concern becomes more significant when an agent can use tools. An
        incorrect response is one problem. An agent using its access to send
        information or change a business record is another.
      </p>
      <p className="mt-4 text-brand-muted">
        The OWASP guidance recognizes prompt injection as a risk and explains that RAG
        does not eliminate it. See the{" "}
        <a
          href="https://owasp.org/www-project-top-10-for-large-language-model-applications/assets/PDF/OWASP-Top-10-for-LLMs-v2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          OWASP guidance for LLM applications
        </a>
        . Three attack scenarios help explain what this means in practice.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-brand-ink">
        Prompt injection: when information becomes an instruction
      </h2>
      <p className="mt-4 text-brand-muted">
        Prompt injection happens when content attempts to redirect a model away from
        the intended task or the application&rsquo;s rules.
      </p>
      <p className="mt-4 text-brand-muted">
        The attacker does not always need to interact directly with the chatbot.
        Instructions can arrive through an email, a document, a website, or the result
        of a tool call.
      </p>
      <p className="mt-4 text-brand-muted">
        The financial impact is measurable. IBM&rsquo;s 2026 research found breaches
        involving an AI model prompt injection incident cost an average of USD 5.89
        million, nearly 18% above the global breach average, and breaches involving
        model inversion (extracting sensitive data from a model) were even costlier at
        USD 6.07 million.
      </p>
      <p className="mt-4 text-brand-muted">
        In June 2025, researchers disclosed EchoLeak, a vulnerability in Microsoft 365
        Copilot identified as CVE-2025-32711. They demonstrated how a specially prepared
        email could lead to the disclosure of information from the Copilot context
        without requiring the user to click the malicious content.
      </p>
      <p className="mt-4 text-brand-muted">
        This was a demonstrated vulnerability, rather than a confirmed campaign
        affecting customers. The researchers reported that they were not aware of
        customers being impacted. Even with that distinction, the case provides a
        concrete example of how external content can cross a trust boundary in an
        enterprise AI application. See the{" "}
        <a
          href="https://www.catonetworks.com/blog/breaking-down-echoleak/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          EchoLeak research
        </a>
        .
      </p>
      <p className="mt-4 text-brand-muted">
        For companies building RAG applications, the lesson is practical. Inspecting
        the employee&rsquo;s question is only part of the work. Retrieved content and
        tool responses also need to be considered.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-brand-ink">
        MCP tool poisoning: the integration can influence the agent
      </h2>
      <p className="mt-4 text-brand-muted">
        The Model Context Protocol, or MCP, standardizes how AI applications connect to
        tools, data, and other capabilities.
      </p>
      <p className="mt-4 text-brand-muted">
        The ecosystem is expanding as vendors make their services available through MCP
        Servers. GitHub has introduced a remote MCP Server, and companies including
        Atlassian, PayPal, and Stripe have participated in the rollout of MCP
        integrations. In many implementations, the MCP Server provides an additional
        interface to existing APIs. See the{" "}
        <a
          href="https://github.blog/changelog/2025-09-04-remote-github-mcp-server-is-now-generally-available/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          GitHub MCP announcement
        </a>{" "}
        and{" "}
        <a
          href="https://blog.cloudflare.com/mcp-demo-day/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          examples from the MCP ecosystem
        </a>
        .
      </p>
      <p className="mt-4 text-brand-muted">
        For a company adopting agents, this makes integration easier. It also adds
        dependencies that need to be governed.
      </p>
      <p className="mt-4 text-brand-muted">
        An MCP tool can provide its name, a description of what it does, and the
        parameters it accepts. The description is written in natural language to help
        the model understand when and how to use the tool. Calls and parameters also
        use structured formats defined by the protocol. See the{" "}
        <a
          href="https://modelcontextprotocol.io/specification/2025-06-18/server/tools"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          MCP tool specification
        </a>
        .
      </p>
      <p className="mt-4 text-brand-muted">
        Now consider what happens if a vendor&rsquo;s MCP Server is compromised.
      </p>
      <p className="mt-4 text-brand-muted">
        An attacker could change a tool description or its responses. The modified
        content could tell the agent that it needs to retrieve additional information
        or perform another action to complete the user&rsquo;s request.
      </p>
      <p className="mt-4 text-brand-muted">
        The impact may extend beyond the compromised server. An agent connected to
        several tools could be manipulated by one integration into misusing another.
      </p>
      <p className="mt-4 text-brand-muted">
        Researchers at Invariant demonstrated this in April 2025. An agent connected to
        a malicious MCP Server and a trusted WhatsApp integration was manipulated into
        exposing messages through the trusted integration. In the experiment, the
        malicious tool did not need to be executed. Its description was enough to
        influence the agent. See the{" "}
        <a
          href="https://invariantlabs.ai/blog/whatsapp-mcp-exploited"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Invariant research
        </a>
        .
      </p>
      <p className="mt-4 text-brand-muted">
        The attacker does not automatically gain new permissions. Instead, the attack
        attempts to misuse the access the agent already has.
      </p>
      <p className="mt-4 text-brand-muted">
        This is why approving a connector once is not enough. Companies need to review
        changes to tool descriptions, behavior, and permissions throughout the life of
        the integration.
      </p>
      <p className="mt-4 text-brand-muted">
        IBM classifies this kind of exposure as compromise of connected apps, APIs, or
        plug-ins, and found it added an average of USD 4.37 million to breach costs,
        one more sign that the integration layer, not just the model, needs its own
        controls.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-brand-ink">
        Supply chain attacks: a legitimate request can reach malicious code
      </h2>
      <p className="mt-4 text-brand-muted">
        AI applications depend on software packages, connectors, and external services.
        These dependencies create another route into the environment.
      </p>
      <p className="mt-4 text-brand-muted">
        In September 2025, Postmark confirmed that a malicious package named{" "}
        <code className="rounded bg-brand-bg px-1.5 py-0.5 text-[0.9em]">
          postmark-mcp
        </code>{" "}
        had been distributed while impersonating its brand. After earlier versions
        established trust, version 1.0.16 introduced a change that secretly copied
        emails to an external destination.
      </p>
      <p className="mt-4 text-brand-muted">
        Postmark stated that the package was not official and that its legitimate
        services were unaffected. See the{" "}
        <a
          href="https://postmarkapp.com/blog/information-regarding-malicious-postmark-mcp-package"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Postmark security notice
        </a>
        .
      </p>
      <p className="mt-4 text-brand-muted">
        This case shows why prompt inspection alone cannot protect the entire
        application.
      </p>
      <p className="mt-4 text-brand-muted">
        The user may submit a valid request. The model may select the correct tool. But
        the tool&rsquo;s code can still perform an additional malicious operation.
      </p>
      <p className="mt-4 text-brand-muted">
        Verifying software origin, reviewing dependencies, controlling updates, and
        limiting execution privileges remain essential.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-brand-ink">
        Identity becomes even more important with agents
      </h2>
      <p className="mt-4 text-brand-muted">
        When an employee uses an agent, we need to understand more than who signed in.
      </p>
      <p className="mt-4 text-brand-muted">
        Which agent is executing the task? On whose behalf? What operation has been
        authorized? Which resource can it access, and for how long?
      </p>
      <p className="mt-4 text-brand-muted">
        Giving an agent broad access because it is convenient creates unnecessary
        exposure. An agent that only needs to read a customer record should not
        automatically receive permission to modify it. An agent that prepares an email
        does not necessarily need permission to send it to any recipient.
      </p>
      <p className="mt-4 text-brand-muted">
        The data backs up why this matters. In IBM&rsquo;s 2026 report, 92% of
        organizations that had an AI-related breach lacked proper AI access controls,
        things like role-based access and multi-factor authentication. Fewer than half
        of organizations (46%) said they secure non-human identities in their AI
        workflows at all, and among those that do, only 32% extend zero trust
        principles to those identities.
      </p>
      <p className="mt-4 text-brand-muted">
        User passwords, API keys, and access tokens should not be placed in prompts or
        exposed to the model. Trusted execution components should manage credentials
        and apply the permissions needed for each operation.
      </p>
      <p className="mt-4 text-brand-muted">
        The MCP authorization requirements reinforce this separation by requiring token
        validation and prohibiting indiscriminate token passthrough between services.
        See the{" "}
        <a
          href="https://github.com/modelcontextprotocol/modelcontextprotocol/blob/main/docs/specification/2026-07-28/basic/authorization/security-considerations.mdx"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          MCP authorization security requirements
        </a>
        .
      </p>
      <p className="mt-4 text-brand-muted">
        The model can propose an action. A separate control should determine whether
        that action is allowed.
      </p>
      <p className="mt-4 text-brand-muted">
        IBM&rsquo;s own recommendations point in the same direction: shifting identity
        security to continuous, runtime verification, with just-in-time access,
        time-bound approvals, and continuous risk-based controls, rather than a
        one-time authorization check when an agent is first provisioned.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-brand-ink">
        Governance should make productive use possible
      </h2>
      <p className="mt-4 text-brand-muted">
        There is pressure to adopt AI quickly. Employees want access to better tools,
        and business leaders want productivity gains.
      </p>
      <p className="mt-4 text-brand-muted">
        A blanket prohibition can make legitimate work more difficult and encourage
        employees to find alternatives outside approved channels. Unrestricted access
        creates a different set of problems.
      </p>
      <p className="mt-4 text-brand-muted">
        The cost of getting this wrong is already visible. IBM&rsquo;s 2026 research
        found security incidents involving shadow AI, employees using unapproved
        tools, more than doubled to 43% of AI-related incidents this year, and cost
        more on average (USD 5.39 million) than incidents involving sanctioned AI use.
        Governance gaps compound the problem: only a third of organizations had strict
        approval processes for AI deployments, down from 45% the year before, and just
        19% said their governance and security teams coordinate at all.
      </p>
      <p className="mt-4 text-brand-muted">
        Companies need a clear and practical policy that answers the questions
        employees and developers actually face.
      </p>
      <p className="mt-4 text-brand-muted">
        Which models can they use? What information can they send? Which connectors are
        approved? Can an agent only prepare an action, or can it execute it? Who is
        responsible when something goes wrong?
      </p>
      <p className="mt-4 text-brand-muted">
        The policy should reflect the activity. Drafting content with public
        information, analyzing internal documents, and changing production systems
        require different controls.
      </p>
      <p className="mt-4 text-brand-muted">
        It also needs an efficient exception process. If approval takes too long or the
        approved tools do not meet business needs, the governance process itself
        becomes difficult to follow.
      </p>
      <p className="mt-4 text-brand-muted">
        The objective is to provide useful access with clear boundaries and
        accountability.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-brand-ink">
        The LLM Gateway as a central control point
      </h2>
      <p className="mt-4 text-brand-muted">
        An LLM Gateway provides a common place to apply policies to model access.
      </p>
      <p className="mt-4 text-brand-muted">
        Depending on the solution and its integrations, it can inspect requests and
        responses, identify sensitive information, apply guardrails, restrict
        providers, manage usage, and produce audit records.
      </p>
      <p className="mt-4 text-brand-muted">
        The architecture below brings together two different access patterns:
        employees using AI websites through a corporate proxy, and applications calling
        model APIs through the gateway.
      </p>
      <Image
        src="/defense-in-depth-for-llms.png"
        alt="Defense in Depth for LLMs architecture showing employees accessing AI web applications through a secure proxy, inspection decisions from a central LLM Gateway, and governed model API access for applications and agents."
        width={1536}
        height={1024}
        className="mt-8 w-full rounded-lg border border-brand-border"
      />
      <p className="mt-8 text-brand-muted">
        For applications the company controls, model requests can pass directly
        through the LLM Gateway. This gives the gateway a clear enforcement point
        before content reaches the provider.
      </p>
      <p className="mt-4 text-brand-muted">
        For employees accessing a service such as ChatGPT through a browser, the path
        is different. The firewall or secure proxy controls the web connection and,
        where supported, integrates with the inspection service associated with the
        gateway.
      </p>
      <p className="mt-4 text-brand-muted">
        Both paths can use shared governance policies, but they do not operate in
        exactly the same way.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-brand-ink">
        Connecting network security with AI inspection
      </h2>
      <p className="mt-4 text-brand-muted">
        Security teams are familiar with network controls consulting specialized
        analysis services before allowing content to pass.
      </p>
      <p className="mt-4 text-brand-muted">We can apply the same principle to AI interactions.</p>
      <p className="mt-4 text-brand-muted">
        The challenge is understanding what an interaction means in context. A firewall
        can recognize an approved AI service and allow an authenticated connection.
        Traditional network and protocol inspection alone cannot reliably determine
        whether text inside a document is useful information or an instruction
        attempting to manipulate an agent.
      </p>
      <p className="mt-4 text-brand-muted">
        The same sentence can be harmless in a security report and dangerous when an
        agent treats it as an instruction to act. Evaluating that difference requires
        visibility into the task, the source of the content, and the actions available
        to the agent.
      </p>
      <p className="mt-4 text-brand-muted">
        This is why an LLM Gateway with integrated AI security inspection is needed in
        this architecture. It provides a central point to evaluate model interactions
        against company policies and return decisions that applications and network
        controls can enforce. Its effectiveness depends on the inspection capabilities
        and context available, supported by independent controls over data access and
        tool execution.
      </p>
      <p className="mt-4 text-brand-muted">
        A firewall or secure proxy identifies access to an AI application and
        associates it with a user or application where that information is available.
        Through a supported integration, it submits the prompt and necessary context
        for inspection.
      </p>
      <p className="mt-4 text-brand-muted">
        The inspection service evaluates the interaction against the company&rsquo;s
        policies. It can return a decision to allow, block, or redact supported
        content. The proxy then enforces that decision before forwarding the request.
      </p>
      <p className="mt-4 text-brand-muted">
        This design needs some important implementation details.
      </p>
      <p className="mt-4 text-brand-muted">
        Capturing content inside HTTPS requires authorized TLS inspection or an
        explicit application integration. Recognizing the destination alone does not
        reveal the prompt.
      </p>
      <p className="mt-4 text-brand-muted">
        Prevention also requires the decision to happen before transmission. Exporting
        an interaction after it has been sent supports monitoring and investigation,
        but cannot prevent the original disclosure.
      </p>
      <p className="mt-4 text-brand-muted">
        There are visibility limits as well. A corporate proxy may see the browser
        interaction without seeing documents retrieved or tools executed inside the
        provider&rsquo;s infrastructure.
      </p>
      <p className="mt-4 text-brand-muted">
        For that reason, central visibility across the organization is an architecture
        objective that requires supported integrations and control over alternative
        access paths. Installing a gateway alone does not deliver complete coverage.
      </p>
      <p className="mt-4 text-brand-muted">
        The inspection service must also protect the information it receives. Content
        collection, access, and retention should be limited to what the security
        function needs.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-brand-ink">
        Tool execution needs its own controls
      </h2>
      <p className="mt-4 text-brand-muted">
        The gateway is central to model access, but agents also interact with business
        systems.
      </p>
      <p className="mt-4 text-brand-muted">
        Before a tool runs, the application should validate the operation, its
        arguments, the target resource, and the intended recipient. MCP integrations
        should be approved and monitored for changes.
      </p>
      <p className="mt-4 text-brand-muted">
        RAG applications must enforce document permissions before content is returned
        to the model. Network controls should restrict where workloads can send
        information. Identity controls should limit what each agent can do.
      </p>
      <p className="mt-4 text-brand-muted">
        These layers reduce the potential impact when a malicious instruction is not
        detected.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-brand-ink">
        Choosing a gateway that supports your policies
      </h2>
      <p className="mt-4 text-brand-muted">
        LiteLLM and OpenRouter are examples of solutions worth evaluating, with
        different operating models and capabilities. LiteLLM documents integrations
        with guardrail services, while OpenRouter provides organizational controls for
        model access, usage, and content handling. See{" "}
        <a
          href="https://docs.litellm.ai/docs/proxy/guardrails/quick_start"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          LiteLLM guardrails
        </a>{" "}
        and{" "}
        <a
          href="https://openrouter.ai/docs/guides/features/guardrails/overview"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          OpenRouter controls
        </a>
        .
      </p>
      <p className="mt-4 text-brand-muted">
        The evaluation should start with the company&rsquo;s requirements.
      </p>
      <p className="mt-4 text-brand-muted">
        Can the solution apply the required data policies? Does it integrate with
        identity, network controls, and monitoring? Which protections are native, and
        which require additional services? What happens if inspection is unavailable
        or a request falls back to another provider?
      </p>
      <p className="mt-4 text-brand-muted">
        The company should also test effectiveness using representative business tasks
        and attack scenarios. Detection quality, false positives, latency, and
        operational effort all matter.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-brand-ink">
        Building a practical path forward
      </h2>
      <p className="mt-4 text-brand-muted">
        AI adoption increases the value of security controls that work together.
      </p>
      <p className="mt-4 text-brand-muted">
        This is particularly acute in critical infrastructure and financial services,
        which together accounted for 62% of AI-driven attacks in IBM&rsquo;s 2026
        research, with financial services breaches averaging USD 6.29 million. These
        are exactly the sectors where{" "}
        <Link href="/#compliance" className={linkClass}>
          named compliance frameworks
        </Link>{" "}
        already require the kind of layered, auditable controls this article
        describes.
      </p>
      <p className="mt-4 text-brand-muted">
        Firewalls and WAFs protect communications and applications. Identity limits
        access. Tool controls authorize execution. Data controls preserve permissions.
        The LLM Gateway brings a central policy and inspection point to model
        interactions.
      </p>
      <p className="mt-4 text-brand-muted">
        For organizations beginning this work, the first step is to map how employees,
        applications, and agents use AI today. Identify the models, connectors,
        credentials, and data involved, then determine where policies can be enforced.
      </p>
      <p className="mt-4 text-brand-muted">
        A practical architecture assessment can turn that inventory into an
        implementation plan, helping the business expand AI use with visibility,
        accountability, and appropriate protection. This is the kind of architecture
        work our{" "}
        <Link href="/services/generative-ai-security" className={linkClass}>
          Generative AI Security Consulting
        </Link>{" "}
        engagements help you plan.
      </p>
    </article>
  );
}
