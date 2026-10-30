import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One file per project in src/content/projects/.
// Featured projects (featured: true) get a card in the top grid and their own page at /projects/<file name>/.
// The rest show up as small cards under "More projects".
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    featured: z.boolean().default(false),
    order: z.number(), // sort order within its section, smallest first

    // Card
    summary: z.string(), // one or two sentences shown on the card
    cover: z.string().optional(), // image in public/, e.g. /images/projects/maze.webp
    coverAlt: z.string().default(''),
    kind: z.string().optional(), // small label on featured cards, e.g. "WEB APP · RAILS 8 · LIVE DEMO"
    language: z.string().optional(), // colored dot on small cards, see languageColors in src/site.config.ts
    meta: z.string().optional(), // extra text next to the language, e.g. "Unity 6"

    // Detail page (featured projects only)
    eyebrow: z.string().optional(), // small label above the title
    tagline: z.string().optional(), // sentence under the title
    hero: z.string().optional(), // large image at the top; falls back to cover
    heroAlt: z.string().optional(),
    heroCaption: z.string().optional(),
    facts: z.array(z.object({ label: z.string(), value: z.string() })).default([]),

    // Links: shown as buttons on the detail page and as links on small cards
    demo: z.string().url().optional(),
    demoLabel: z.string().default('Live Demo'),
    source: z.string().url().optional(),
  }),
});

// One file per post in src/content/posts/. The file name becomes the address: /posts/<file name>/.
// Posts with `draft: true` show up only while running `npm run dev`, never on the published site.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(), // one or two sentences for the list, search results and link previews
    date: z.coerce.date(), // e.g. 2026-11-02
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, posts };
