import React from "react";
import {getDictionary} from "./dictionaries";
import {BlogCarousel} from "./BlogCarousel";
import type {Metadata} from "next";
import Image from "next/image";
import {Button} from "react-aria-components";
import Link from "next/link";

const Page = async ({params: {lang}}: { params: { lang: string } }) => {
    const dict = await getDictionary(lang as 'en' | 'id')

    return (
        <div className="text-black dark:text-white">
            <div className={'relative w-full h-auto max-h-60 aspect-video object-cover'}>
                <Image src={'/assets/home-bg.jpg'} alt={'Photo of a code snippet, courtesy of Unsplash'} fill/>
            </div>
            <section className="container">
                <div className="mb-6 rounded-2xl shadow-xl dark:bg-gray-700 p-2 w-3/4 mx-auto relative top-[-50px]">
                    <h1 className="text-2xl text-center font-bold mb-2">
                        {dict.home.welcome_text}
                    </h1>
                    <p className="text-lg">
                        {dict.home.welcome_text_2}
                    </p>
                    <div
                        className={'flex flex-row justify-center gap-2 transition-all ease-in-out duration-300 m-2'}>
                        <Link href={`${lang}/now`}>
                            <Button className={
                                'text-white font-bold p-2 rounded-xl bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 hover:scale-105 ease-in-out duration-300'
                            }>
                                {dict.home.now_button}
                            </Button>
                        </Link>
                        <Link href={`${lang}/projects`}>
                            <Button className={
                                'text-white font-bold p-2 rounded-xl bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 hover:scale-105 ease-in-out duration-300'
                            }>
                                {dict.home.project_button}
                            </Button>
                        </Link>
                        <Link href={`${lang}/blog`}>
                            <Button className={
                                'text-white font-bold p-2 rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 hover:scale-105 ease-in-out duration-300'
                            }>
                                {dict.home.blog_button}
                            </Button>
                        </Link>
                    </div>
                    <p className={'text-lg font-bold text-center'}>
                        {dict.home.thanks_text}
                    </p>
                </div>
                <BlogCarousel lang={lang}/>
            </section>
        </div>
    )
}

export const generateMetadata = async ({params: {lang}}: { params: { lang: string } }): Promise<Metadata> => {
    const dict = await getDictionary(lang as 'en' | 'id')

    return {
        title: "Djoni's Den",
    }
}


export default Page
