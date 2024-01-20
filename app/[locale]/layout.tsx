import {config} from "@fortawesome/fontawesome-svg-core";
import {Layout} from "@/components/Layout";
import React, {PropsWithChildren} from "react";
import '@/styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css'
import {Analytics} from "@vercel/analytics/react";
import {BetaDisclaimer} from "@/components/Layout/BetaDisclaimer";
import locales from "@/config/locale";
import {getTranslations, unstable_setRequestLocale} from "next-intl/server";
import type {Metadata} from "next";
import {SpeedInsights} from "@vercel/speed-insights/next";

config.autoAddCss = false

export const generateStaticParams = async () => {
    return locales.map((locale) => ({locale}));
};

type RootLayoutProps = { params: { locale: string } };

const RootLayout = ({children, params: {locale}}: PropsWithChildren<RootLayoutProps>) => {
    unstable_setRequestLocale(locale);

    return (
        <html lang={locale}>
        <body className={`text-black dark:text-white scroll-smooth min-h-screen`}>
        <Layout>
            <BetaDisclaimer/>
            {children}
        </Layout>
        <Analytics/>
        <SpeedInsights/>
        </body>
        </html>
    );
};

export const generateMetadata = async ({params: {locale}}: { params: { locale: string } }) => {
    unstable_setRequestLocale(locale);

    const t = await getTranslations({locale, namespace: 'Metadata'})

    return {
        alternates: {
            canonical: '/',
            languages: {
                id: '/id',
            }
        },
        description: t('description'),
        metadataBase: new URL('https://djoni.dev'),
        openGraph: {
            images: '/assets/og/semarang-red.jpg',
            url: 'https://djoni.dev'
        },
        title: {
            template: "%s | Djoni's Den",
            default: t('title')
        },
        twitter: {
            creator: '@alvinvin00',
            site: '@alvinvin00'
        },
    } satisfies Metadata
}

export default RootLayout
