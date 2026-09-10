# Content Management

## Astro Content Collections

Markdown content in `src/content/`. Schemas defined in `src/content.config.ts`.

**Collections**: blog, projects, about, now

## Import Patterns

```typescript
import {getCollection, render} from 'astro:content';

const allProjects = await getCollection('projects');
const project = allProjects.find((p) => p.data.lang === 'en');
const {Content} = await render(project);
```

## Filtering by Locale

```typescript
const projects = allProjects.filter((p) => p.data.lang === 'en');
const blog = allBlogs.find((b) => b.data.slug === slug && b.data.lang === 'en');
```

## Navigation

Default locale: `'en'`

```typescript
href={`/${locale}/projects`}
```
