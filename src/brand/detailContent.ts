export type Point = {
    title: string;
    text: string;
};
export type Scene = 'collaboration' | 'finance' | 'technology' | 'logistics' | 'manufacturing' | 'healthcare' | 'property';
export type DetailContent = {
    headline: string;
    context: string;
    image: Scene;
    workflow: {
        title: string;
        intro: string;
        steps: Point[];
    };
    deliverables: Point[];
    considerations: Point[];
    measures: Point[];
    next: string;
    related: string[];
};
const point = (title: string, text: string): Point => ({ title, text });
export const detailContent: Record<string, DetailContent> = {
    '/services/governance-adoption-sprint': {
        headline: 'Choose the work worth taking forward.',
        context: 'Ideas arrive from every function, but sponsors need a defensible next step. A useful starting point is a recurring decision or task with an accountable owner, accessible information and a result that can be assessed. Dockio helps turn that opportunity into an implementation brief your business and delivery teams can use.',
        image: 'collaboration',
        workflow: {
            title: 'Turn a long idea list into a decision.',
            intro: 'Consider a finance team comparing close commentary, policy search and reconciliation support. Each has a different owner, data dependency and cost of getting it wrong.',
            steps: [point('Understand the work', 'Walk through a real cycle with the people doing it. Capture handoffs, workarounds, review effort and the decisions that must remain with a person.'), point('Compare the options', 'Assess potential value alongside frequency, information readiness, integration effort and review needs. Record assumptions and confidence instead of hiding uncertainty in a score.'), point('Specify the next increment', 'Define a bounded workflow, acceptance examples, accountable owner and evaluation approach. Give the sponsor an explicit proceed, investigate or defer decision.')],
        },
        deliverables: [point('An opportunity and dependency map', 'A view of the current process, stakeholder needs, source systems and blockers, with a prioritized set of use cases.'), point('A buildable requirement', 'Process flows, user stories, source and output definitions, exception paths and acceptance criteria that business and technical teams can review together.'), point('A value and decision brief', 'Baseline measures, benefit assumptions, delivery options and unresolved questions, with owners for the evidence needed before committing further.')],
        considerations: [point('Integration feasibility', 'Confirm which systems hold the authoritative information and who can approve access. Test the smallest useful source connection before assuming an end-to-end design.'), point('Decision boundaries', 'Separate preparation and recommendations from approvals or actions. Include representative failures and ambiguous cases in acceptance discussions.'), point('User participation', 'Involve the workflow owner and the people who review its output. Time released from a task only becomes useful when the team can put it to work elsewhere.')],
        measures: [point('Baseline effort', 'Time spent preparing, reviewing and correcting a representative task today.'), point('Requirement readiness', 'Open source-access questions, unresolved acceptance criteria and ownership gaps.'), point('Decision quality', 'Whether the sponsor can explain the priority, its assumptions and what would change the decision.')],
        next: 'Bring one recurring task, its owner and an example of the output you need. We can shape a practical discovery and definition remit around it.',
        related: ['/services/codex-workflow-implementation', '/industries/financial-services'],
    },
    '/services/chatgpt-enterprise-foundation': {
        headline: 'Make useful AI work repeatable—and reviewable.',
        context: 'A good answer in a demo does not define a dependable workflow. Teams need to know which information a task can use, what tools it may call, what a good result looks like and when to stop for human review. Dockio connects those rules to the actual work, whether the interface is a chat workspace, an internal tool or an integrated application.',
        image: 'technology',
        workflow: {
            title: 'Design a policy-change briefing people can trust.',
            intro: 'A policy owner needs a first-pass comparison of a new document against an approved version, with changes linked to the passages that support them.',
            steps: [point('Bound the task', 'Specify document versions, permitted sources, output structure and the questions the comparison must answer. Make missing or contradictory information visible.'), point('Connect and evaluate', 'Map source permissions, define the task instructions and test representative examples. Where development is agreed, connect the necessary tools with restricted actions.'), point('Place review in the flow', 'Route the draft to the policy owner, retain source references and record corrections. Publish or apply changes only through the organization’s agreed approval process.')],
        },
        deliverables: [point('A task and tool specification', 'Inputs, instructions, source boundaries, allowed actions, escalation rules and expected output for each agreed workflow.'), point('An evaluation pack', 'Representative examples, expected evidence, failure cases and review criteria that can be rerun when sources, tools or instructions change.'), point('An operating playbook', 'Named owners, version/change responsibilities, incident and fallback steps, and practical guidance for the people reviewing results.')],
        considerations: [point('Permission-aware sources', 'Work with platform and data owners on access boundaries, source freshness and revocation. A connection should not widen a user’s underlying entitlement.'), point('Tool actions', 'Distinguish read, draft and write actions. Confirm consequential actions, scope credentials and define a manual route when a dependency is unavailable.'), point('Ongoing ownership', 'Give a business owner responsibility for task quality and a technical owner responsibility for dependencies. Make updates and user feedback part of the same backlog.')],
        measures: [point('Evidence quality', 'Coverage and correctness of source references in sampled outputs.'), point('Review effort', 'Time and material corrections needed before an output is accepted.'), point('Reliable completion', 'Successful bounded tasks, exceptions and safe escalations against agreed test cases.')],
        next: 'Bring an example task and the sources it should use. We can define the boundaries, evaluation and implementation work needed to make it repeatable.',
        related: ['/services/chatgpt-work-managed-adoption', '/use-cases/data-analytics'],
    },
    '/services/codex-workflow-implementation': {
        headline: 'Connect the plan to the systems—and the people.',
        context: 'An AI initiative can stall between the business owner, platform team, risk reviewers and a delivery partner. Requirements change while access, integrations and acceptance remain unresolved. Dockio can take a defined BA, PM or PMO remit to make those dependencies visible and coordinate the work through to a usable release.',
        image: 'technology',
        workflow: {
            title: 'Move a reporting pilot into a supported workflow.',
            intro: 'A sponsor wants a pilot used by a real team, but the data extract, identity setup, support model and acceptance process belong to different owners.',
            steps: [point('Create one delivery view', 'Turn the requirement into work packages with owners, dependencies, acceptance decisions and a realistic sequence. Separate access blockers from development work.'), point('Coordinate implementation', 'Keep business, technology and control reviews connected. Where agreed, develop a bounded integration or tool and test normal, failure and permission-denied paths.'), point('Prepare the handover', 'Coordinate user acceptance, release decisions, rollback options and support documentation. Confirm who owns fixes and source changes after the first release.')],
        },
        deliverables: [point('A connected delivery plan', 'Milestones, workstream owners, dependencies, risks and decisions, with sponsor reporting tied to evidence and required actions.'), point('An implementation and test backlog', 'Integration contracts, acceptance tests and scoped development tasks. The remit states what Dockio builds, coordinates and hands to your existing specialists.'), point('A release and ownership pack', 'Business acceptance evidence, operating instructions, support responsibilities and a prioritized list of the next improvements.')],
        considerations: [point('Existing architecture', 'Work within approved identity, environments and deployment practices. Confirm data contracts and operational ownership before selecting an integration pattern.'), point('Release controls', 'Agree access, testing, change approval and rollback expectations with the teams responsible for production. Keep sensitive implementation details inside your environment.'), point('Delivery into use', 'Plan practitioner time for acceptance and learning. A technically complete release still needs a named workflow owner and a workable support route.')],
        measures: [point('Blocked work', 'Age and cause of unresolved dependencies and decisions.'), point('Release readiness', 'Accepted requirements, tested failure paths and handover gaps.'), point('Operational use', 'Completion of the agreed workflow after release, alongside incidents and support demand.')],
        next: 'Bring the initiative’s current stage, its decision owners and what is preventing the next milestone. We can define an embedded delivery remit with clear responsibilities.',
        related: ['/industries/it-services', '/services/chatgpt-work-managed-adoption'],
    },
    '/services/chatgpt-work-managed-adoption': {
        headline: 'Make the change work for the people doing the work.',
        context: 'Access and introductory training are only a start. Adoption depends on whether a workflow fits a person’s responsibilities, produces a result they can review and is easier to use than their existing workaround. Dockio helps teams learn through real tasks, understand when to question the output and turn feedback into practical improvements.',
        image: 'collaboration',
        workflow: {
            title: 'Help a shared-services team use a new briefing workflow.',
            intro: 'A pilot generates useful handover drafts, but colleagues have different source habits, review expectations and confidence using the new process.',
            steps: [point('Learn where use breaks down', 'Observe a normal work cycle and listen to practitioners and reviewers. Distinguish an unclear process, missing source or poor output from a training need.'), point('Practice in the role', 'Create task-based guidance and supported sessions using approved examples. Teach source checking, editing, escalation and the situations where the old process is still needed.'), point('Improve and transfer ownership', 'Review feedback with the workflow owner, prioritize changes and equip internal champions. Hand over guidance and an operating cadence the team can sustain.')],
        },
        deliverables: [point('A role-based adoption plan', 'Priority user groups, relevant tasks, readiness gaps, communication and practice sessions connected to the release plan.'), point('Working guidance', 'Examples of accepted outputs, short task instructions, reviewer checklists and escalation guidance in the format your team actually uses.'), point('A learning and improvement backlog', 'Observed blockers, source and workflow fixes, owner actions and a handover plan for continued support.')],
        considerations: [point('Access and workflow fit', 'Check that intended users can reach the approved sources and tools within their normal work environment. Avoid introducing extra copying or parallel reporting.'), point('Accountable review', 'Make responsibility for checking and approving an output clear. Teach users to recognize unsupported statements and stop when the task exceeds its agreed scope.'), point('Inclusive enablement', 'Adapt examples and session formats to roles, language needs, experience and working patterns. Give quieter participants a way to contribute feedback.')],
        measures: [point('Repeat useful use', 'People completing the relevant task across normal work cycles, not simply opening a tool.'), point('Task experience', 'Preparation and review effort, support requests and reasons for reverting to old methods.'), point('Sustained ownership', 'Open feedback resolved, guidance kept current and internal owners able to support the workflow.')],
        next: 'Bring a pilot, the people expected to use it and the behavior you want to change. We can shape practical enablement around that work.',
        related: ['/industries/global-capability-centers', '/services/chatgpt-enterprise-foundation'],
    },
    '/industries/financial-services': {
        headline: 'Confidence in the work behind the decision.',
        context: 'Finance teams work across reporting cycles, policy changes and evidence requests while reconciling information from different owners. AI can assist with preparing and comparing that material, but the link to authoritative numbers, document versions and accountable review has to survive the process. Finance is Dockio’s preferred starting point for connecting those requirements to delivery.',
        image: 'finance',
        workflow: {
            title: 'From scattered inputs to reviewable commentary.',
            intro: 'A finance team needs to explain movements without losing the link to the underlying numbers. A bounded close-commentary workflow provides a concrete starting point.',
            steps: [point('Assemble the evidence', 'Bring together approved period figures, comparison data and owner explanations. Record the reporting cutoff, entity and version; flag unreconciled inputs.'), point('Prepare the explanation', 'Draft commentary that separates observed movements from proposed explanations. Link assertions to sources and route missing context to the responsible owner.'), point('Review and release', 'The finance reviewer checks figures, materiality and interpretation before approving the narrative. Preserve corrections and unresolved exceptions for the next cycle.')],
        },
        deliverables: [point('A source-to-output map', 'Source ownership, reporting boundaries and handoffs across approved extracts, document stores and the reporting destination.'), point('A review-ready specification', 'Commentary format, exception rules, source references and acceptance examples agreed with preparers and reviewers.'), point('A delivery and adoption plan', 'Integration dependencies, evaluation cases, practitioner guidance and a review cadence aligned to the reporting cycle.')],
        considerations: [point('Systems and versions', 'ERP or ledger extracts, reconciliations and reporting packs need consistent entity and period definitions. Begin with approved read-only inputs where that fits the remit.'), point('Control and judgement', 'Keep financial sign-off and policy interpretation with the designated owners. Review access, source retention and evidence requirements with your control teams.'), point('Other useful starting points', 'Policy-change comparison, audit-evidence indexing and exception triage each need their own ownership and evaluation criteria. Reuse the delivery discipline, not an untested generic prompt.')],
        measures: [point('Cycle effort', 'Preparation and reviewer time per comparable reporting pack.'), point('Traceability', 'Sampled statements supported by the correct source and reporting version.'), point('Review quality', 'Material corrections, unresolved exceptions and repeat issues between cycles.')],
        next: 'Start with one recurring reporting or evidence task. Bring its owners, current outputs and the constraints that matter to the next cycle.',
        related: ['/use-cases/finance', '/services/governance-adoption-sprint'],
    },
    '/industries/it-services': {
        headline: 'Keep client commitments connected to delivery reality.',
        context: 'Delivery teams move between proposals, requirements, engineering changes and client updates. Important context can fragment across tickets, documents and meetings. Dockio helps define AI-assisted coordination workflows that preserve the client boundary, make missing evidence visible and support accountable delivery decisions.',
        image: 'technology',
        workflow: {
            title: 'Build a release brief from the work that actually changed.',
            intro: 'A delivery lead needs a reliable account of scope changes, outstanding acceptance and dependencies before a client review.',
            steps: [point('Collect the delivery record', 'Use the approved backlog, change decisions and test evidence for the specific engagement. Keep completed work distinct from planned work.'), point('Connect changes to commitments', 'Draft a brief linking each material change to its requirement, owner, acceptance status and effect on the release. Surface conflicting records.'), point('Review with the delivery lead', 'Validate the narrative and decisions needed before it becomes client communication. Update the underlying work items through the agreed process.')],
        },
        deliverables: [point('A commitment-to-evidence model', 'Links between requirements, work items, release decisions and acceptance records, with a defined source of truth.'), point('A client-safe workflow specification', 'Engagement-specific source boundaries, briefing templates, exclusions and reviewer responsibilities.'), point('A coordinated rollout', 'A test backlog, integration dependencies and a handover guide for delivery leads, account teams and engineering owners.')],
        considerations: [point('Delivery tooling', 'Align ticket, repository and documentation identifiers. Read-only summaries can come first; write-back needs explicit ownership and action controls.'), point('Client separation', 'Keep access and retrieval scoped to the engagement. Reusable instructions must not carry another client’s confidential examples or delivery record.'), point('Co-delivery fit', 'Agree what Dockio owns alongside your programme and specialists. Make the review burden manageable for busy delivery leads.')],
        measures: [point('Reporting effort', 'Time to prepare and validate a release or steering brief.'), point('Commitment coverage', 'Material changes linked to requirements and acceptance evidence.'), point('Decision latency', 'Time unresolved dependencies wait for an accountable decision.')],
        next: 'Bring an active delivery workstream and its reporting friction. We can define a focused coordination or workflow implementation remit.',
        related: ['/services/codex-workflow-implementation', '/use-cases/engineering'],
    },
    '/industries/global-capability-centers': {
        headline: 'Build consistency without losing local context.',
        context: 'Global capability centers coordinate work across functions, locations and time zones. A pilot that fits one team can fail elsewhere because procedures, access and handoff responsibilities differ. Dockio helps define a common workflow core, make legitimate local variations explicit and prepare teams to adopt it in their own operating context.',
        image: 'collaboration',
        workflow: {
            title: 'Make cross-location exception handovers easier to act on.',
            intro: 'The next shift needs more than a status summary. It needs the open issue, latest action, relevant procedure and a named next owner.',
            steps: [point('Map the handoff', 'Identify queues, service boundaries, local procedures and the minimum information needed to continue work safely.'), point('Prepare the briefing', 'Group exceptions from approved case records, retain their identifiers and highlight missing owners or conflicting instructions.'), point('Confirm and learn', 'The outgoing owner validates the brief; the receiving team confirms ownership. Capture recurring gaps and improve the process and guidance together.')],
        },
        deliverables: [point('A common workflow with local variants', 'Core inputs, outputs and acceptance criteria, plus explicit differences in procedures, access or service agreements.'), point('An ownership and escalation model', 'Responsibilities across process owners, platform teams, delivery locations and internal champions.'), point('A rollout and learning pack', 'Representative examples, role-based practice, feedback channels and criteria for expanding beyond the first team.')],
        considerations: [point('Shared-service systems', 'Confirm queue identifiers, business calendars and procedure versions across locations. Keep regional information and access boundaries intact.'), point('Quality ownership', 'Assign a process owner to resolve conflicting instructions. Generated handovers support accountable work allocation; they do not silently change it.'), point('Adoption across locations', 'Include different shifts, experience levels and language needs in testing. Give receiving teams a voice in what makes a handover useful.')],
        measures: [point('Handoff completeness', 'Cases with a clear next action, owner and supporting source.'), point('Rework', 'Clarification loops and reopened exceptions between locations.'), point('Repeat adoption', 'Successful use across comparable shifts, with location-specific blockers visible.')],
        next: 'Bring one process that crosses team or location boundaries. We can map the shared core and the conditions for extending it.',
        related: ['/services/chatgpt-work-managed-adoption', '/use-cases/ops'],
    },
    '/industries/logistics': {
        headline: 'Turn operational exceptions into clear next actions.',
        context: 'Shipment updates, carrier messages and customer requests rarely arrive in one consistent format. Teams need to understand what changed, which commitment is affected and who should act next. Dockio helps design AI-assisted exception workflows that keep event timing, operational ownership and customer communication connected.',
        image: 'logistics',
        workflow: {
            title: 'Prepare an actionable delayed-shipment brief.',
            intro: 'An operations coordinator needs to reconcile a carrier update with an order record and an existing customer escalation.',
            steps: [point('Reconstruct the event', 'Collect approved shipment milestones, order context and carrier messages. Keep event time and report time distinct and expose missing updates.'), point('Frame the exception', 'Summarize the affected commitment, known facts, unresolved questions and available next steps. Avoid turning uncertain estimates into promises.'), point('Route and communicate', 'The coordinator chooses the action and reviews any customer-facing draft. Record ownership and follow-up through the existing operational system.')],
        },
        deliverables: [point('An exception taxonomy', 'Common disruption types, required evidence, ownership and escalation rules tied to real operating decisions.'), point('A source and integration brief', 'Mappings across transport, warehouse, order and approved communication records, including identifier and freshness checks.'), point('A practical operator playbook', 'Reviewable brief formats, escalation examples, manual fallback and a feedback process for new exception types.')],
        considerations: [point('Operational freshness', 'Late or duplicate events can change the story. Define source precedence, timestamps and how stale information is displayed.'), point('Action boundaries', 'Keep dispatch changes, customer commitments and financial adjustments with authorized operators. A draft update should not trigger an external message.'), point('Frontline usability', 'Test during representative shift conditions and on the devices operators use. Prefer concise next-action views over another reporting layer.')],
        measures: [point('Triage time', 'Time from an exception entering the queue to a reviewed next action.'), point('Ownership clarity', 'Exceptions with an assigned owner and a dated follow-up.'), point('Communication quality', 'Corrections to drafts and avoidable clarification between operations and customer teams.')],
        next: 'Bring a recurring exception type and the information needed to resolve it. We can define a small, reviewable workflow around the coordinator’s decision.',
        related: ['/use-cases/ops', '/services/chatgpt-enterprise-foundation'],
    },
    '/industries/real-estate': {
        headline: 'Make the property record easier to work with.',
        context: 'Property and portfolio teams reconcile leases, operating reports, maintenance records and diligence documents. A missing amendment or an unsupported summary can travel into the next decision pack. Dockio helps connect document-heavy workflows to a consistent property record and an explicit professional review process.',
        image: 'property',
        workflow: {
            title: 'Prepare a diligence pack with the gaps in view.',
            intro: 'A portfolio team needs an organized first-pass view of the documents available for a property and the questions that still need an owner.',
            steps: [point('Build the document inventory', 'Index approved files by property, document type, date and version. Identify missing schedules or amendments before preparing a narrative.'), point('Extract with references', 'Prepare a structured summary of requested fields, quoting or linking the supporting passage. Mark ambiguity and conflicting versions for review.'), point('Assign the open questions', 'Route gaps to the property, legal or finance owner as appropriate. The responsible professionals validate interpretation and any investment or contractual decision.')],
        },
        deliverables: [point('A property information map', 'Document naming, entity identifiers, version relationships and ownership across the repository and portfolio system.'), point('A referenced review pack', 'An agreed field schema, extraction criteria, discrepancy log and acceptance examples for reviewer validation.'), point('A repeatable preparation process', 'Integration requirements, access boundaries, update responsibilities and guidance for refreshing the pack as documents change.')],
        considerations: [point('Documents and entities', 'Resolve property identifiers and document versions before joining information. Keep superseded material distinguishable from the current record.'), point('Professional judgement', 'AI preparation should surface evidence and questions. Legal interpretation, valuation and investment approval remain with the designated professionals.'), point('Portfolio adoption', 'Start with one document set and its reviewers. Incorporate the checks they actually perform rather than reproducing a generic summary template.')],
        measures: [point('Preparation effort', 'Time to assemble and check a comparable property pack.'), point('Source completeness', 'Requested fields linked to the correct document and version.'), point('Open-question handling', 'Missing documents and discrepancies assigned, resolved or explicitly carried forward.')],
        next: 'Bring a recurring document pack, its reviewers and the decisions it supports. We can define the preparation workflow and evidence trail.',
        related: ['/services/chatgpt-enterprise-foundation', '/use-cases/data-analytics'],
    },
    '/industries/healthcare-operations': {
        headline: 'Give operational teams more clarity around the work.',
        context: 'Non-clinical healthcare teams coordinate procedures, quality actions, training and service administration. Information can be spread across documents and local practices, making changes difficult to communicate consistently. Dockio focuses on these operational workflows, with a clear boundary from clinical advice and patient-care decisions.',
        image: 'healthcare',
        workflow: {
            title: 'Turn a procedure update into a usable change brief.',
            intro: 'An operations owner needs teams to understand what changed in an approved administrative procedure and which local guidance needs updating.',
            steps: [point('Compare approved versions', 'Use the current and proposed procedure with controlled access. Retain references to changed sections and identify related documents.'), point('Prepare an impact brief', 'Draft the affected activities, open questions and training implications. Keep inferred impacts distinct from changes explicitly stated in the source.'), point('Approve and enable', 'The procedure owner validates the brief and assigns updates. Prepare role-specific guidance and capture questions from the staff using it.')],
        },
        deliverables: [point('A bounded operational use case', 'A non-clinical task definition, approved sources, permitted information and clear exclusions.'), point('A change and review specification', 'Document version mapping, impact categories, reviewer responsibilities and examples of acceptable evidence.'), point('An implementation and learning plan', 'Access dependencies, evaluation cases, procedure-owner handover and practical training follow-up.')],
        considerations: [point('Information boundaries', 'Design the initial workflow around approved procedural material. Where sensitive data is proposed, resolve necessity, access and handling with the responsible teams before implementation.'), point('Accountable approval', 'Procedure and quality owners validate changes and communications. No clinical recommendation or patient-care action is part of this example.'), point('Operational inclusion', 'Consider shift patterns, different roles and access to work devices. Keep guidance short enough to use during normal operational work.')],
        measures: [point('Review completeness', 'Changed sections and affected guidance accounted for in the approved brief.'), point('Update effort', 'Time to prepare, validate and distribute an operational change pack.'), point('Learning gaps', 'Recurring questions, overdue guidance updates and unresolved owner actions.')],
        next: 'Bring a non-clinical procedure or administrative workflow and its responsible owner. We can discuss a bounded requirement and the appropriate review process.',
        related: ['/services/chatgpt-work-managed-adoption', '/services/governance-adoption-sprint'],
    },
    '/industries/manufacturing': {
        headline: 'Connect what the shift learned to what happens next.',
        context: 'Production and quality teams work across shift records, inspection notes, supplier documents and corrective actions. Important details can disappear between the line, the quality function and the next shift. Dockio helps define AI-assisted documentation and coordination workflows that preserve product context, evidence and operational responsibility.',
        image: 'manufacturing',
        workflow: {
            title: 'Prepare a quality handover around unresolved issues.',
            intro: 'A quality lead needs a concise view of deviations and open actions for the next shift, with enough source context to continue the investigation.',
            steps: [point('Collect the approved record', 'Bring together shift notes, inspection references and action status. Keep product, lot and equipment identifiers attached to the information.'), point('Organize the handover', 'Group observations, distinguish confirmed findings from hypotheses and highlight missing evidence or overdue actions.'), point('Validate and assign', 'The quality lead reviews the brief and confirms the next owner. Product disposition, process changes and safety decisions stay within existing approval procedures.')],
        },
        deliverables: [point('A traceable handover design', 'Required identifiers, source references, action states and escalation paths for the selected production or quality workflow.'), point('An evaluation and integration backlog', 'Representative shift examples, missing-data tests and interfaces across the approved quality, production and document systems.'), point('A line-ready operating guide', 'Concise preparation and reviewer instructions, exception handling and ownership of the handover after rollout.')],
        considerations: [point('Operational systems', 'Agree record identifiers and source precedence across quality and production systems. Keep the initial remit separate from machine control.'), point('Quality decisions', 'Preserve evidence and distinguish observation from interpretation. Authorized quality and engineering personnel retain release and corrective-action decisions.'), point('Shift adoption', 'Test readability and access in the real work environment. Involve both the outgoing and receiving shift in acceptance.')],
        measures: [point('Handover coverage', 'Open issues with the correct product context, evidence and next owner.'), point('Preparation effort', 'Time to assemble and review a comparable shift or quality brief.'), point('Follow-through', 'Clarification loops, missed actions and recurring gaps across shifts.')],
        next: 'Bring one quality or shift-communication problem. We can map the source record, handoffs and review criteria before defining the implementation.',
        related: ['/use-cases/ops', '/services/codex-workflow-implementation'],
    },
    '/industries/professional-services': {
        headline: 'Turn the knowledge you can use into work worth reviewing.',
        context: 'Client teams spend time finding prior thinking, reconciling research and preparing engagement material. Reuse only helps when the source is current, appropriate for the engagement and permitted to cross that boundary. Dockio helps organize AI-assisted knowledge and delivery workflows around those distinctions.',
        image: 'collaboration',
        workflow: {
            title: 'Build an engagement brief from approved knowledge.',
            intro: 'A team preparing a new workstream needs relevant methods, available research and open questions without importing another client’s confidential material.',
            steps: [point('Define the usable knowledge', 'Separate public sources, approved reusable methods and engagement-restricted material. Confirm source owners and currency.'), point('Prepare a referenced brief', 'Synthesize the business question, relevant evidence and proposed workplan. Make unsupported assumptions and missing research explicit.'), point('Review for the engagement', 'The engagement lead checks relevance, permissions and claims before the material is used. Return reusable improvements through a deliberate knowledge-review process.')],
        },
        deliverables: [point('A knowledge boundary map', 'Source categories, permissions, reuse rules and maintenance owners for the selected practice or engagement.'), point('A briefing and review workflow', 'Task definitions, source-linked output structure, acceptance examples and escalation for uncertain or conflicting evidence.'), point('An enablement and upkeep plan', 'Role-based guidance, knowledge-owner responsibilities and a cadence for correcting or retiring stale material.')],
        considerations: [point('Repository quality', 'Document labels, versions and permissions determine what a workflow can reliably retrieve. Identify knowledge cleanup as delivery work, not an invisible prerequisite.'), point('Client confidentiality', 'Keep engagements separated and validate reuse rights with the responsible owner. Do not treat availability in a repository as permission to reuse.'), point('Professional review', 'Build on the reviewer’s expertise. Help teams verify reasoning and sources rather than encouraging uncritical reuse of fluent drafts.')],
        measures: [point('Preparation time', 'Effort to find, synthesize and validate relevant material.'), point('Evidence quality', 'Source currency, relevance and support for material claims.'), point('Knowledge upkeep', 'Stale items resolved and recurring gaps turned into owner actions.')],
        next: 'Bring a recurring engagement-preparation task and the knowledge sources it can legitimately use. We can define a reviewable workflow and its ownership.',
        related: ['/use-cases/sales', '/services/chatgpt-enterprise-foundation'],
    },
    '/use-cases/finance': {
        headline: 'Spend the review on the explanation, not the assembly.',
        context: 'Finance commentary becomes more useful when figures, explanations and unresolved questions can be reviewed together. Start with a recurring pack whose inputs and reviewer are known, then define the work AI can help prepare.',
        image: 'finance',
        workflow: { title: 'Prepare a variance brief for a recurring review.', intro: 'The following example concerns drafting and review; the finance owner retains accountability for the numbers and the explanation.', steps: [point('Establish the comparison', 'Use approved actuals and the agreed comparison period or plan. Confirm entity, currency, reporting cutoff and reconciled inputs.'), point('Draft with evidence', 'Summarize material movements, attach source references and separate confirmed explanations from questions for the business owner.'), point('Review the narrative', 'Check calculations and interpretation, resolve the material gaps and approve the final commentary through the normal reporting process.')] },
        deliverables: [point('A commentary specification', 'Required inputs, materiality rules, output structure and reviewer acceptance examples.'), point('An evidence and exception map', 'Links from narrative to figures and owner explanations, with explicit treatment of missing or inconsistent information.'), point('A repeatable review cycle', 'Evaluation examples, preparation guidance and a backlog of corrections from successive reporting cycles.')],
        considerations: [point('Connect the sources', 'Align reporting extracts and business explanations to the same period and entity.'), point('Protect the review', 'Keep sign-off, financial judgement and release decisions with authorized owners.'), point('Fit the cadence', 'Test against reporting deadlines and the actual time reviewers can give the output.')],
        measures: [point('Preparation effort', 'Time assembling the draft and supporting evidence.'), point('Reviewer corrections', 'Changes to figures, interpretation and unsupported statements.'), point('Exception closure', 'Questions resolved or explicitly carried into the next review.')],
        next: 'Bring a representative reporting pack and the steps involved in preparing it. We can identify a bounded first workflow.',
        related: ['/industries/financial-services', '/services/governance-adoption-sprint'],
    },
    '/use-cases/ops': {
        headline: 'Make the next action easier to see.',
        context: 'Operational reporting often records activity without resolving who should act next. A useful AI workflow brings together the relevant records, highlights the exception and preserves the owner and due date as work moves between teams.',
        image: 'logistics',
        workflow: { title: 'Prepare a weekly exception-and-action review.', intro: 'A process owner needs a concise view of ageing issues and decisions, rather than another summary of everything that happened.', steps: [point('Gather the open work', 'Collect approved queue records, action logs and relevant procedure references. Keep identifiers and last-updated times attached.'), point('Surface the decision', 'Group recurring issues, identify missing owners and draft the questions that need resolution. Distinguish overdue work from newly reported events.'), point('Agree the follow-through', 'The process owner validates priorities and assigns actions in the existing system. Carry unresolved questions into the next review without losing their history.')] },
        deliverables: [point('An exception model', 'Issue categories, information requirements, ownership and escalation paths.'), point('A decision-ready brief', 'A source-linked output specification with clear actions, open questions and acceptance criteria.'), point('An operating cadence', 'Review responsibilities, practitioner guidance and an improvement backlog connected to the underlying process.')],
        considerations: [point('System of record', 'Keep agreed actions in the authoritative work queue instead of a disconnected AI-generated list.'), point('Source quality', 'Show stale, duplicated or contradictory records before recommending a priority.'), point('Practical use', 'Test the brief with the people responsible for resolving issues, including different shifts.')],
        measures: [point('Triage effort', 'Time to find the facts needed for a reviewed next action.'), point('Action ownership', 'Open issues with an accountable owner and follow-up.'), point('Recurring friction', 'Repeated clarification, missed handoffs and avoidable rework.')],
        next: 'Bring a recurring operational review and the queues or logs behind it. We can define what a better decision brief should contain.',
        related: ['/industries/global-capability-centers', '/industries/logistics'],
    },
    '/use-cases/marketing': {
        headline: 'Keep campaign decisions connected to the brief.',
        context: 'Research, audience assumptions, asset versions and approvals can drift apart as a campaign takes shape. Dockio helps define reviewable workflows for synthesizing approved inputs and coordinating launch work while keeping brand and claim approval with the responsible team.',
        image: 'collaboration',
        workflow: { title: 'Turn approved research into a campaign brief.', intro: 'A marketing owner needs a shared starting point for creative and delivery teams, with the supporting evidence and assumptions visible.', steps: [point('Assemble the inputs', 'Collect approved audience research, product facts, prior learning and brand guidance. Record where evidence is current or incomplete.'), point('Prepare the brief', 'Draft the audience problem, proposition, message requirements and channel needs. Link material claims to sources and mark assumptions for review.'), point('Coordinate approval', 'The marketing owner validates the brief and assigns creative, review and launch responsibilities. Version changes remain connected to the approved direction.')] },
        deliverables: [point('A source-linked briefing format', 'Required evidence, audience assumptions, approved claims and reviewer checks.'), point('A launch workstream', 'Assets, dependencies, decisions and acceptance criteria connected to the campaign plan.'), point('An improvement loop', 'Guidance for preparing the next brief using agreed campaign learning.')],
        considerations: [point('Approved material', 'Connect product and brand sources with clear version ownership.'), point('Claims and publishing', 'Review accuracy and reuse rights before publication. External posting remains an explicit authorized action.'), point('Creative collaboration', 'Use AI preparation to improve the shared brief while leaving room for creative judgement.')],
        measures: [point('Brief readiness', 'Open questions and missing source evidence at creative handoff.'), point('Approval rework', 'Revisions caused by inaccurate claims or unclear requirements.'), point('Launch coordination', 'Age of unresolved dependencies and approval decisions.')],
        next: 'Bring an upcoming campaign or a recurring briefing problem. We can define the source, review and delivery workflow around it.',
        related: ['/services/governance-adoption-sprint', '/services/codex-workflow-implementation'],
    },
    '/use-cases/sales': {
        headline: 'Give the conversation better preparation.',
        context: 'Account teams need to reconcile customer context, product information and previous commitments before a meeting or proposal. Dockio helps define source-backed preparation workflows that expose gaps and support a thoughtful human conversation.',
        image: 'collaboration',
        workflow: { title: 'Prepare an RFP response with ownership and evidence.', intro: 'A proposal lead needs a first-pass response matrix, with unsupported answers and specialist decisions clearly flagged.', steps: [point('Map the request', 'Identify each question, required evidence and submission condition in the customer document.'), point('Match approved knowledge', 'Draft responses from current, permitted product and capability material. Link the source and assign unanswered questions to an owner.'), point('Review commitments', 'Commercial, product and delivery owners validate claims, scope and commitments before the proposal is submitted.')] },
        deliverables: [point('A response and ownership matrix', 'Questions, source references, draft status and the person responsible for each answer.'), point('A knowledge-use specification', 'Approved sources, currency checks, client boundaries and escalation rules.'), point('A reviewable proposal process', 'Acceptance examples, reviewer guidance and handoff points connected to the opportunity workflow.')],
        considerations: [point('Account context', 'Align CRM records and proposal documents without importing unrelated client information.'), point('Commitment control', 'Keep prices, contractual terms and delivery promises subject to the relevant approval.'), point('Seller usefulness', 'Prefer a concise brief with useful questions over a long account summary that hides uncertainty.')],
        measures: [point('Preparation effort', 'Time finding and validating reusable answers.'), point('Evidence coverage', 'Responses supported by current approved information.'), point('Decision follow-up', 'Unanswered questions and commitments awaiting an owner’s review.')],
        next: 'Bring a recurring account or proposal preparation task. We can map the usable knowledge and the review decisions it must support.',
        related: ['/industries/professional-services', '/services/chatgpt-enterprise-foundation'],
    },
    '/use-cases/data-analytics': {
        headline: 'Bring the question, the data and the caveats together.',
        context: 'A useful analysis depends on consistent definitions and a clear account of what the evidence can support. Dockio helps shape AI-assisted analytical preparation around approved datasets, reproducible calculations and review by the people accountable for the interpretation.',
        image: 'finance',
        workflow: { title: 'Prepare a KPI readout with its limitations visible.', intro: 'An operations owner wants to understand a movement in a recurring metric without confusing a data-quality change with a business change.', steps: [point('Confirm the measure', 'Establish the metric definition, reporting window, cohort and approved query or extract. Check completeness and known quality issues.'), point('Prepare the readout', 'Summarize observed changes using validated calculations. Link the data and distinguish description from possible explanations.'), point('Test the interpretation', 'The analyst reviews calculations, investigates alternative explanations and marks questions that need more evidence before a decision.')] },
        deliverables: [point('A metric and source contract', 'Definitions, lineage, reporting boundaries and accountable data owners.'), point('A reproducible review specification', 'Calculation checks, reference examples, caveat treatment and analyst acceptance criteria.'), point('A decision-focused output', 'A concise readout with supported observations, open questions and a repeatable preparation process.')],
        considerations: [point('Data access', 'Use approved analytical environments and least-necessary source access.'), point('Reproducibility', 'Keep calculations verifiable; a fluent explanation is not a substitute for a checked query or analysis.'), point('Analyst adoption', 'Fit the workflow to existing review practices and make corrections useful for the next run.')],
        measures: [point('Reproducibility', 'Readouts whose calculations and source versions can be independently checked.'), point('Correction effort', 'Time resolving definition, calculation and interpretation errors.'), point('Decision usefulness', 'Questions answered or explicitly left open with an evidence owner.')],
        next: 'Bring one recurring analytical readout, its metric definitions and the decision it informs. We can shape a reviewable preparation workflow.',
        related: ['/services/chatgpt-enterprise-foundation', '/industries/financial-services'],
    },
    '/use-cases/engineering': {
        headline: 'Keep implementation context close to the change.',
        context: 'Engineering coordination depends on requirements, design decisions, code changes and test evidence agreeing with one another. Dockio can help define AI-assisted documentation and delivery workflows, with selective development included only where the scope and ownership are agreed.',
        image: 'technology',
        workflow: { title: 'Prepare a change for engineering review.', intro: 'A scoped internal-tool update needs a clear requirement, implementation context and test evidence before release.', steps: [point('Define the boundary', 'Agree behavior, dependencies and acceptance tests. Identify which repository and environment the work belongs in.'), point('Prepare and implement', 'Use approved development tools, including Codex where suitable, to assist a bounded change. Keep the reasoning, source references and tests available for review.'), point('Review and release', 'The engineering owner reviews the change, checks tests and approves deployment through existing controls. Record support and rollback responsibilities.')] },
        deliverables: [point('A scoped implementation brief', 'User need, technical boundaries, integration contracts and acceptance behavior.'), point('A reviewable change package', 'Agreed code or configuration changes, tests and supporting documentation where development is in scope.'), point('A release handover', 'Dependencies, operating notes, known limitations and ownership for follow-up.')],
        considerations: [point('Environment fit', 'Work in the organization’s approved repositories and development environments.'), point('Review and permissions', 'Keep production access, secrets and release approval within the established engineering process.'), point('Maintainer ownership', 'Use the conventions and tests the team can maintain after handover.')],
        measures: [point('Acceptance coverage', 'Specified behavior supported by appropriate tests and reviewer evidence.'), point('Review friction', 'Clarification cycles caused by missing context or ambiguous scope.'), point('Operational readiness', 'Open support, dependency and rollback questions before release.')],
        next: 'Bring a bounded change or an engineering coordination problem. We can agree whether the useful remit is requirements, delivery support or selective development.',
        related: ['/services/codex-workflow-implementation', '/industries/it-services'],
    },
};
