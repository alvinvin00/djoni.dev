# TypeScript Conventions

## Configuration

- **Target**: ES2017
- **Strict Mode**: Enabled
- **JSX**: react-jsx
- **Line Width**: 80 characters

## Path Aliases

```typescript
@/*              → ./src/*
@/public/*       → ./public/*
```

## Import Order

```typescript
// 1. External libraries
import {motion} from 'motion/react';
import type React from 'react';

// 2. Internal (absolute)
import {DarkModeToggle} from '@/components/DarkModeToggle';
import {getCollection} from 'astro:content';

// 3. Relative imports
import {Footer} from './Footer';
```

## Type Definitions

For simple component props, use inline types:

```typescript
export function AppLayout({children}: {children: React.ReactNode}) {
  // ...
}
```

For complex types, use `Type` suffix:

```typescript
type AppLayoutProps = {
  children: React.ReactNode;
  theme: 'dark' | 'light';
};
```
