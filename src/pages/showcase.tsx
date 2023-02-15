import {BlogEntries, BlogEntriesDescription, BlogEntriesImage, BlogEntriesTitle} from "@/components/Card/BlogEntries";
import React from "react";
import Head from "next/head";

const Page = () => {
    return (
        <>
            <Head>
                <title>Showcase</title>
            </Head>
            <div className="flex flex-col items-center py-1 bg-blue-500">
                <h1 className={"text-xl"}>Hello There</h1>
                <h1 className={"text-xl font-bold"}>This is home page</h1>
                <h1 className={"text-xl underline"}>Coming Soon</h1>
            </div>
            <div className="py-4 bg-blue-200">
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
