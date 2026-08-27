# AGENTS.md

Personal portfolio site using Astro 6 (SSG) + React islands. Uses pnpm.

## Commands

```bash
pnpm dev          # Development server (astro dev)
pnpm build        # Production build (astro build)
pnpm preview      # Preview production build (astro preview)
pnpm lint         # Biome lint (check)
pnpm lint:fix     # Biome lint (fix)
pnpm format       # Biome format
```

## Essentials

- **Framework**: Astro 6 with static output
- **UI**: Tailwind CSS v4, custom CSS (no component library)
- **Islands**: React 19 + Framer Motion for interactive components
- **Routing**: Astro file-based routing with i18n (`/en/`, `/id/`)
- **Content**: Astro Content Collections (markdown in `src/content/`)
- **Package Manager**: pnpm 11.0.0-rc.3
- **No tests configured**

## Conventions

- [TypeScript Configuration](/.agents/conventions/typescript.md)
- [Styling Patterns](/.agents/conventions/styling.md)
- [Routing](/.agents/conventions/routing.md)
- [Content Management](/.agents/conventions/content.md)
- [Component Patterns](/.agents/conventions/components.md)
- [Performance](/.agents/conventions/performance.md)

## Migrations

- [TanStack Start → Astro](/.agents/migrations/tanstack-to-astro.md)
