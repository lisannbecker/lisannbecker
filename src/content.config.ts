import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every Markdown file in src/content/projects/ becomes a project.
// The file name is the URL: queue-cue.md → /projects/queue-cue
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      order: z.number(),
      year: z.number().optional(),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      // Paths are relative to the Markdown file, e.g. ../../assets/projects/queue-cue/cover.jpg
      cover: image().optional(),
      coverAlt: z.string().optional(),
      images: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
    }),
});

export const collections = { projects };
