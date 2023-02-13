import {NextPage} from "next";
import Head from "next/head";

const Page = (props: NextPage) => {
    return (
        <>
            <Head>
                <title>Halaman Utama</title>
            </Head>
            <div className="container flex flex-col items-center py-1">
                <h1 className={"text-xl"}>Hello There</h1>
                <h1 className={"text-xl font-bold"}>This is home page</h1>
                <h1 className={"text-xl underline"}>Coming Soon</h1>
            </div>
        </>
    )
}

export default Page
