// content-collections.ts
import {defineCollection, defineConfig} from '@content-collections/core';
import {z} from 'zod';
var blogCollection = defineCollection({
  name: 'blog',
  directory: './src/contents/blog',
  include: '**/*.md',
  schema: z.object({
    author: z.string(),
    categories: z.array(z.string()),
    date: z.string(),
    description: z.string().optional(),
    slug: z.string(),
    tags: z.array(z.string()).optional(),
    thumbnail: z.string(),
    title: z.string(),
    lang: z.enum(['en', 'id']),
    url: z.string().optional(),
  }),
});
var projectsCollection = defineCollection({
  name: 'projects',
  directory: './src/contents/projects',
  include: '**/*.md',
  schema: z.object({
    author: z.string(),
    categories: z.array(z.string()),
    date: z.string(),
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
var aboutCollection = defineCollection({
  name: 'about',
  directory: './src/contents/about',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    lang: z.enum(['en', 'id']),
    url: z.string().optional(),
  }),
});
var nowCollection = defineCollection({
  name: 'now',
  directory: './src/contents/now',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    lang: z.enum(['en', 'id']),
    url: z.string().optional(),
  }),
  transform: (content) => {
    const lang = content._meta.filePath.split('/')[4];
    return {
      ...content,
      lang,
    };
  },
});
var content_collections_default = defineConfig({
  collections: [
    blogCollection,
    projectsCollection,
    aboutCollection,
    nowCollection,
  ],
});
export {content_collections_default as default};
