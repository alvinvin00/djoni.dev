import React from "react";

const Page = () => {
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
                <div className='my-4 text-justify'>
                    <p>
                        I&apos;m a software engineer with 4 years of experience in web development and 2 years in mobile
                        development. My current focus is on web development, especially with NextJS.
                    </p>
                    <p>
                        I&apos;m also a tech enthusiast, I love to learn new things and try new technologies.
                    </p>

                </div>
            </div>
        </div>
    )
}

export const metadata = {
    title: "About Me",
}

export default Page
