# Mantine v9 Migration Notes

**Current Version**: 8.3.5

## Breaking Changes (v9.x)

- React 19.2+ required
- `Collapse`: use `expanded` prop instead of `in`
- `Spoiler`: use `defaultExpanded` instead of `initialState`
- `Grid`: use `gap` instead of `gutter`
- `Text`: `color` prop removed, use `c` style prop
- Form resolvers: use Standard Schema (Zod v4, Valibot)
- `TypographyStylesProvider` → `Typography` component
- Default border-radius: `sm` (4px) → `md` (8px)

## Before Upgrading

1. Ensure React 19.2+ is installed
2. Update all component usage per breaking changes above
3. Test all Mantine components thoroughly