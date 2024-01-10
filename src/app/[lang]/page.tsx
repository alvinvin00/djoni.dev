import {getDictionary} from "@/app/[lang]/dictionaries";
import React from "react";
import {BetaDisclaimer} from "@/components/Layout/BetaDisclaimer";
import {BlogCarousel} from "@/app/[lang]/BlogCarousel";
import {ProjectShowcase} from "@/app/[lang]/ProjectShowcase";

const Page = async ({params: {lang}}: { params: { lang: string } }) => {
    const dict = await getDictionary(lang as 'en' | 'id')

    return (
        <main className="w-full text-black dark:text-white">
            <section className="mb-8 rounded-2xl dark:text-black dark:bg-white p-2 w-3/4 mx-auto">
                <h1 className="text-2xl font-bold mb-2">
                    {dict.home.welcome_text}
                </h1>
                <p className="text-lg">
                    {dict.home.welcome_text_2}
                </p>
            </section>
            <ProjectShowcase lang={lang}/>
            <BlogCarousel lang={lang}/>
        </main>
    )
}

export const generateMetadata = async ({params: {lang}}: { params: { lang: string } }) => {
    const dict = await getDictionary(lang as 'en' | 'id')

    return {
        title: dict.home.title,
    }
}


export default Page
