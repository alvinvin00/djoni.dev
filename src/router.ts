import {createRouter} from '@tanstack/react-router';
import {routeTree} from './routeTree.gen';

export function getRouter() {
  return createRouter({
    routeTree,
    scrollRestoration: true,
  });
}

declare module '@tanstack/react-router' {
  interface Register {
    // This infers the type of our router and registers it across your entire project
    router: ReturnType<typeof createRouter>;
  }
}
