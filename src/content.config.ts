import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    href: z.string().url().optional(),
    status: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.string().default('Coming soon'),
    topics: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, writing };
