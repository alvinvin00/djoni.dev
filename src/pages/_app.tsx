import {AppProps} from "next/app";
import {Layout} from "@/components/Layout";
import '../styles/globals.css';
import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

const MyApp = ({Component, pageProps}: AppProps) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
);
export default MyApp
