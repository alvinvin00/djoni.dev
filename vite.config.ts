import contentCollections from '@content-collections/vite';
import {tanstackStart} from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import {defineConfig} from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    contentCollections(),
    tanstackStart({
      srcDirectory: 'src', // This is the default
    }),
    viteReact(),
  ],
});
