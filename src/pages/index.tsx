import {NextPage} from "next";
import Head from "next/head";
import {Tooltip} from "@/components/UI/Tooltip";

const Page = (props: NextPage) => {
    return (
        <>
            <Head>
                <title>Halaman Utama</title>
            </Head>
            <div className="bg-blue-200 py-1">
                <div className="container bg-white shadow-lg flex flex-col items-center my-1 p-1 rounded-lg">
                    <h1 className={"text-xl"}>Hello There</h1>
                    <h1 className={"text-xl font-bold"}>This is home page</h1>
                    <Tooltip title={"I'm here"} position="bottom">
                        <h1 className={"text-xl underline"}>Coming Soon</h1>
                    </Tooltip>
                </div>
            </div>
        </>
    )
}

export default Page
