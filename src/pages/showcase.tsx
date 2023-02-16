import {BlogCard} from "@/components/Card/Blog";
import React from "react";
import Head from "next/head";

const Page = () => {
    return (
        <>
            <Head>
                <title>Showcase</title>
            </Head>
            <div className="bg-blue-200 flex flex-col gap-4 py-2">
                <div className="container flex flex-col items-center bg-white shadow-lg rounded-xl">
                    <h5 className="text-lg font-bold">
                        Blog
                    </h5>
                    <p className="text-md">
                        I&apos;m uploading my blog entries here.
                    </p>
                    <p className="text-sm">
                        Writing all about programming and video games.
                    </p>
                </div>
                <div className="container grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 z-10">
                    <BlogCard
                        title={'Lorem ipsum dolor.'}
                        summary={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, beatae dolores eveniet id libero perferendis soluta totam? A accusantium, animi earum incidunt, labore, nemo neque nesciunt porro possimus soluta voluptas.'}
                        imageUrl={'https://via.placeholder.com/400'}
                        imageDescription={'Test'}
                        createdAt={new Date()}
                    />
                    <BlogCard
                        title={'Lorem ipsum dolor.'}
                        summary={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, beatae dolores eveniet id libero perferendis soluta totam? A accusantium, animi earum incidunt, labore, nemo neque nesciunt porro possimus soluta voluptas.'}
                        imageUrl={'https://via.placeholder.com/400'}
                        imageDescription={'Test'}
                        createdAt={new Date()}
                    />
                    <BlogCard
                        title={'Lorem ipsum dolor.'}
                        summary={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, beatae dolores eveniet id libero perferendis soluta totam? A accusantium, animi earum incidunt, labore, nemo neque nesciunt porro possimus soluta voluptas.'}
                        imageUrl={'https://via.placeholder.com/400'}
                        imageDescription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, beatae dolores eveniet id libero perferendis soluta totam? A accusantium, animi earum incidunt, labore, nemo neque nesciunt porro possimus soluta voluptas.'}
                        createdAt={new Date()}
                    />
                </div>
            </div>
        </>
    )
}

//TODO: Query Markdown files and display them here

export default Page;
