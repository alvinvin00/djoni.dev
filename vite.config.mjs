import {defineConfig} from 'vite';
import viteReact from '@vitejs/plugin-react';
import contentCollections from '@content-collections/vite';
import {tanstackStart} from '@tanstack/react-start/plugin/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tanstackStart({
      srcDirectory: 'src', // This is the default
    }),
    viteReact(),
    contentCollections(),
    // Enables Vite to resolve imports using path aliases.
    tsconfigPaths({
      projects: ['./tsconfig.json'],
    }),

  ],
});
