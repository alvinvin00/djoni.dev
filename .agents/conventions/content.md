# Content Management

## content-collections

Markdown content in `src/contents/`. Schemas defined in `content-collections.ts`.

**Collections**: blog, projects, about, now

## Import Patterns

```typescript
import {allProjects} from 'content-collections';
import {allBlogs} from 'content-collections';
```

## Filtering by Locale

```typescript
const projects = allProjects.filter((p) => p.lang === 'en');
const blog = allBlogs.find((b) => b.slug === slug && b.lang === 'en');
```

## Navigation

Default locale: `'en'`

```typescript
params={{locale: 'en'}}
```