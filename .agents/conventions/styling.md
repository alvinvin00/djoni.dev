# Styling Patterns

## Tailwind CSS (Primary)

Use Tailwind utilities as the default approach:

```typescript
<div className="flex items-center gap-4 p-6 rounded-lg glass-card-dark">
```

Custom classes defined in `src/styles/`:

```typescript
<div className="neon-glow-purple gradient-text-animated">
```

## Mantine Integration

For dynamic styles, use Mantine's `style` prop:

```typescript
<Button style={{width: calculateWidth()}}>Click me</Button>
```

For complex component styling, use `classNames` prop:

```typescript
<MantineProvider
  classNames={{
    Button: 'custom-button-class',
    Input: 'custom-input-class',
  }}
>
```

## Custom CSS Utilities

Located in `src/styles/`:
- `globals.css` - Base styles and Tailwind imports
- `futuristic.css` - Glassmorphism, neon effects
- `animations.css` - Keyframe animations

Example usage:

```css
.glass-card-dark {
  background: rgba(10, 14, 39, 0.6);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(180, 0, 255, 0.2);
}
```

## Animations

Use `motion` (Framer Motion) for complex animations:

```typescript
import {motion} from 'motion/react';

<motion.div
  initial={{opacity: 0, y: 20}}
  animate={{opacity: 1, y: 0}}
  transition={{duration: 0.6}}
  whileInView={{opacity: 1}}
  viewport={{once: true}}
>
```

Use Tailwind for simple animations.