import {defineCollection, defineConfig} from '@content-collections/core';
import {z} from 'zod';

const blogCollection = defineCollection({
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
    content: z.string(),
  }),
});

const projectsCollection = defineCollection({
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
    content: z.string(),
  }),
});

const aboutCollection = defineCollection({
  name: 'about',
  directory: './src/contents/about',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    lang: z.enum(['en', 'id']),
    url: z.string().optional(),
    content: z.string(),
  }),
});

const nowCollection = defineCollection({
  name: 'now',
  directory: './src/contents/now',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    lang: z.enum(['en', 'id']),
    url: z.string().optional(),
    content: z.string(),
  }),
  transform: (content) => {
    const fileName = content._meta.filePath.split('/').pop();
    const lang = fileName ? fileName.split('.')[0] : 'en';

    return {
      ...content,
      lang,
    };
  },
});

export default defineConfig({
  collections: [
    blogCollection,
    projectsCollection,
    aboutCollection,
    nowCollection,
  ],
});
