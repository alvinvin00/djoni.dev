import React from "react";
import {BlogCarousel} from "./BlogCarousel";
import type {Metadata} from "next";
import Image from "next/image";
import {Button} from "react-aria-components";
import Link from "next/link";
import homeBg from '/public/assets/home-bg.jpg'
import {useTranslations} from "next-intl";
import {getTranslations, unstable_setRequestLocale} from "next-intl/server";

const Page = ({params: {locale}}: { params: { locale: string } }) => {
    unstable_setRequestLocale(locale);

    const t = useTranslations('Home')

    return (
        <div className="text-black dark:text-white">
            <div className={'relative w-full h-auto max-h-60 aspect-video'}>
                <Image
                    src={homeBg}
                    alt={'Photo of a code snippet, courtesy of Unsplash'}
                    className={'object-cover'}
                    placeholder={'blur'}
                    fill
                />
            </div>
            <section className="container">
                <div
                    className="rounded-2xl shadow-xl bg-white dark:bg-gray-700 p-2 w-auto xl:w-max mx-auto relative top-[-50px]">
                    <h1 className="text-2xl text-center font-bold mb-2">
                        {t('welcome_text')}
                    </h1>
                    <p className="text-lg text-wrap">
                        {t('welcome_text_2')}
                    </p>
                    <div
                        className={'flex flex-row justify-center gap-2 transition-all ease-in-out duration-300 m-2'}>
                        <Link href={`/now`}>
                            <Button className={
                                'text-white font-bold p-2 rounded-xl bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 ease-in-out duration-300'
                            }>
                                {t('now_button')}
                            </Button>
                        </Link>
                        <Link href={`/projects`}>
                            <Button className={
                                'text-white font-bold p-2 rounded-xl bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 ease-in-out duration-300'
                            }>
                                {t('project_button')}
                            </Button>
                        </Link>
                        <Link href={`/blog`}>
                            <Button className={
                                'text-white font-bold p-2 rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 ease-in-out duration-300'
                            }>
                                {t('blog_button')}
                            </Button>
                        </Link>
                    </div>
                    <p className={'text-lg font-bold text-center'}>
                        {t('thanks_text')}
                    </p>
                </div>
                <BlogCarousel locale={locale}/>
            </section>
        </div>
    )
}

export const generateMetadata = async ({params: {locale}}: { params: { locale: string } }): Promise<Metadata> => {
    unstable_setRequestLocale(locale);

    const t = await getTranslations({locale, namespace: 'Home'})

    return {
        title: t('title'),
    }
}


export default Page
