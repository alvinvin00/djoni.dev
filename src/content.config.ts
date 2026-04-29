import {defineCollection, z} from 'astro:content';
import {glob} from 'astro/loaders';

const dateSchema = z.union([z.string(), z.date()]).transform((v) => {
  if (v instanceof Date) {
    return v.toISOString().split('T')[0];
  }
  return v;
});

const blog = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/blog',
    generateId: ({entry}) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    author: z.string(),
    categories: z.array(z.string()),
    date: dateSchema,
    description: z.string().optional(),
    slug: z.string(),
    tags: z.array(z.string()).optional(),
    thumbnail: z.string(),
    title: z.string(),
    lang: z.enum(['en', 'id']),
    url: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/projects',
    generateId: ({entry}) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    author: z.string(),
    categories: z.array(z.string()),
    date: dateSchema,
    description: z.string(),
    github: z.string().optional(),
    link: z.string().optional(),
    images: z.array(z.string()).optional(),
    slug: z.string(),
    status: z.enum(['active', 'inactive', 'archived']).optional(),
    tags: z.array(z.string()).optional(),
    thumbnail: z.string().optional(),
    title: z.string(),
    lang: z.enum(['en', 'id']),
    url: z.string().optional(),
  }),
});

const about = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/about',
    generateId: ({entry}) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    date: dateSchema,
    lang: z.enum(['en', 'id']),
    url: z.string().optional(),
  }),
});

const now = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/now',
    generateId: ({entry}) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    date: dateSchema,
    lang: z.enum(['en', 'id']),
    url: z.string().optional(),
  }),
});

export const collections = {blog, projects, about, now};
