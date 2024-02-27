import {defineCollection, defineConfig, s} from 'velite';

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
  }).transform((data, {meta}) => ({
    ...data,
    url: meta.file.path,
    slug: meta.file.path,
    lang: meta.file.path.split('/')[1],
  })),
});

const projects = defineCollection({
  name: 'Projects',
  pattern: 'projects/**/*.md',
  schema: authorable.extend({
    github: s.string().url().optional(),
    images: s.array(s.string()).default([]),
    link: s.string().url(),
    slug: s.slug('projects'),
    status: s.enum(['active', 'inactive', 'archived']).default('active'),
    tags: s.array(s.string()).default([]),
    thumbnail: s.string(),
  }).transform((data, {meta}) => ({
    ...data,
    url: meta.file.stem,
    slug: meta.file.path,
    lang: meta.file.path.split('/')[1],
  })),
});

const about = defineCollection({
  name: 'About',
  pattern: `about/**/*.md`,
  // single: true,
  schema: s.object({
    title: s.string(),
    date: s.string(),
  }).transform((data, {meta}) => ({
    ...data,
    url: meta.file.stem,
    lang: meta.file.path.split('/')[1],
  })),
});

export const now = defineCollection({
  name: 'Now',
  pattern: `now/**/*.md`,
  // single: true,
  schema: s.object({
    title: s.string(),
    date: s.string(),
  }).transform((data, {meta}) => ({
    ...data,
    url: meta.file.stem,
    lang: meta.file.path.split('/')[1],
  })),
});

/** @type {import('velite').UserConfig} */
export default defineConfig({
  root: 'src/contents',
  collections: {about, blog: blogs, now, projects},
});
