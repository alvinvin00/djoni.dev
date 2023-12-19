import {config} from "@fortawesome/fontawesome-svg-core";
import {Layout} from "@/components/Layout";
import {PropsWithChildren} from "react";
import '../../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

export const generateStaticParams = async () => [{lang: 'en-US'}, {lang: 'id'}];

type RootLayoutProps = { params: { lang: string } };

const RootLayout = ({children, params}: PropsWithChildren<RootLayoutProps>) => (
    <html lang={params.lang}>
    <body className={`text-black dark:text-white scroll-smooth`}>
    <Layout>
        {children}
    </Layout>
    </body>
    </html>
);
export default RootLayout
