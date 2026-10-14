export type Service = {
  path: string;
  title: string;
  shortTitle: string;
  headline: string;
  summary: string;
  deliverables: string[];
  examples: string[];
  measures: string[];
  question: string;
};

export type Industry = {
  path: string;
  title: string;
  headline: string;
  summary: string;
  workflows: { title: string; description: string }[];
  constraints: string[];
  measures: string[];
  services: string[];
};

export type Insight = {
  path: string;
  title: string;
  description: string;
  readTime: string;
  sections: { heading: string; paragraphs: string[] }[];
  relatedService: string;
};

export const services: Service[] = [
  {
    path: "/services/ai-strategy-value",
    title: "AI strategy & value design",
    shortTitle: "Strategy & value",
    headline: "Start with a business decision worth improving.",
    summary:
      "Translate AI ambition into practical priorities, an investment case and a delivery direction. We connect the problem, its owner and the evidence needed to decide what comes next.",
    deliverables: [
      "Stakeholder discovery and a clear view of the current process, its constraints and its users.",
      "Qualified opportunities with explicit business owners, value hypotheses and feasibility considerations.",
      "Baseline measures, cost scenarios and assumptions that sponsors can examine.",
      "A prioritised roadmap with dependencies, delivery options and decision points.",
      "A sponsor-ready brief explaining the proposed scope and what a pilot will test.",
    ],
    examples: [
      "Prioritise AI opportunities across a business function or enterprise programme.",
      "Develop the case for an assistant or document-intensive workflow.",
      "Assess whether to improve, extend or replace an existing AI capability.",
    ],
    measures: [
      "Completeness of the baseline and supporting evidence",
      "Clarity of ownership, assumptions and decision criteria",
      "Time required to prepare and review an investment proposal",
    ],
    question: "Which business problem should your next AI investment solve?",
  },
  {
    path: "/services/agentic-ai-integration",
    title: "Agentic AI & enterprise integration",
    shortTitle: "AI implementation",
    headline: "Connect AI to the work that matters.",
    summary:
      "Design and implement assistants and multi-step workflows that use enterprise knowledge, tools and systems. We connect useful capabilities with defined permissions, review responsibilities and a practical route into production.",
    deliverables: [
      "Workflow and solution design grounded in the existing business process.",
      "Knowledge retrieval with source context and information-access requirements.",
      "API and MCP tool integration, orchestration and human review points.",
      "Exception handling, recovery paths and testable acceptance criteria.",
      "Pilot delivery, release preparation and an agreed operational handover.",
    ],
    examples: [
      "An enterprise knowledge assistant that helps users find and examine supporting sources.",
      "A proposal or research workflow combining information retrieval, drafting and expert review.",
      "A document-intensive process that coordinates systems and routes exceptions to people.",
    ],
    measures: [
      "Task completion and reviewer acceptance",
      "Source quality, exception frequency and successful recovery",
      "Cycle time and operating cost per completed workflow",
    ],
    question: "Where would connected AI remove the most friction from your workflow?",
  },
  {
    path: "/services/chatgpt-codex-enablement",
    title: "ChatGPT & Codex enablement",
    shortTitle: "Workplace enablement",
    headline: "Give people a better way to work with AI.",
    summary:
      "Introduce ChatGPT and Codex through the work your teams actually do. We shape role-specific workflows, practical learning and a rollout that makes quality, adoption and value observable.",
    deliverables: [
      "Readiness assessment covering user groups, information access and priority workflows.",
      "Role-specific use cases and guidance for business, product and engineering teams.",
      "Workspace, operating-policy and review-practice recommendations suited to your environment.",
      "Practical workshops, reusable examples and a champion enablement plan.",
      "A phased rollout with baseline measures, user feedback and an improvement backlog.",
    ],
    examples: [
      "Help research, analysis and operations teams build repeatable ChatGPT workflows.",
      "Introduce Codex into scoped product and engineering tasks with review and acceptance practices.",
      "Turn promising individual experiments into shared ways of working.",
    ],
    measures: [
      "Completion and quality of the intended tasks",
      "Sustained use within the target workflow",
      "Time saved after review and correction effort",
    ],
    question: "What should your people be able to do better with ChatGPT or Codex?",
  },
  {
    path: "/services/governance-evaluation",
    title: "AI governance, evaluation & operations",
    shortTitle: "Governance & evaluation",
    headline: "Build confidence into everyday execution.",
    summary:
      "Make quality, operating cost and accountability visible. We help teams define how AI is evaluated, released, monitored and improved within the organisation's existing responsibilities.",
    deliverables: [
      "Risk and control mapping for the intended users, data and actions.",
      "Quality criteria, representative evaluation sets and reviewer guidance.",
      "Prompt, retrieval and workflow regression tests, including failure scenarios.",
      "Release, escalation and rollback responsibilities with a practical operating cadence.",
      "Consumption and cost assessment linked to an evidence-based improvement backlog.",
    ],
    examples: [
      "Evaluate an existing retrieval assistant before expanding its use.",
      "Improve model-update testing and reduce repeated manual review.",
      "Assess how retrieval, tool calls and retries affect quality and operating cost.",
    ],
    measures: [
      "Evaluation coverage and results against agreed acceptance criteria",
      "Issue resolution and release-preparation effort",
      "Quality and consumption cost across repeated runs",
    ],
    question: "What evidence would give your team confidence to release or scale?",
  },
  {
    path: "/services/embedded-ai-teams",
    title: "Embedded AI delivery & specialist teams",
    shortTitle: "Embedded delivery",
    headline: "Add capability where your programme needs it.",
    summary:
      "Embed a defined workstream or specialist capacity within your delivery structure. We agree the responsibilities, outputs and handoffs so additional capacity supports the programme's goals.",
    deliverables: [
      "A scoped role or workstream with named outputs and acceptance criteria.",
      "An agreed delivery configuration, working arrangement and onboarding plan.",
      "Stakeholder alignment and coordination between business, product and engineering.",
      "A delivery cadence that makes progress, dependencies and decisions visible.",
      "Documentation, knowledge transfer and a practical handover plan.",
    ],
    examples: [
      "AI product and business-analysis support from discovery through acceptance.",
      "Evaluation, testing and implementation workstreams within an enterprise programme.",
      "Data-science or engineering requirements scoped around an agreed business outcome.",
    ],
    measures: [
      "Delivery against agreed outputs and acceptance criteria",
      "Handoff quality and resolution of dependencies",
      "Knowledge transfer and readiness for the receiving team",
    ],
    question: "Which role or workstream needs additional ownership and delivery capacity?",
  },
  {
    path: "/services/data-customer-intelligence",
    title: "Data, analytics & customer intelligence",
    shortTitle: "Data & intelligence",
    headline: "Turn insight into a decision you can test.",
    summary:
      "Connect data, analytics and AI with the decisions business teams make. We help define useful customer and operational insights, shape a pilot and establish how to assess its effect.",
    deliverables: [
      "Data and use-case diagnostics tied to a specific business decision.",
      "Customer segmentation, propensity or lead-prioritisation problem definition.",
      "Next-best-action or offer design with business rules and operational requirements.",
      "Modelling and pilot scope with a baseline, comparison approach and measurement plan.",
      "Integration requirements connecting analytical outputs to the people using them.",
    ],
    examples: [
      "Develop a customer micro-segmentation or lead-prioritisation pilot.",
      "Define a next-best-action workflow and how its recommendations will be used.",
      "Explore customer journeys, service feedback or operational bottlenecks.",
    ],
    measures: [
      "Data suitability and usefulness of the resulting insight",
      "Recommendation uptake within the intended process",
      "Pilot outcomes against a relevant baseline or comparison group",
    ],
    question: "Which customer or operating decision would benefit from better evidence?",
  },
];

