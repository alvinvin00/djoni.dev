import {config} from "@fortawesome/fontawesome-svg-core";
import {Layout} from "@/components/Layout";
import React, {PropsWithChildren} from "react";
import '../../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css'
import {Analytics} from "@vercel/analytics/react";
import {BetaDisclaimer} from "@/components/Layout/BetaDisclaimer";

config.autoAddCss = false

export const generateStaticParams = async () => [{lang: 'en'}, {lang: 'id'}];

type RootLayoutProps = { params: { lang: string } };

const RootLayout = ({children, params}: PropsWithChildren<RootLayoutProps>) => (
    <html lang={params.lang}>
    <body className={`text-black dark:text-white scroll-smooth`}>
    <Layout>
        <BetaDisclaimer lang={params.lang}/>
        {children}
    </Layout>
    <Analytics/>
    </body>
    </html>
);
export default RootLayout
