import {NextPage} from "next";
import Head from "next/head";

const Page = (props: NextPage) => {
    return (
        <div>
            <Head>
                <title>Halaman Utama</title>
            </Head>
            <h1>Home Page</h1>
        </div>
    )
}

export default Page
