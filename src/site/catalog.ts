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
    headline: "Know which AI initiative deserves investment.",
    summary:
      "A promising use case needs a business owner, a workable scope and a case for the spend. We turn competing ideas into a decision brief that connects the process problem, delivery dependencies, full costs and evidence a pilot should produce.",
    deliverables: [
      "Map the current task, users, review effort and bottlenecks with the people who do the work.",
      "Compare candidate use cases by business value, feasibility, dependencies and accountable ownership.",
      "Build cost scenarios covering implementation, model use, integration, support and human review.",
      "Define pilot scope, acceptance criteria and the evidence needed to continue, change or stop.",
      "Prepare a sponsor brief with options, assumptions, open questions and the decision being requested.",
    ],
    examples: [
      "Choose between a knowledge assistant, a document workflow and an existing process improvement.",
      "Prepare the business case for an AI pilot before procurement or engineering commits to the build.",
      "Review an underused capability and decide whether to improve its workflow, extend its remit or retire it.",
    ],
    measures: [
      "Time needed to prepare and review a decision-ready proposal",
      "Coverage of costs, dependencies and benefit assumptions",
      "Agreement on the pilot owner, acceptance criteria and next decision",
    ],
    question: "What would make this AI initiative worth funding?",
  },
  {
    path: "/services/agentic-ai-integration",
    title: "Agentic AI & enterprise integration",
    shortTitle: "AI implementation",
    headline: "Make AI part of a complete business workflow.",
    summary:
      "The useful result comes after the answer: a reviewed brief, a completed task or an exception resolved. We build assistants and connected workflows around that result, linking approved knowledge and enterprise systems with clear permissions, review and recovery.",
    deliverables: [
      "Specify the task, required inputs, finished output and responsibilities at each workflow step.",
      "Connect approved knowledge sources with access controls and references reviewers can examine.",
      "Integrate agreed APIs and MCP tools with bounded actions and human approval points.",
      "Build exception paths for missing information, denied access, failed tools and incomplete results.",
      "Deliver the scoped pilot with acceptance results, operating documentation and a handover to named owners.",
    ],
    examples: [
      "A research-to-brief workflow that gathers approved sources, drafts a structured output and routes it for review.",
      "An internal assistant that answers process questions from current guidance and shows the supporting material.",
      "A document workflow that extracts and compares information, then routes discrepancies to the responsible team.",
    ],
    measures: [
      "Completed tasks accepted by the business reviewer",
      "End-to-end cycle time, including correction and approval",
      "Exception recovery and operating cost per accepted task",
    ],
    question: "What must happen after the AI produces an answer?",
  },
  {
    path: "/services/chatgpt-codex-enablement",
    title: "ChatGPT & Codex enablement",
    shortTitle: "Workplace enablement",
    headline: "Put ChatGPT and Codex into the working day.",
    summary:
      "Start with the recurring work your teams want to improve. We shape role-specific workflows, practical learning and review habits so people can move from individual experimentation to a shared way of producing useful work.",
    deliverables: [
      "Select recurring tasks with business, product and engineering teams and record how they work today.",
      "Design reusable instructions, examples and review checklists for each agreed role and workflow.",
      "Recommend workspace practices and information-handling rules aligned with your approved environment.",
      "Run practical sessions using representative tasks and prepare champions to support their colleagues.",
      "Plan rollout around completed work, user feedback and a backlog of access or workflow improvements.",
    ],
    examples: [
      "Help analysts turn source material into a referenced brief with a consistent review checklist.",
      "Introduce Codex for scoped code changes, repository questions and test preparation with engineering review.",
      "Give operations teams reusable ways to prepare procedures, meeting follow-ups and service responses.",
    ],
    measures: [
      "Task quality after review and correction",
      "Repeated use within the selected workflow",
      "Time released after preparation, verification and rework",
    ],
    question: "Which recurring task should your team do better with AI?",
  },
  {
    path: "/services/governance-evaluation",
    title: "AI governance, evaluation & operations",
    shortTitle: "Governance & evaluation",
    headline: "Know when an AI workflow is ready to release.",
    summary:
      "Teams need a clear basis for accepting a release and a way to respond when it fails. We connect quality tests, controls, operating costs and ownership to the task being delivered, with evidence the business and technology teams can review together.",
    deliverables: [
      "Map the workflow's data, actions and dependencies to your existing controls and accountable owners.",
      "Define acceptance criteria and assemble representative normal, edge and failure cases with business reviewers.",
      "Build repeatable evaluations for prompts, retrieval, tool use and workflow changes.",
      "Agree release checks, incident routes, rollback decisions and the evidence retained for review.",
      "Analyse consumption, retries and review effort to prioritise practical quality and cost improvements.",
    ],
    examples: [
      "Test whether a knowledge assistant finds the right sources and acknowledges when evidence is missing.",
      "Check that a connected workflow stops appropriately when access is denied or a tool is unavailable.",
      "Create a repeatable regression pack before changing a model, prompt, knowledge source or integration.",
    ],
    measures: [
      "Acceptance results across representative tasks and failure cases",
      "Reviewer effort and time required to assess a release",
      "Unresolved exceptions, recovery success and cost per completed task",
    ],
    question: "What evidence should your team see before approving the next release?",
  },
  {
    path: "/services/embedded-ai-teams",
    title: "Embedded AI delivery & specialist teams",
    shortTitle: "Embedded delivery",
    headline: "Give the next workstream clear delivery ownership.",
    summary:
      "An enterprise programme may need a product workstream, evaluation support or specialist delivery capacity. We scope the remit within your existing team, then agree the roles, outputs and working arrangements required to move it forward.",
    deliverables: [
      "Define the workstream, responsibilities, expected outputs and acceptance criteria with your programme lead.",
      "Agree the specialist configuration, location, duration and onboarding needs before confirming the engagement.",
      "Translate business requirements into prioritised work with traceable decisions and engineering handoffs.",
      "Maintain a delivery cadence covering progress, dependencies, issues and decisions needing your input.",
      "Prepare documentation, knowledge transfer and a handover the receiving team can act on.",
    ],
    examples: [
      "An AI product and business-analysis workstream covering discovery, requirements, backlog and business acceptance.",
      "A dedicated evaluation workstream that prepares test cases, coordinates reviewers and tracks release readiness.",
      "A scoped data-science or integration workstream with agreed deliverables inside a wider programme.",
    ],
    measures: [
      "Outputs accepted against the agreed workstream scope",
      "Time lost to unresolved dependencies and repeated handoffs",
      "Handover completeness and the receiving team's readiness",
    ],
    question: "Which workstream needs clearer ownership or additional specialist capacity?",
  },
  {
    path: "/services/data-customer-intelligence",
    title: "Data, analytics & customer intelligence",
    shortTitle: "Data & intelligence",
    headline: "Put customer insight into the next business decision.",
    summary:
      "A segment or score is useful when a team can act on it. We connect data diagnostics, customer analytics and recommendation design to a specific decision, an operational workflow and a pilot that can establish whether the change helps.",
    deliverables: [
      "Assess data quality, coverage, permissions and suitability for the chosen customer or operating decision.",
      "Define segments, propensity targets or prioritisation rules with the team responsible for acting on them.",
      "Develop the agreed analytical prototype and document its assumptions, limits and evaluation results.",
      "Design a pilot with a relevant baseline or comparison group and explicit business success criteria.",
      "Specify how scores and recommendations enter the workflow, receive feedback and reach an accountable owner.",
    ],
    examples: [
      "A lead-prioritisation pilot that gives relationship teams a reason to act and records the resulting outcome.",
      "A next-best-action prototype that combines customer context, eligibility rules and expert review.",
      "A service-feedback analysis that turns recurring themes into a prioritised operational improvement backlog.",
    ],
    measures: [
      "Data coverage and analytical performance for the intended decision",
      "Recommendation use and outcomes recorded by the operating team",
      "Pilot results against the agreed baseline or comparison group",
    ],
    question: "Which decision should better customer evidence change?",
  },
];

