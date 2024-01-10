import React from "react";
import {getAboutData} from "@/utils/greymatter";
import Markdown from "react-markdown";

const Page = ({params: {lang}}: { params: { lang: string } }) => {
    const aboutData = getAboutData(lang as 'en' | 'id')

    return (
        <div className="container">
            <div
                className={'w-3/4 mx-auto rounded-lg p-2 bg-white text-center dark:bg-black text-black dark:text-white'}>
                <h1 className={'text-lg font-bold'}>
                    Alvin Leonardo <span className={'text-blue-700'}>Djoni</span>
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
