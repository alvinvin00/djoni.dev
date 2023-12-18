import {config} from "@fortawesome/fontawesome-svg-core";
import {Layout} from "@/components/Layout";
import {PropsWithChildren} from "react";
import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

const RootLayout = ({children}: PropsWithChildren) => (
    <html lang={'id'}>
    <body className={`text-black dark:text-white scroll-smooth`}>
    <Layout>
        {children}
    </Layout>
    </body>
    </html>
);
export default RootLayout
