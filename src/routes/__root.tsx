import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from '@mantine/core';
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
  useMatches,
} from '@tanstack/react-router';
import {IntlProvider} from 'react-intl';
import {AppLayout} from '@/components/Layout/AppLayout';
import enMessages from '../../messages/en.json';
import idMessages from '../../messages/id.json';

config.autoAddCss = false;

const messages = {
  en: enMessages,
  id: idMessages,
};

export const Route = createRootRoute({
  head: () => {
    const meta = [
      {charSet: 'utf-8'},
      {title: "Djoni's Den"},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'description', content: "Djoni's Den Personal Website"},
      {property: 'og:image', content: '/assets/og/semarang-red.jpg'},
      {property: 'og:url', content: 'https://djoni.dev'},
      {name: 'twitter:creator', content: '@alvinvin00'},
      {name: 'twitter:site', content: '@alvinvin00'},
    ];

    const links = [
      {rel: 'canonical', href: '/'},
      {rel: 'alternate', href: '/id', hrefLang: 'id'},
    ];

    return {meta, links};
  },
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
  const matches = useMatches();
  const localeMatch = matches.find((match) => match.params.locale);
  const locale = (localeMatch?.params.locale || 'en') as keyof typeof messages;

  return (
    <html lang={locale} {...mantineHtmlProps}>
      <head>
        <HeadContent />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme="auto">
          <IntlProvider locale={locale} messages={messages[locale]}>
            <AppLayout>
              <Outlet />
            </AppLayout>
          </IntlProvider>
        </MantineProvider>
        <Scripts />
      </body>
    </html>
  );
}