export const industries: Industry[] = [
  {
    path: "/industries/financial-services",
    title: "Banking & financial services",
    headline: "Enterprise AI built around banking realities.",
    summary:
      "Connect AI ambition with controlled information access, complex operating processes and accountable decisions. Dockio helps financial-services teams define valuable work, implement useful capabilities and examine the evidence for further investment.",
    workflows: [
      {
        title: "Knowledge and research",
        description:
          "Help teams retrieve approved information, examine sources and prepare research with a clear review step.",
      },
      {
        title: "Relationship and service preparation",
        description:
          "Bring relevant customer, product and process information together to support preparation and service workflows.",
      },
      {
        title: "Document-intensive operations",
        description:
          "Scope extraction, comparison, evidence preparation and exception handling around the organisation's decision rights.",
      },
      {
        title: "Customer intelligence",
        description:
          "Define segmentation, lead-prioritisation and next-best-action pilots with a practical measurement approach.",
      },
      {
        title: "Reusable enterprise capabilities",
        description:
          "Connect knowledge, tools and workflows with evaluation practices and accountable business ownership.",
      },
    ],
    constraints: [
      "Information access and user entitlements",
      "Data privacy and internal approval processes",
      "Legacy systems and integration dependencies",
      "API consumption and operating economics",
      "Review responsibilities and exception handling",
    ],
    measures: [
      "Preparation time and first-pass quality",
      "Task completion and exception rates",
      "Use within the intended business workflow",
      "Business outcomes verified through the agreed pilot",
    ],
    services: [
      "/services/ai-strategy-value",
      "/services/agentic-ai-integration",
      "/services/governance-evaluation",
      "/services/data-customer-intelligence",
    ],
  },
  {
    path: "/industries/insurance",
    title: "Insurance",
    headline: "More useful information. More consistent operations.",
    summary:
      "Help underwriting, claims and service teams work with policy knowledge and supporting documents. We shape AI workflows that make evidence easier to examine and keep expert review responsibilities clear.",
    workflows: [
      {
        title: "Policy and procedure knowledge",
        description:
          "Make approved policy, product and operational information easier for internal teams to find and interpret.",
      },
      {
        title: "Claims-document preparation",
        description:
          "Organise supporting information, prepare evidence summaries and identify items that need an expert's attention.",
      },
      {
        title: "Underwriting-support research",
        description:
          "Assist information gathering and comparison within a defined scope, with human review of the resulting work.",
      },
      {
        title: "Distribution and service enablement",
        description:
          "Support product questions, service preparation and consistent access to relevant internal guidance.",
      },
    ],
    constraints: [
      "Sensitive customer and policy information",
      "Document variation and incomplete evidence",
      "Product and process version control",
      "Expert judgement and approval responsibilities",
    ],
    measures: [
      "Document preparation effort and completeness",
      "Source traceability and reviewer acceptance",
      "Service turnaround and exception handling",
    ],
    services: [
      "/services/ai-strategy-value",
      "/services/agentic-ai-integration",
      "/services/governance-evaluation",
    ],
  },
  {
    path: "/industries/gcc",
    title: "Global capability centres",
    headline: "Make useful AI repeatable across the enterprise.",
    summary:
      "GCCs connect global business teams, technology and operations. Dockio helps translate shared AI ambition into reusable capabilities, clearer handoffs and practical adoption across functions.",
    workflows: [
      {
        title: "Internal knowledge and service",
        description:
          "Connect enterprise information to internal research, support and shared-service workflows.",
      },
      {
        title: "Finance and business operations",
        description:
          "Prepare reports, proposals and supporting documents with explicit quality criteria and review steps.",
      },
      {
        title: "Product and engineering enablement",
        description:
          "Scope ChatGPT and Codex workflows around useful tasks, team practices and review requirements.",
      },
      {
        title: "Evaluation and rollout",
        description:
          "Establish a shared way to test capabilities, gather feedback and decide when to extend adoption.",
      },
      {
        title: "Embedded delivery workstreams",
        description:
          "Add scoped business-analysis, evaluation or implementation capacity within the centre's delivery structure.",
      },
    ],
    constraints: [
      "Distributed stakeholders and delivery handoffs",
      "Shared-platform standards and local business needs",
      "Information permissions across functions",
      "Ownership of reusable capabilities and operating costs",
    ],
    measures: [
      "Workstream cycle time and handoff quality",
      "Reuse and evaluation coverage",
      "Adoption within target teams",
      "Operating cost and quality of completed tasks",
    ],
    services: [
      "/services/chatgpt-codex-enablement",
      "/services/embedded-ai-teams",
      "/services/agentic-ai-integration",
      "/services/governance-evaluation",
    ],
  },
  {
    path: "/industries/life-sciences",
    title: "Life sciences & pharmaceuticals",
    headline: "Connect specialist knowledge with everyday work.",
    summary:
      "Support information-heavy enterprise workflows with AI that preserves source context and review responsibilities. We focus on useful knowledge, document and operational capabilities within the boundaries your organisation defines.",
    workflows: [
      {
        title: "Approved knowledge retrieval",
        description:
          "Help internal users locate relevant information and examine the material behind an answer.",
      },
      {
        title: "Portfolio and project information",
        description:
          "Connect dispersed project knowledge to research, preparation and operational coordination.",
      },
      {
        title: "Document and evidence preparation",
        description:
          "Assist document comparison, summarisation and supporting-evidence assembly for expert review.",
      },
      {
        title: "Feedback and operational insight",
        description:
          "Explore sentiment, feedback themes and recommendation prototypes around a defined business question.",
      },
    ],
    constraints: [
      "Approved information sources and access boundaries",
      "Document provenance and version control",
      "Specialist terminology and review needs",
      "Validation and approval requirements defined by the client",
    ],
    measures: [
      "Retrieval quality and evidence completeness",
      "Preparation effort and reviewer acceptance",
      "Usefulness within the intended operational workflow",
    ],
    services: [
      "/services/agentic-ai-integration",
      "/services/governance-evaluation",
      "/services/data-customer-intelligence",
    ],
  },
  {
    path: "/industries/consumer-retail",
    title: "Consumer, retail & commerce",
    headline: "Better customer journeys, supported by practical AI.",
    summary:
      "Connect customer insight, product knowledge and operations. Dockio helps teams shape AI capabilities that improve discovery and service, then test their effect on the customer journey.",
    workflows: [
      {
        title: "Product discovery",
        description:
          "Help customers or service teams explore relevant products using current information and clear interaction design.",
      },
      {
        title: "Customer and service knowledge",
        description:
          "Support consistent answers and preparation across product, policy and service information.",
      },
      {
        title: "Customer intelligence",
        description:
          "Define segmentation and journey-analysis pilots around decisions that commercial teams can act on.",
      },
      {
        title: "Commercial and operational workflows",
        description:
          "Assist content, proposal and supplier-information work with review responsibilities built into the process.",
      },
    ],
    constraints: [
      "Freshness of product and policy information",
      "Customer context and data permissions",
      "Integration with commerce and service systems",
      "Consistency of brand, information and escalation",
    ],
    measures: [
      "Customer effort and answer quality",
      "Journey completion and service handling time",
      "Pilot outcomes against an agreed comparison",
    ],
    services: [
      "/services/data-customer-intelligence",
      "/services/agentic-ai-integration",
      "/services/ai-strategy-value",
    ],
  },
];

