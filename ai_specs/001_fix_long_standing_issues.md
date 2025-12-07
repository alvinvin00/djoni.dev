## Plan to Fix Long Standing Issues

This plan addresses several identified issues in the `djoni.dev` project, focusing on internationalization (i18n), content collection robustness, and linting.

### Identified Issues:

1.  **Broken Internationalization (i18n)**:
    *   Navigation links in `src/components/Layout/AppLayout.tsx` are hardcoded to the 'en' locale.
    *   The `<html>` tag's `lang` attribute in `src/routes/__root.tsx` is hardcoded to 'en'.
2.  **Brittle Content Sourcing**:
    *   The `nowCollection` transform function in `content-collections.ts` uses a brittle `filePath.split('/')[4]` logic to extract the locale.
3.  **Linting Issues**:
    *   `biome.json` schema mismatch.
    *   Unused imports across various components and routes.
    *   `src/components/Layout/AppLayout.module.css` contains an unknown `@mixin` at-rule, leading to linting errors (though PostCSS handles it during build).
    *   Linting attempts were also targeting generated `dist/` and `.tanstack` files, causing errors.
    *   `src/routeTree.gen.ts` (a generated file) also had lint warnings.

### Proposed Solutions & Steps:

1.  **Fix I18n in Navigation (`src/components/Layout/AppLayout.tsx`)**:
    *   **Action**: Modify `AppLayout.tsx` to dynamically determine the current locale from the router state (`useMatches` from `@tanstack/react-router`) instead of hardcoding 'en'.
    *   **Outcome**: Navigation links will correctly reflect and navigate to the active locale.

2.  **Fix I18n in Root Layout (`src/routes/__root.tsx`)**:
    *   **Action**: Update the `RootLayout` component to dynamically set the `lang` attribute of the `<html>` tag based on the current locale, also derived from router matches.
    *   **Outcome**: The page's language attribute will correctly reflect the content's language, improving accessibility and SEO.

3.  **Robust Content Sourcing (`content-collections.ts`)**:
    *   **Action**: Refactor the `nowCollection` transform function to safely extract the language code from the file name using `content._meta.filePath.split('/').pop().split('.')[0]`, which is more robust than relying on a fixed path segment.
    *   **Outcome**: Content collection will be more reliable, preventing potential issues if the file path structure changes.

4.  **Resolve Linting Issues**:
    *   **Action**: Update the `"$schema"` version in `biome.json` to the correct `2.3.8`.
    *   **Action**: Correct the `files` configuration in `biome.json` to use `includes` with negation patterns (`!!`) to properly ignore build artifacts (e.g., `dist/`, `.tanstack`) and generated files (`src/routeTree.gen.ts`), as well as `src/components/Layout/AppLayout.module.css` (due to `@mixin` usage that's PostCSS-specific).
    *   **Action**: Run `pnpm biome check --write --unsafe src` to automatically fix unused imports and other fixable issues in the source directory.
    *   **Outcome**: The project will adhere to linting standards, improving code quality and maintainability.

5.  **Verification**:
    *   **Action**: After applying all changes, run `pnpm lint` and `pnpm build` to confirm that there are no new errors or warnings and that the project builds successfully.
    *   **Outcome**: Assurance that the fixes are correctly implemented and haven't introduced regressions.

This plan aims to address the core "long standing issues" and improve the overall stability and internationalization of the project.

### TODO

- [x] Fix I18n in Navigation (`src/components/Layout/AppLayout.tsx`)
- [x] Fix I18n in Root Layout (`src/routes/__root.tsx`)
- [x] Robust Content Sourcing (`content-collections.ts`)
- [x] Resolve Linting Issues (Biome config, unused imports)
- [x] Verification (Lint & Build)
