import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type React from 'react';
import '@mantine/core/styles.css';
import {mantineHtmlProps, MantineProvider} from '@mantine/core';
import {AppLayout} from '@/components/Layout/AppLayout';
import {createRootRoute, HeadContent, Outlet, Scripts} from '@tanstack/react-router';

config.autoAddCss = false;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {charSet: 'utf-8'},
      {title: 'Djoni\'s Den'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    ],
    // alternates: {
    //   canonical: '/',
    //   languages: {
    //     id: '/id',
    //   },
    // },
    // description: 'Testing Djoni\'s Den Personal Website',
    // metadataBase: new URL('https://djoni.dev'),
    // openGraph: {
    //   images: '/assets/og/semarang-red.jpg',
    //   url: 'https://djoni.dev',
    // },
    // title: {
    //   template: '%s | Djoni\'s Den',
    //   default: 'Djoni\'s Den',
    // },
    // twitter: {
    //   creator: '@alvinvin00',
    //   site: '@alvinvin00',
    // },
  }),
  component: RootLayout,
  notFoundComponent: function NotFound() {
    return (
      <div className={'container'}>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    );
  },
});

function RootLayout() {
  return (
    <html lang="en"  {...mantineHtmlProps}>
    <head>
      <HeadContent />
    </head>
    <body>
    <MantineProvider defaultColorScheme="auto">
      <AppLayout>
        <Outlet />
      </AppLayout>
    </MantineProvider>
    <Scripts />
    </body>
    </html>
  );
};
