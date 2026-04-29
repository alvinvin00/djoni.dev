import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import {defineConfig} from 'astro/config';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    integrations: [react()],
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
});
