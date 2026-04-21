import {defineCollection, defineConfig} from '@content-collections/core';
import {z} from 'zod';

const blogs = defineCollection({
    name: 'blog',
    directory: './src/contents/blog',
    include: '**/*.md',
    schema: z.object({
        author: z.string(),
        categories: z.array(z.string()),
        content: z.string(),
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

const projects = defineCollection({
    name: 'projects',
    directory: './src/contents/projects',
    include: '**/*.md',
    schema: z.object({
        author: z.string(),
        categories: z.array(z.string()),
        content: z.string(),
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

const about = defineCollection({
    name: 'about',
    directory: './src/contents/about',
    include: '*.md',
    schema: z.object({
        title: z.string(),
        content: z.string(),
        date: z.string(),
        lang: z.enum(['en', 'id']),
        url: z.string().optional(),
    }),
});

const now = defineCollection({
    name: 'now',
    directory: './src/contents/now',
    include: '*.md',
    schema: z.object({
        title: z.string(),
        content: z.string(),
        date: z.string(),
        lang: z.enum(['en', 'id']),
        url: z.string().optional(),
    }),
});

export default defineConfig({
    content: [blogs, projects, about, now],
});
