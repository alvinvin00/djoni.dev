# Routing Patterns

## File-Based Routing

Routes are in `src/routes/` using TanStack Router.

**Patterns**:
- `$locale_/` = locale parameter
- `$slug` = dynamic segment

**Examples**:

| File | Route |
|------|-------|
| `src/routes/$locale_/index.tsx` | `/en` or `/id` |
| `src/routes/$locale_/projects/index.tsx` | `/en/projects` |
| `src/routes/$locale_/projects/$slug.tsx` | `/en/projects/my-project` |

## Route Definition

```typescript
export const Route = createFileRoute('/$locale_/projects/$slug')({
  component: ProjectDetailPage,
});
```

## Access Parameters

```typescript
const {slug} = Route.useParams();
const {locale} = Route.useParams();
```