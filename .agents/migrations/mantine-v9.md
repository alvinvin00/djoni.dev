# Mantine v9 Migration Notes

**Status**: Completed
**Migrated Version**: 9.0.2

## Breaking Changes (v9.x)

- React 19.2+ required
- `Collapse`: use `expanded` prop instead of `in`
- `Spoiler`: use `defaultExpanded` instead of `initialState`
- `Grid`: use `gap` instead of `gutter`
- `Text`: `color` prop removed, use `c` style prop
- Form resolvers: use Standard Schema (Zod v4, Valibot)
- `TypographyStylesProvider` → `Typography` component
- Default border-radius: `sm` (4px) → `md` (8px)

## Migration Checklist

- [x] React updated to 19.2.5
- [x] All `@mantine/*` packages updated to 9.0.2
- [x] `recharts` updated to 3.x
- [x] Verified no `TypographyStylesProvider` usage
- [x] Verified no `color` prop on `Text`/`Anchor`
- [x] Verified no `Collapse` with `in` prop
- [x] Verified no `Spoiler` with `initialState` prop
- [x] Verified no `Grid` with `gutter` prop
- [x] Verified no `positionDependencies` on `Popover`/`Tooltip`
- [x] Verified no `useMouse`/`useFullscreen`/`useMutationObserver` hook usage
- [x] Verified no `zodResolver` usage (using `schemaResolver` if needed)
- [x] Verified no renamed hooks types (`UseScrollSpyReturnType`, `StateHistory`, `OS`)

## Notes

- Default radius now uses `md` (8px). Project uses default theme without override.
- `Notifications` component not currently used; `pauseResetOnHover` default change does not affect project.