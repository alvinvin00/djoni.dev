import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type React from 'react';
import '@mantine/core/styles.css';
import {MantineProvider} from '@mantine/core';
import {AppLayout} from '@/components/Layout/AppLayout';
import {createRootRoute, HeadContent, Outlet, Scripts} from '@tanstack/react-router';

config.autoAddCss = false;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      // {name: 'twitter'},
      {title: 'Djoni\'s Den'},
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
});

async function RootLayout() {
  return (
    <html lang="en">
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
