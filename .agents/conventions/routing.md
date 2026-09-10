# Routing Patterns

## File-Based Routing

Routes are in `src/pages/` using Astro's file-based routing.

**Patterns**:
- `[locale]/` = locale parameter (`en` or `id`)
- `[slug]` = dynamic segment

**Examples**:

| File | Route |
|------|-------|
| `src/pages/[locale]/index.astro` | `/en` or `/id` |
| `src/pages/[locale]/projects/index.astro` | `/en/projects` |
| `src/pages/[locale]/projects/[slug].astro` | `/en/projects/my-project` |

## getStaticPaths

Dynamic routes must export `getStaticPaths`:

```astro
---
export function getStaticPaths() {
  return [
    { params: { locale: 'en' } },
    { params: { locale: 'id' } },
  ];
}
---
```

## Access Parameters

```astro
---
const {slug} = Astro.params;
const {locale} = Astro.params;
---
```

## i18n Config

Configured in `astro.config.ts`:

```javascript
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'id'],
  routing: {
    prefixDefaultLocale: true,
  },
}
```
