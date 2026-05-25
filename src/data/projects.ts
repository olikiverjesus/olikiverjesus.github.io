export type Project = {
  title: string;
  description: string;
  href?: string;
  status?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: 'Signal Layer Builders',
    description:
      'A lightweight builder directory for people working on systems, workflows, automation, AI projects, and technical tools.',
    href: 'https://signal-layer-website.vercel.app',
    status: 'Live',
    tags: ['Next.js', 'Supabase', 'Vercel', 'Community Infrastructure', 'Operational AI'],
  },
  {
    title: 'Production AI Checklists',
    description:
      'Open-source operational checklists for building, shipping, and maintaining AI systems in real environments.',
    href: 'https://github.com/signal-layer-labs/production-ai-checklists',
    status: 'Open Source',
    tags: ['Operational AI', 'Reliability', 'Checklists', 'Open Source', 'Documentation'],
  },
  {
    title: 'Workflow Failure Library',
    description:
      'A practical library of failure modes in AI workflows, automation, and production systems.',
    href: 'https://github.com/signal-layer-labs/workflow-failure-library',
    status: 'Open Source',
    tags: ['Failure Modes', 'Workflow Reliability', 'Observability', 'Systems Thinking', 'Open Source'],
  },
  {
    title: 'Signal Layer Labs',
    description:
      'Open-source and community infrastructure for practical operational AI, workflows, reliability, and systems thinking.',
    href: 'https://github.com/signal-layer-labs',
    status: 'Community Infrastructure',
    tags: ['Open Source', 'Community', 'AI Systems', 'Builder Ecosystem'],
  },
  {
    title: 'IFC / Operational Analytics Work',
    description:
      'Analytics, automation, and operational reporting systems for business workflows, sales visibility, and decision-making.',
    status: 'Private / Internal',
    tags: ['Data Analytics', 'Looker Studio', 'Google Apps Script', 'Automation', 'Operations'],
  },
  {
    title: 'Ridgeline / Workflow Systems',
    description:
      'Product and systems work around structured operational workflows, documentation quality, and process clarity.',
    status: 'Private / Internal',
    tags: ['Product Systems', 'Workflow Design', 'Operations', 'Full-Stack'],
  },
];

export const featuredProjects = projects.slice(0, 3);