export const industries: Industry[] = [
  {
    path: "/industries/financial-services",
    title: "Banking & financial services",
    headline: "AI that fits the way a bank has to work.",
    summary:
      "Relationship preparation, internal knowledge and document operations involve several teams, restricted information and established approvals. We build around those realities, connecting a defined business task to approved sources, accountable review and a measurable pilot.",
    workflows: [
      {
        title: "Relationship briefing packs",
        description:
          "Bring together permitted customer context, product information and approved research into a structured brief for a relationship manager to review before a meeting.",
      },
      {
        title: "Internal policy and process answers",
        description:
          "Retrieve current guidance with source references, respect user access and route unresolved questions to the policy or process owner.",
      },
      {
        title: "Document comparison and exceptions",
        description:
          "Extract agreed fields, compare documents against a checklist and assemble an evidence pack for the operations reviewer to resolve discrepancies.",
      },
      {
        title: "Customer intelligence and next actions",
        description:
          "Scope segmentation, lead-prioritisation or next-best-action pilots with data permissions, eligibility rules and a comparison approach agreed in advance.",
      },
      {
        title: "Reusable platform workflows",
        description:
          "Turn a recurring task into a governed workflow with a business owner, permission checks, acceptance tests and a defined route when a dependency fails.",
      },
    ],
    constraints: [
      "User entitlements and approved information sources",
      "Data handling and internal approval processes",
      "Legacy systems and integration dependencies",
      "API consumption, retries and review effort",
      "Business decision rights and exception ownership",
    ],
    measures: [
      "Preparation time after verification and correction",
      "Evidence completeness and reviewer acceptance",
      "Task completion, exceptions and successful recovery",
      "Observed pilot outcomes and cost per accepted task",
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
    headline: "Make policy and claims information easier to work with.",
    summary:
      "Policy wording, supporting documents and operational guidance are spread across many sources. We help underwriting, claims and service teams assemble the information a specialist needs, preserve its provenance and make the next review step clear.",
    workflows: [
      {
        title: "Policy and procedure lookup",
        description:
          "Find relevant clauses and internal guidance, show the version and supporting source, and flag questions that need a product specialist's interpretation.",
      },
      {
        title: "Claims-document preparation",
        description:
          "Organise submitted material against a claims checklist, identify missing items and prepare a referenced summary for the claims handler's review.",
      },
      {
        title: "Underwriting submission briefs",
        description:
          "Extract agreed facts from a submission, compare them with the required information and surface gaps for an underwriter to examine.",
      },
      {
        title: "Distribution and service support",
        description:
          "Prepare responses to product and servicing questions from approved material, with escalation for exceptions and specialist decisions.",
      },
    ],
    constraints: [
      "Sensitive customer and policy information",
      "Incomplete submissions and varying document formats",
      "Policy versions and approved wording",
      "Expert judgement and approval responsibilities",
    ],
    measures: [
      "Time required to prepare a complete review pack",
      "Accuracy, missing-item detection and source traceability",
      "Reviewer acceptance and service turnaround",
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
    headline: "Turn local AI experiments into a shared way of working.",
    summary:
      "A GCC has to connect global demand with shared platforms and local operating needs. We help teams choose repeatable tasks, build reusable workflows and agree how business, product and engineering teams will own delivery and improvement.",
    workflows: [
      {
        title: "Internal knowledge and service requests",
        description:
          "Find relevant internal guidance, draft a response with supporting sources and route requests that need an accountable service owner.",
      },
      {
        title: "Finance and management preparation",
        description:
          "Assemble approved inputs into a management brief, commentary draft or project update, with traceable sources and a review checklist.",
      },
      {
        title: "Product and engineering workflows",
        description:
          "Use ChatGPT or Codex for requirements clarification, repository questions, scoped changes and test preparation within the team's review practices.",
      },
      {
        title: "Shared evaluation and rollout",
        description:
          "Create representative test packs, record acceptance decisions and use feedback from one team to improve a capability before wider rollout.",
      },
      {
        title: "Embedded programme workstreams",
        description:
          "Add scoped product analysis, evaluation or implementation support with defined outputs, a delivery cadence and an explicit handover.",
      },
    ],
    constraints: [
      "Global stakeholders and cross-team handoffs",
      "Shared-platform standards and local process needs",
      "Information permissions across teams and regions",
      "Ownership of reusable capabilities and operating costs",
    ],
    measures: [
      "Task cycle time and effort spent on handoffs",
      "Accepted reuse across the intended teams",
      "Repeat use and quality after rollout",
      "Operating cost per completed workflow",
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
    headline: "Put approved knowledge within reach of the next task.",
    summary:
      "Specialist teams spend time finding the right material, checking its version and preparing it for review. We focus on internal knowledge, document and operational workflows, with source traceability and the validation boundaries your organisation defines.",
    workflows: [
      {
        title: "Approved internal knowledge",
        description:
          "Retrieve relevant passages from approved product, procedure and operational material, with references and clear handling of unanswered questions.",
      },
      {
        title: "Project and portfolio briefs",
        description:
          "Assemble status, decisions and open dependencies from permitted project sources into a brief that programme owners can verify and update.",
      },
      {
        title: "Document comparison and evidence packs",
        description:
          "Compare agreed sections or versions, highlight changes and prepare referenced evidence for a specialist to review and accept.",
      },
      {
        title: "Operational feedback analysis",
        description:
          "Group permitted service or internal feedback into themes, connect each finding to its source and prepare an action backlog for the process owner.",
      },
    ],
    constraints: [
      "Approved sources and information access boundaries",
      "Document provenance and version control",
      "Specialist terminology and review requirements",
      "Client-defined validation and approval boundaries",
    ],
    measures: [
      "Relevant retrieval and complete source references",
      "Preparation effort and reviewer acceptance",
      "Time to find, verify and use approved information",
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
    headline: "Connect customer questions with useful commercial action.",
    summary:
      "Product information, service feedback and customer analytics should help a team decide what to do next. We build focused discovery and service workflows, then test their effect on the journey using current information and an agreed comparison.",
    workflows: [
      {
        title: "Product discovery and comparison",
        description:
          "Answer product questions from the current catalogue, compare relevant options and guide the customer to the next step when the information is sufficient.",
      },
      {
        title: "Service response preparation",
        description:
          "Combine approved product and policy information into a draft response, with source references and escalation for cases outside the service team's authority.",
      },
      {
        title: "Customer segments and journey signals",
        description:
          "Define actionable segments or prioritisation models, connect them to campaign or service decisions and assess outcomes through a bounded pilot.",
      },
      {
        title: "Commercial and supplier briefs",
        description:
          "Prepare category, supplier or campaign briefs from approved inputs, surface missing information and route the output for commercial review.",
      },
    ],
    constraints: [
      "Current product, availability and policy information",
      "Customer context and data permissions",
      "Commerce and service-system integration",
      "Brand consistency and escalation responsibilities",
    ],
    measures: [
      "Answer quality and customer effort",
      "Journey completion and service handling time",
      "Pilot results against an agreed comparison group",
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
