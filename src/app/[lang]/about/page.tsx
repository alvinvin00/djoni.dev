import React from "react";
import {NextPage} from "next";

const Page = (props: NextPage) => {
    return (
        <div className="container">
            <h1 className="text-4xl font-bold">
                About Me
            </h1>
        </div>
    )
}

export const metadata = {
    title: "About Me",
}

export default Page
