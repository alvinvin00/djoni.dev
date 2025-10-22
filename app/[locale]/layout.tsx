import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {Analytics} from '@vercel/analytics/react';
import {SpeedInsights} from '@vercel/speed-insights/next';
import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';
import React from 'react';

import {Layout} from '@/components/Layout';
import {BetaDisclaimer} from '@/components/Layout/BetaDisclaimer';

import locales from '@/config/locale';
import '@/styles/globals.css';
import {hasLocale} from 'next-intl';
import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';

config.autoAddCss = false;

export const generateStaticParams = () => {
  return locales.map((locale) => ({locale}));
};

const RootLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) => {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`text-black dark:text-white scroll-smooth min-h-screen`}>
        <Layout>
          <BetaDisclaimer />
          {children}
        </Layout>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{locale: string}>;
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

export default RootLayout;
