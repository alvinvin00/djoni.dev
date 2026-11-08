# TanStack Start → Astro

Status: **complete** (branch `refactor/astro`, merged to `main`).

## What changed

- **Routing**: `src/routes/**` (file-based TanStack routes) → `src/pages/[locale]/**.astro`.
  `src/router.ts`, `vite.config.ts`, `content-collections.ts` removed.
- **Content**: `src/contents/**` → `src/content/**` via Astro Content Collections
  (`src/content.config.ts` replaces `content-collections.ts`).
- **i18n**: URL prefix routing kept (`/en/`, `/id/`). Root `/` is a locale gate
  (`src/pages/index.astro`): reads `locale_preference` cookie, falls back to
  `navigator.language`, redirects client-side.
- **Shell**: `__root.tsx` → `src/layouts/Layout.astro`; header/footer/hero became
  `.astro` components. Interactive islands stay React 19 (`client:load`).
- **Styles**: CSS modules + Tailwind config → Tailwind v4 (`src/styles/globals.css`).
- **Deploy**: `output: 'static'` with `@astrojs/vercel` adapter.

## Dropped from TanStack version

- `/maintenance` route (use hosting-level maintenance mode if needed).
- Locale-switch UI (never existed as component; URL prefix is the switch).

## Verify after future changes

```bash
pnpm lint && pnpm build
```

Root `/` must emit `dist/index.html` (locale gate). All pages must be prerendered.
