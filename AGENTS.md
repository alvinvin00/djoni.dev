# AGENTS.md - Development Guidelines for Djoni.dev

This document provides essential information for AI coding agents working on this codebase.

## Project Overview

- **Framework**: Vite + TanStack Start (SSG/SSR framework)
- **UI Library**: Mantine v8.3.5 (see migration notes below for v9)
- **Styling**: Tailwind CSS v4 + Mantine + PostCSS
- **Language**: TypeScript 6.0
- **Package Manager**: pnpm 10.19.0
- **Routing**: TanStack Router v1
- **Content Management**: content-collections with markdown

## Build/Lint/Test Commands

```bash
# Development server
pnpm dev                  # Start dev server

# Build commands
pnpm build               # Production build (vite build)
pnpm start               # Start production server

# Linting and formatting
pnpm lint                # Run Biome lint (check only)
pnpm lint:fix            # Run Biome lint and fix issues
pnpm format              # Format code with Biome (write mode)

# Storybook (component documentation)
pnpm storybook           # Start storybook dev server
pnpm build-storybook     # Build static storybook

# Note: No test commands currently configured in package.json
```

## Code Style Guidelines

### Formatting (Biome Configuration)

- **Indentation**: 2 spaces
- **Line Width**: 80 characters
- **Quotes**: Single quotes for strings
- **Semicolons**: Always required
- **Trailing Commas**: Always include
- **Bracket Spacing**: No spaces in object literals (`{foo}` not `{ foo }`)

### Import Order

```typescript
// 1. External libraries (React, Mantine, TanStack, etc.)
import {Button, Container} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {Link} from '@tanstack/react-router';
import {motion} from 'motion/react';
import type React from 'react';

// 2. Internal absolute imports (using @/ alias)
import {DarkModeButton} from '@/components/Button/DarkMode';
import {allProjects} from 'content-collections';

// 3. Relative imports
import {BetaDisclaimer} from './BetaDisclaimer';
import {Footer} from './Footer';
```

### TypeScript Configuration

- **Target**: ES2017
- **Strict Mode**: Enabled
- **JSX**: react-jsx
- **Path Aliases**:
  - `@/*` → `./src/*`
  - `@/public/*` → `./public/*`
  - `content-collections` → `./.content-collections/generated`

### Naming Conventions

```typescript
// Components: PascalCase, exported as named exports
export function AppLayout({children}: {children: React.ReactNode}) {
  // ...
}

// Files: PascalCase for components, camelCase for utilities
// Examples: AppLayout.tsx, Footer.tsx, darkMode.ts

// Variables: camelCase
const [opened, {toggle}] = useDisclosure();

// Types: PascalCase with Type suffix for complex types
type AppLayoutProps = {children: React.ReactNode};

// Type aliases: inline when simple
export function AppLayout({children}: {children: React.ReactNode}) {
  // ...
}

// Constants: UPPER_SNAKE_CASE for global constants
const DEFAULT_LOCALE = 'en';

// Hooks: usePrefix
export function useDisclosure() {
  // ...
}

// Routes: use createFileRoute
export const Route = createFileRoute('/$locale_/about')({
  component: AboutRoute,
});
```

### Component Structure

```typescript
// Preferred pattern:
export function ComponentName({prop}: {prop: PropType}) {
  // 1. Hooks at the top
  const [state, setState] = useState(initialValue);
  const {data} = useQuery();

  // 2. Early returns
  if (!data) return <Loading />;

  // 3. Main render
  return (
    <div>
      {/* Inline styles only for dynamic values, otherwise use Tailwind/CSS */}
      <Component className="tailwind-classes" style={{width: dynamic}} />
    </div>
  );
}
```

### Error Handling

```typescript
// Prefer early returns over nested conditionals
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

// Use error boundaries for component errors
// Use early returns for missing data
// Log errors to console in development
```

## Styling Guidelines

### Tailwind CSS (Primary Styling)

```typescript
// Use Tailwind utilities first
<div className="flex items-center gap-4 p-6 rounded-lg glass-card-dark">

// Custom classes (defined in src/styles/)
<div className="neon-glow-purple gradient-text-animated">

// Mantine components: use Tailwind classes via className prop
<Button className="bg-gradient-neon hover:shadow-neon-purple">
```

### Mantine Integration

