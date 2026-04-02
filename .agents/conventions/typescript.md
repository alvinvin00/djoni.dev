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
content-collections → ./.content-collections/generated
```

## Import Order

```typescript
// 1. External libraries
import {Button} from '@mantine/core';
import {Link} from '@tanstack/react-router';
import {motion} from 'motion/react';
import type React from 'react';

// 2. Internal (absolute)
import {DarkModeButton} from '@/components/Button/DarkMode';
import {allProjects} from 'content-collections';

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