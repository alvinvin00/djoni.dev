import {BlogEntries, BlogEntriesDescription, BlogEntriesImage, BlogEntriesTitle} from "@/components/Card/BlogEntries";
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
                    <BlogEntries>
                        <BlogEntriesImage
                            src={'https://via.placeholder.com/400'}
                            alt={''}
                        />
                        <BlogEntriesTitle>
                            Lorem ipsum dolor
                        </BlogEntriesTitle>
                        <BlogEntriesDescription>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, beatae dolores eveniet
                            id libero perferendis soluta totam? A accusantium, animi earum incidunt, labore, nemo neque
                            nesciunt porro possimus soluta voluptas.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloremque eum id ipsa
                            nesciunt nobis, nulla officiis praesentium reiciendis veniam. A amet delectus ex, inventore
                            minima qui quidem quos repudiandae?
                        </BlogEntriesDescription>
                    </BlogEntries>
                    <BlogEntries>
                        <BlogEntriesImage
                            src={'https://via.placeholder.com/400'}
                            alt={''}
                        />
                        <BlogEntriesTitle>
                            Lorem ipsum dolor
                        </BlogEntriesTitle>
                        <BlogEntriesDescription>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, beatae dolores eveniet
                            id libero perferendis soluta totam? A accusantium, animi earum incidunt, labore, nemo neque
                            nesciunt porro possimus soluta voluptas.
                        </BlogEntriesDescription>
                    </BlogEntries>
                    <BlogEntries>
                        <BlogEntriesImage
                            src={'https://via.placeholder.com/400'}
                            alt={''}
                        />
                        <BlogEntriesTitle>
                            Lorem ipsum dolor
                        </BlogEntriesTitle>
                        <BlogEntriesDescription>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, beatae dolores eveniet
                            id libero perferendis soluta totam? A accusantium, animi earum incidunt, labore, nemo neque
                            nesciunt porro possimus soluta voluptas.
                        </BlogEntriesDescription>
                    </BlogEntries>
                </div>
            </div>
        </>
    )
}

//TODO: Query Markdown files and display them here

export default Page;
