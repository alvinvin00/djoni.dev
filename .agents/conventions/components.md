# Component Patterns

## Astro Components (`.astro`)

Use for static markup and layout:

```astro
---
const {title} = Astro.props;
---

<div class="tailwind-classes">
  <h1>{title}</h1>
  <slot />
</div>
```

## React Islands (`.tsx`)

Use for interactive components with `client:load` or `client:only`:

```tsx
export function InteractiveComponent({prop}: {prop: PropType}) {
  const [state, setState] = useState(initialValue);

  return (
    <div className="tailwind-classes">
      <button onClick={() => setState(!state)}>Toggle</button>
    </div>
  );
}
```

## Error Handling

Prefer early returns over nested conditionals:

```typescript
// ✅ Good
if (!data) return <Loading />;
if (error) return <Error error={error} />;
return <Content data={data} />;

// ❌ Avoid
if (data) {
  if (!error) {
    return <Content data={data} />;
  }
  return <Error error={error} />;
}
return <Loading />;
```

Use error boundaries for component errors. Use early returns for missing data.

## Styling in Components

1. **Tailwind classes** via `className` prop (default)
2. **Inline `style`** for dynamic values only
3. **Custom CSS classes** for complex styling

```typescript
<div className="flex items-center gap-4" style={{width: calcWidth()}} />
```
