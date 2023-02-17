import Head from "next/head";
import React from "react";
import {NextPage} from "next";

const Page = (props: NextPage) => {
    return (
        <>
            <Head>
                <title>About Me</title>
            </Head>
            <div className="container">
                <h1 className="text-4xl font-bold">
                    About Me
                </h1>
            </div>
        </>
    )
}

export default Page
