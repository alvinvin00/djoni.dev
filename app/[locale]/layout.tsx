import {config} from "@fortawesome/fontawesome-svg-core";
import {Layout} from "@/components/Layout";
import React, {PropsWithChildren} from "react";
import '@/styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css'
import {Analytics} from "@vercel/analytics/react";
import {BetaDisclaimer} from "@/components/Layout/BetaDisclaimer";
import locales from "@/config/locale";

config.autoAddCss = false

export const generateStaticParams = async () => {
    return locales.map((locale) => ({locale}));
};

type RootLayoutProps = { params: { locale: string } };

const RootLayout = ({children, params: {locale}}: PropsWithChildren<RootLayoutProps>) => (
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
export default RootLayout
