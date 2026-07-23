import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import {defineConfig} from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://djoni.dev',
    output: 'static',
    integrations: [react(), sitemap()],
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            tsconfigPaths: true,
        },
    },
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'id'],
        routing: {
            prefixDefaultLocale: true,
        },
    },
    prefetch: {
        prefetchAll: true,
        defaultStrategy: 'viewport',
    },
    compressHTML: 'jsx',
});
