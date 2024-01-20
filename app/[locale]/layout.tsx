import {config} from "@fortawesome/fontawesome-svg-core";
import {Layout} from "@/components/Layout";
import React, {PropsWithChildren} from "react";
import '@/styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css'
import {Analytics} from "@vercel/analytics/react";
import {BetaDisclaimer} from "@/components/Layout/BetaDisclaimer";
import locales from "@/config/locale";
import {getTranslations, unstable_setRequestLocale} from "next-intl/server";
import {Metadata} from "next";

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
        </body>
        </html>
    );
};

export const generateMetadata = async ({params: {locale}}: { params: { locale: string } }) => {
    unstable_setRequestLocale(locale);

    const t = await getTranslations({locale, namespace: 'Metadata'})

    return {
        title: t('title'),
        description: t('description'),
        metadataBase: new URL('https://djoni.dev'),
        alternates: {
            canonical: '/',
            languages: {
                id: '/id',
            }
        },
        openGraph: {
            images: '/assets/og/semarang-red.jpg',
            url: 'https://djoni.dev'
        },
    } satisfies Metadata
}

export default RootLayout
