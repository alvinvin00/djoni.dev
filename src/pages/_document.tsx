import {Head, Html, Main, NextScript} from "next/document";

const Document = () => {
    return (
        <Html>
            <Head/>
            <body className={`text-black dark:text-white scroll-smooth`}>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}

export default Document
