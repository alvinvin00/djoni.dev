# Component Patterns

## Structure

```typescript
export function ComponentName({prop}: {prop: PropType}) {
  // 1. Hooks at the top
  const [state, setState] = useState(initialValue);
  const {data} = useQuery();

  // 2. Early returns
  if (!data) return <Loading />;

  // 3. Main render
  return (
    <div>
      {/* Inline styles only for dynamic values */}
      <Component className="tailwind-classes" style={{width: dynamic}} />
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
2. **Mantine `style` prop** for dynamic values
3. **Custom CSS classes** for complex styling

```typescript
<Component className="flex items-center gap-4" style={{width: calcWidth()}} />
```