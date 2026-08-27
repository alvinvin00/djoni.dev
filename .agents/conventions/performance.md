# Performance Considerations

## Animations

Prevent re-triggering scroll animations:

```typescript
<motion.div whileInView={{opacity: 1}} viewport={{once: true}}>
```

## Image Loading

Image tags inherently support lazy loading. No special handling needed.

## Animation Choice

- **CSS animations** → preferred for simple transitions
- **motion library** → for complex/interactive animations

## Key Patterns

1. Use `viewport={{once: true}}` for scroll animations
2. Use `whileInView` for scroll-triggered animations
3. Prefer CSS over JS animations when possible