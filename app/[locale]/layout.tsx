import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {ColorSchemeScript, MantineProvider} from '@mantine/core';
import {Analytics} from '@vercel/analytics/react';
import {SpeedInsights} from '@vercel/speed-insights/next';
import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';
import type React from 'react';
import '@mantine/core/styles.css';

import {notFound} from 'next/navigation';
import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {AppLayout} from '@/components/Layout/AppLayout';
import {routing} from '@/i18n/routing';

config.autoAddCss = false;

export const generateStaticParams = () => {
  return routing.locales.map((locale) => ({locale}));
};

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

const LocaleLayout = async ({children, params}: LocaleLayoutProps) => {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <MantineProvider defaultColorScheme="auto">
          <NextIntlClientProvider>
            <AppLayout>{children}</AppLayout>
          </NextIntlClientProvider>
        </MantineProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{locale: 'en' | 'id'}>;
}): Promise<Metadata> => {
  const {locale} = await params;

  const t = await getTranslations({locale, namespace: 'Metadata'});

  return {
    alternates: {
      canonical: '/',
      languages: {
        id: '/id',
      },
    },
    description: t('description'),
    metadataBase: new URL('https://djoni.dev'),
    openGraph: {
      images: '/assets/og/semarang-red.jpg',
      url: 'https://djoni.dev',
    },
    title: {
      template: "%s | Djoni's Den",
      default: t('title'),
    },
    twitter: {
      creator: '@alvinvin00',
      site: '@alvinvin00',
    },
  } satisfies Metadata;
};

export default LocaleLayout;