```typescript
// Use Mantine's style prop for dynamic styles
<Button style={{width: calculateWidth()}}>Click me</Button>

// Use classNames prop for complex component styling
<MantineProvider
  classNames={{
    Button: 'custom-button-class',
    Input: 'custom-input-class',
  }}
>
```

### Custom CSS Utilities

```css
/* Located in src/styles/ */
/* globals.css - Base styles and Tailwind imports */
/* futuristic.css - Glassmorphism, neon effects */
/* animations.css - Keyframe animations */

/* Usage example: */
.glass-card-dark {
  background: rgba(10, 14, 39, 0.6);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(180, 0, 255, 0.2);
}
```

## Content Collections

```typescript
// Content is managed via content-collections
// Located in src/contents/ directory

// Import types from generated types
import {allProjects} from 'content-collections';
import {allBlogs} from 'content-collections';

// Schemas are defined in content-collections.ts
// Collections: blog, projects, about, now
// Each has markdown content with frontmatter

// Access content:
const projects = allProjects.filter((p) => p.lang === 'en');
const blog = allBlogs.find((b) => b.slug === slug && b.lang === 'en');
```

## Routing Pattern

```typescript
// File-based routing in src/routes/
// Pattern: $locale_/ for locale parameter, $slug for dynamic segments

// Example routes:
// src/routes/$locale_/index.tsx → /en or /id
// src/routes/$locale_/projects/index.tsx → /en/projects
// src/routes/$locale_/projects/$slug.tsx → /en/projects/my-project

// Route definition:
export const Route = createFileRoute('/$locale_/projects/$slug')({
  component: ProjectDetailPage,
});

// Access params:
const {slug} = Route.useParams();
const {locale} = Route.useParams();
```

## Mantine Version Notes

**Current Version**: Mantine 8.3.5

**Migration to Mantine 9.x** (when upgrading, note these breaking changes):

- React 19.2+ required for Mantine 9.x
- `Collapse` uses `expanded` prop instead of `in`
- `Spoiler` uses `defaultExpanded` instead of `initialState`
- `Grid` uses `gap` instead of `gutter`
- `Text` `color` prop removed; use `c` style prop instead
- Form resolvers use Standard Schema (Zod v4, Valibot)
- TypographyStylesProvider → Typography component
- Default border-radius changed from `sm` (4px) to `md` (8px)

## Motion Library Usage

```typescript
// Use 'motion' (Framer Motion) for animations
import {motion} from 'motion/react';

// Common patterns:
<motion.div
  initial={{opacity: 0, y: 20}}
  animate={{opacity: 1, y: 0}}
  transition={{duration: 0.6}}
  whileInView={{opacity: 1}}
  viewport={{once: true}}
>
```

## Localization

```typescript
// Supported locales: 'en' and 'id'
// Content is filtered by lang property
const projects = allProjects.filter((p) => p.lang === 'en');

// Default locale in navigation:
params={{locale: 'en'}}
```

## Key Design Patterns

1. **Components**: Functional components with TypeScript, prefer inline types for simple props
2. **Styling**: Tailwind CSS classes, custom utilities in src/styles/
3. **Animations**: Motion library for complex animations, Tailwind for simple ones
4. **State**: Use Mantine hooks (useDisclosure) and React hooks
5. **Content**: Markdown files in src/contents/, managed by content-collections
6. **Routing**: TanStack Router with file-based routing and dynamic segments
7. **Icons**: FontAwesome via @fortawesome/react-fontawesome

## File Organization

```
src/
├── components/          # Reusable UI components
│   ├── Button/         # Button components
│   ├── Contact/         # Contact form components
│   ├── Hero/           # Hero animation variants
│   └── Layout/         # Layout components (AppLayout, Footer)
├── config/             # Configuration files
├── contents/           # Markdown content (blog, projects, about, now)
├── routes/             # TanStack Router file-based routes
└── styles/             # Global CSS (globals.css, futuristic.css, animations.css)
```

## Testing Notes

- No test commands currently configured
- Storybook available for component development
- TypeScript compiler serves as primary type checker
- Biome provides linting and formatting

## Performance Considerations

- Use `viewport={{once: true}}` for scroll animations to prevent re-triggering
- Lazy load images (implicit with img tags)
- Prefer CSS animations over JS animations where possible
- Use `whileInView` for scroll-triggered animations