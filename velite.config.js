import {join} from 'node:path';

import {defineCollection, defineConfig, s} from 'velite';

const publicRootDir = join(process.cwd(), '/public');

const authorable = s.object({
  author: s.string(),
  categories: s.array(s.string()),
  date: s.string(),
  description: s.string().optional(),
  title: s.string(),
});

const blogs = defineCollection({
  name: 'Blog',
  pattern: 'blog/**/*.md',
  schema: authorable.extend({
    slug: s.slug('blog'),
    tags: s.array(s.string()).default([]),
    thumbnail: s.string(),
  }),
});

const projects = defineCollection({
  name: 'Projects',
  pattern: 'projects/**/*.md',
  schema: authorable.extend({
    github: s.string().url().optional(),
    images: s.array(s.image({absoluteRoot: `${publicRootDir}`})),
    link: s.string().url(),
    slug: s.slug('projects'),
    status: s.enum(['active', 'inactive', 'archived']).default('active'),
    tags: s.array(s.string()).default([]),
    thumbnail: s.string(),
  }),
});

const about = defineCollection({
  name: 'About',
  pattern: `about/**/*.md`,
  single: true,
  schema: s.object({
    title: s.string(), date: s.string(),
  }),
});

export const now = defineCollection({
  name: 'Now',
  pattern: `now/**/*.md`,
  single: true,
  schema: s.object({
    title: s.string(), date: s.string(),
  }),
});

/** @type {import('velite').UserConfig} */
export default defineConfig({
  root: 'src/contents',
  collections: {about, blog: blogs, now, projects},
});