export const insights: Insight[] = [
  {
    path: "/insights/from-ai-access-to-useful-work",
    title: "From AI access to useful work",
    description:
      "A practical way to connect access, adoption and evidence of business value without treating activity as the outcome.",
    readTime: "4 min read",
    relatedService: "/services/chatgpt-codex-enablement",
    sections: [
      {
        heading: "Begin with the task",
        paragraphs: [
          "Making AI available is an enabling decision. Understanding whether it helps the business requires a more specific question: which task should change, for whom, and in what way? A research assistant, a document workflow and an engineering tool have different users, quality expectations and operating costs. Their value needs to be examined in that context.",
          "Choose a task with an identifiable start, output and owner. Observe how it is completed today, including the searching, coordination, review and correction that surround it. That baseline gives the team something useful to compare with the proposed way of working.",
        ],
      },
      {
        heading: "Separate activity from a useful result",
        paragraphs: [
          "Logins, conversations and repeated use can show whether people are trying a capability. They do not establish that a task was completed successfully. Pair activity measures with evidence of the output: did it answer the question, preserve the relevant sources, satisfy the reviewer and reach the next step in the process?",
          "Look at the whole task. A fast draft that takes longer to verify may create little benefit. A slower first attempt may still be useful if it improves completeness or helps a less experienced colleague reach the expected standard. Measure the change that matters for the chosen workflow.",
        ],
      },
      {
        heading: "Make adoption a delivery responsibility",
        paragraphs: [
          "People need a reason to change an established habit. Give them a workflow that fits their role, accessible guidance and a clear place to ask for help. Involve the people who review the output; their expectations often determine whether the new approach becomes part of daily work.",
          "Feedback should lead to a visible improvement backlog. Information gaps, access problems, awkward handoffs and unclear instructions are practical delivery findings. Assign owners and revisit them. A useful rollout learns from these details rather than interpreting every low-use group as a training problem.",
        ],
      },
      {
        heading: "Trace the route to business value",
        paragraphs: [
          "An observed improvement becomes a financial claim only when the connection is supported. Time released may improve service, reduce a backlog or increase capacity; it does not automatically reduce expenditure. Agree with the business owner how the benefit will be used and which evidence would demonstrate that change.",
          "Begin with a focused pilot and a small set of measures: task quality, completion time after review, sustained use and operating cost. Review the results with the people accountable for the process. The next decision may be to extend the capability, improve its design or choose another task. Each is useful when supported by evidence.",
        ],
      },
    ],
  },
  {
    path: "/insights/building-an-enterprise-ai-business-case",
    title: "Building an enterprise AI business case",
    description:
      "Connect the business problem, delivery assumptions and decision evidence before turning a promising idea into an investment proposal.",
    readTime: "4 min read",
    relatedService: "/services/ai-strategy-value",
    sections: [
      {
        heading: "Describe the problem before the capability",
        paragraphs: [
          "An AI proposal becomes easier to review when it begins with work the business recognises. Describe the current process, the people involved and the cost of the problem. Explain whether the aim is better quality, faster service, additional capacity or a new capability. Name the business owner who can judge whether the proposed change is useful.",
          "Record a baseline and its source. If the available evidence is incomplete, label that gap and explain how discovery or a pilot will address it. An explicit uncertainty is easier to discuss than a precise estimate whose assumptions are hidden.",
        ],
      },
      {
        heading: "Make the delivery assumptions visible",
        paragraphs: [
          "A promising demonstration does not answer every implementation question. The proposal should consider information access, system integration, review responsibilities and the practical route into the existing process. Identify which dependencies are within the team's control and which need another owner's agreement.",
          "Distinguish what has been tested from what is proposed. An observed result from a small sample may support a pilot without establishing a production outcome. Explain the sample, conditions and limitations so a sponsor can understand what the evidence actually supports.",
        ],
      },
      {
        heading: "Compare complete cost scenarios",
        paragraphs: [
          "Include the work required to build, connect, evaluate and operate the capability. Running cost may involve model usage, retrieval, tools, infrastructure and human review. Rollout also requires time from the users and teams expected to support it. State the scope of the estimate so omitted costs remain visible.",
          "Use scenarios where demand or design is uncertain. Show how the estimate changes with task volume, output length, retries or review needs. The purpose is to make the important assumptions discussable. A useful scenario helps the team choose a pilot scope and identify which operating measures to collect.",
        ],
      },
      {
        heading: "Design the next decision",
        paragraphs: [
          "Give the reviewer a clear choice: approve discovery, fund a bounded pilot, request more evidence or proceed with an agreed implementation scope. For a pilot, define the expected output, evaluation approach, responsible owners and the evidence required at the next review. Include the conditions that would lead the team to change direction.",
          "Keep the proposal connected to the organisation's established approval process. Business, technology, finance and risk stakeholders may need different supporting material, but they should be able to trace it to the same assumptions. That shared evidence makes the discussion more productive and creates a starting point for comparing the eventual outcome with the original case.",
        ],
      },
    ],
  },
  {
    path: "/insights/designing-ai-workflows-for-failure",
    title: "Designing AI workflows for failure",
    description:
      "A multi-step workflow needs a clear response when information, permissions or tools prevent the expected result.",
    readTime: "4 min read",
    relatedService: "/services/governance-evaluation",
    sections: [
      {
        heading: "Treat exceptions as part of the workflow",
        paragraphs: [
          "A connected AI workflow depends on information sources, permissions, tools and services. Any of these can prevent the expected result. Designing the successful path is only part of the work. The business also needs to know what happens when a step cannot complete and how a person can recover the task.",
          "Map each important dependency alongside the intended action. Identify unavailable sources, missing permissions, incomplete information, invalid outputs and service interruptions. Discuss the consequence in business terms: what work remains unfinished, who is affected and whether another step should be allowed to continue.",
        ],
      },
      {
        heading: "Make retry, review and recovery explicit",
        paragraphs: [
          "Some failures may justify a bounded retry. Others require corrected information, a different permission or a human decision. Define that distinction in the workflow. Repeated attempts can consume resources without fixing the underlying issue, so give retries limits and a clear escalation path.",
          "Consider actions that change another system. If a request times out, the workflow may not know whether the action completed. Recovery should account for that uncertainty and help prevent duplicate work. Agree how the system checks the result and when a person needs to resolve the task.",
        ],
      },
      {
        heading: "Tell the user what happened",
        paragraphs: [
          "A useful status message explains which step completed, what remains unresolved and what the user can do next. Preserve completed work where appropriate, and distinguish a partial result from a finished task. The interface should help the person continue without requiring them to understand the underlying implementation.",
          "Give the support or delivery team enough context to investigate: the relevant workflow step, error category and action taken. Record that context within the organisation's information-handling rules. Clear ownership matters here; an escalation route only helps if someone is responsible for receiving and resolving it.",
        ],
      },
      {
        heading: "Evaluate recovery alongside the output",
        paragraphs: [
          "Build representative exception scenarios into acceptance testing. Remove a permission, make a source unavailable, supply incomplete input and interrupt a tool response. Check whether the workflow stops appropriately, communicates accurately and offers the intended recovery path. Include the people who will use and support the capability in that review.",
          "Measure successful recovery, unresolved exceptions and operating cost alongside task quality. Use production findings to update both the workflow and its evaluation set. This creates an improvement cycle grounded in how the capability behaves under real conditions. Confidence to extend automation then comes from evidence of accountable execution, including what happens when the expected path breaks.",
        ],
      },
    ],
  },
];
