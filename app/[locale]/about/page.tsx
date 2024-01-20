import React from "react";
import {getAboutData} from "@/utils/greymatter";
import Markdown from "react-markdown";
import {unstable_setRequestLocale} from "next-intl/server";

const Page = ({params: {locale}}: { params: { locale: string } }) => {
    unstable_setRequestLocale(locale);

    const aboutData = getAboutData(locale as 'en' | 'id')

    return (
        <div className="container">
            <div
                className={'rounded-lg p-2 text-center shadow-lg bg-white dark:bg-gray-600 text-black dark:text-white'}>
                <h1 className={'text-xl font-bold'}>
                    Alvin Leonardo <span className={'text-blue-800 dark:text-blue-200'}>Djoni</span>
                </h1>
                <h2 className={'text-sm font-semibold'}>
                    Software Engineer
                </h2>
                <br/>
                <div className='my-4 text-justify'>
                    <Markdown>
                        {aboutData.content}
                    </Markdown>
                </div>
            </div>
        </div>
    )
}

export const metadata = {
    title: "About Me",
}

export default Page
