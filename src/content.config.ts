import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    dateLabel: z.string().optional(),
    summary: z.string(),
  }),
});

export const collections = { news };
