export type WritingEntry = {
  title: string;
  description: string;
  status: 'Coming soon';
  topics: string[];
};

export const writingEntries: WritingEntry[] = [
  {
    title: 'Why workflows fail after the demo works',
    description: 'Notes on the gap between a convincing prototype and a system that survives real operational use.',
    status: 'Coming soon',
    topics: ['AI Workflows', 'Reliability'],
  },
  {
    title: 'Systems over resumes',
    description: 'A short argument for showing working infrastructure, public notes, and shipped tools.',
    status: 'Coming soon',
    topics: ['Proof of Work', 'Builder Infrastructure'],
  },
  {
    title: 'Reliability is part of product design',
    description: 'Why failure states, maintenance paths, and observability belong in the product conversation.',
    status: 'Coming soon',
    topics: ['Product Systems', 'Operations'],
  },
  {
    title: 'Operational AI needs boring infrastructure',
    description: 'A practical look at checklists, handoffs, logging, and the unglamorous pieces that make AI useful.',
    status: 'Coming soon',
    topics: ['Operational AI', 'Infrastructure'],
  },
  {
    title: 'What demos ignore',
    description: 'Questions to ask before turning a clean demo into a workflow people depend on.',
    status: 'Coming soon',
    topics: ['Automation', 'Systems Thinking'],
  },
];
