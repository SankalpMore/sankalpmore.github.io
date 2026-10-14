export type Insight = {
  path: string;
  title: string;
  description: string;
  theme: string;
  intro: string;
  sections: { id: string; title: string; paragraphs: string[]; questions?: string[] }[];
  takeaway: string;
  nextPath: string;
  nextLabel: string;
};

export const insights: Insight[] = [
  {
    path: '/insights/choosing-an-ai-use-case',
    title: 'Choose an AI use case you can evaluate',
    description: 'A practical way to connect an AI opportunity to a recurring task, a responsible owner, usable evidence and a defensible next decision.',
    theme: 'PRIORITIES & REQUIREMENTS',
    intro: 'An idea becomes easier to assess when you can point to the work it changes. Before ranking a long list of AI opportunities, make each candidate specific enough for a business owner and a delivery team to discuss the same thing.',
    sections: [
      { id: 'unit-of-work', title: 'Name the unit of work.', paragraphs: ['“Improve finance productivity” expresses an ambition. “Prepare a first-pass variance brief for the monthly review” identifies a task. It has a trigger, inputs, an output and a reviewer. That boundary makes it possible to examine the effort today and decide what a useful change would look like.', 'Walk through a recent example with the person preparing the work and the person accepting it. Capture the awkward parts too: missing explanations, late source updates, manual copying and the corrections made before the output could be used.'], questions: ['What starts the task, and how often does it recur?', 'Who prepares the output, and who accepts it?', 'Which exceptions make the task difficult?'] },
      { id: 'evidence', title: 'Keep potential value beside the evidence.', paragraphs: ['Separate an expected benefit from an observed baseline. A team may believe a task takes several hours, but that estimate might exclude the reviewer’s time or include time spent waiting for data. Record what is known, where it came from and what still needs a sample.', 'Consider frequency, effort, quality, risk and the ability to use any released capacity. A faster draft that requires more correction may not improve the complete workflow. A less frequent task may still matter if it causes a critical decision to wait.'] },
      { id: 'readiness', title: 'Ask what must be true for it to work.', paragraphs: ['Source access, version quality, integration ownership and review capacity are part of feasibility. Treat them as work to resolve, rather than assuming they will become available after approval.', 'Readiness does not have to be reduced to one score. A small set of explicit questions can be more useful: is the authoritative source available, can the output be checked, and is someone able to own the workflow after the pilot?'], questions: ['Which source is authoritative when records disagree?', 'Can representative examples be used for evaluation?', 'Who will resolve access, quality and operating questions?'] },
      { id: 'decision', title: 'Make the next decision smaller.', paragraphs: ['The next commitment might be a short definition exercise, a bounded implementation or a deliberate decision to wait. Choose the step that resolves the most important uncertainty at an appropriate level of effort.', 'Write down the outcome of that step: an accepted requirement, a tested source connection, a reviewed workflow example or a baseline from real work. Agree what would justify proceeding and what would change the priority. This gives a sponsor a decision they can revisit as evidence improves.'] },
    ],
    takeaway: 'Bring one task, one representative output, its accountable owner and the biggest unresolved question. Those four things are a useful start to an AI requirement.',
    nextPath: '/services/governance-adoption-sprint',
    nextLabel: 'Explore AI business analysis and prioritization',
  },
  {
    path: '/insights/from-pilot-to-owned-workflow',
    title: 'Move from a successful pilot to an owned workflow',
    description: 'Questions to resolve about sources, permissions, human review, exceptions and handover before widening an AI workflow beyond its first users.',
    theme: 'IMPLEMENTATION & ADOPTION',
    intro: 'A pilot can show that a task is possible. Wider use asks different questions: who can run it, what happens when the information changes, who checks the result and who is responsible when something fails?',
    sections: [
      { id: 'sources', title: 'Make the source boundary explicit.', paragraphs: ['A pilot may rely on a carefully prepared folder or a knowledgeable person selecting the right documents. A repeatable workflow needs to explain which sources are approved, how current versions are identified and what happens when a required source is absent.', 'Work with source and platform owners to understand permissions. Access to a convenient shared collection should not be assumed to authorize every user to see every item within it. Include restricted, missing and outdated information in the evaluation examples.'] },
      { id: 'review', title: 'Put review where the decision happens.', paragraphs: ['Identify the point at which a draft becomes an accepted output or an action. A reviewer needs the evidence required to make that decision: source references, unresolved questions, relevant context and a clear account of what the workflow has prepared.', 'Describe the difference between reading information, drafting material and writing back to a system. A workflow that prepares a customer update should not silently become one that sends messages. The action boundary belongs in the requirement and the acceptance tests.'], questions: ['Who can accept the output?', 'What information does that reviewer need?', 'Which actions need a separate confirmation or approval?'] },
      { id: 'exceptions', title: 'Design for the ordinary things that go wrong.', paragraphs: ['A source is late. A document has two versions. A tool is unavailable. A question falls outside the agreed task. These are operating conditions to design for, not just unusual failures to mention at handover.', 'Define a clear fallback or escalation route for each important case. Test that the workflow reveals uncertainty and preserves the underlying work record. A safe stop with a useful next action can be a better outcome than an apparently complete answer built on missing information.'] },
      { id: 'ownership', title: 'Hand over responsibility as well as instructions.', paragraphs: ['Business and technical responsibilities are related but distinct. The business owner decides whether the output remains useful; the technical owner maintains connections, permissions and implementation dependencies. Reviewers and practitioners need an understandable route for reporting problems.', 'Make guidance, change history, evaluation examples and support responsibilities part of the delivery backlog. Then observe normal work cycles after release. Use feedback to distinguish a source problem, an unclear task, an integration defect and a learning need. Each calls for a different response.'] },
    ],
    takeaway: 'A useful handover answers four questions: who owns the outcome, who maintains the system, who reviews the work and what happens when it cannot proceed.',
    nextPath: '/services/chatgpt-enterprise-foundation',
    nextLabel: 'Explore governed AI workflows',
  },
  {
    path: '/insights/evidence-for-ai-investment',
    title: 'Connect AI evidence to the next investment decision',
    description: 'How to distinguish activity, quality, capacity and business outcomes when reviewing an AI initiative and deciding what to fund next.',
    theme: 'VALUE & BUDGETOPS',
    intro: 'A delivery milestone, growing usage and a business benefit answer different questions. An investment review becomes more useful when those signals are connected and their limits remain visible.',
    sections: [
      { id: 'chain', title: 'Follow the chain from delivery to outcome.', paragraphs: ['First ask whether the intended workflow reached the people who need it and performs the agreed task. Then examine whether they use it successfully during normal work. Only then look for changes in effort, quality, service or decisions.', 'A completed release is evidence of delivery. Repeated task completion is evidence of use. A comparable before-and-after work sample can provide evidence of process change. Keep these observations separate enough to understand what is actually improving.'] },
      { id: 'capacity', title: 'Treat released time as capacity with a destination.', paragraphs: ['If preparation becomes faster, include the effort required to review and correct the result. Use a consistent task definition and comparable samples, and explain any differences in complexity or volume.', 'Estimated hours released do not automatically become financial savings. A team may use that capacity to reduce a backlog, improve service, perform additional checks or take on more work. The owner needs to identify the intended use and how it will be observed. A financial benefit requires its own assumptions, validation and accountable owner.'] },
      { id: 'costs', title: 'Bring the cost of operating the change into view.', paragraphs: ['Implementation effort is only one part of the picture. A review may also need to consider ongoing tool usage, maintenance, source upkeep, support and time spent checking outputs. The relevant costs depend on the workflow and the decision being made.', 'Avoid combining unlike measures into a reassuring number. Record the baseline, sample period, source, owner and confidence for each important claim. A small transparent evidence pack can support a better discussion than a dashboard whose definitions are unclear.'], questions: ['What changed, compared with which baseline?', 'What effort or cost moved elsewhere?', 'What uncertainty would matter to the next commitment?'] },
      { id: 'next', title: 'Give the evidence a decision to inform.', paragraphs: ['Continuing may be sensible when the workflow is useful but more normal-cycle evidence is needed. Changing may be appropriate when a source or review bottleneck limits value. Scaling asks whether ownership, quality, support and capacity remain credible for a larger scope. Stopping is also a legitimate outcome when the case no longer holds.', 'BudgetOps is Dockio’s vision for making these connections more deliberate: business priorities and commitments on one side, evidence from delivery, adoption and outcomes on the other. The immediate work is practical—define the measures, assign ownership and make the next review useful.'] },
    ],
    takeaway: 'End the review with a decision, an owner and the next evidence needed. That makes the measurement useful beyond the report itself.',
    nextPath: '/value-realization',
    nextLabel: 'Explore value measurement',
  },
];
