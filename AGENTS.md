# AGENTS.md

Personal portfolio site using Vite + TanStack Start (SSG). Uses pnpm.

## Commands

```bash
pnpm dev          # Development server
pnpm build        # Production build
pnpm start        # Production server
pnpm lint         # Biome lint (check)
pnpm lint:fix     # Biome lint (fix)
pnpm format       # Biome format
pnpm storybook    # Component documentation
```

## Essentials

- **UI**: Mantine v8.3.5, Tailwind CSS v4
- **Routing**: TanStack Router (file-based)
- **Content**: content-collections (markdown in src/contents/)
- **Package Manager**: pnpm 10.19.0
- **No tests configured**

## Conventions

- [TypeScript Configuration](/.agents/conventions/typescript.md)
- [Styling Patterns](/.agents/conventions/styling.md)
- [Routing](/.agents/conventions/routing.md)
- [Content Management](/.agents/conventions/content.md)
- [Component Patterns](/.agents/conventions/components.md)
- [Performance](/.agents/conventions/performance.md)

## Migrations

- [Mantine v9 Migration Notes](/.agents/migrations/mantine-v9.md)