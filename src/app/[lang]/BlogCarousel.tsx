import React from "react";
import {getBlogs} from "@/utils/greymatter";
import {Card, CardContent, CardHeader} from "@/components/Card";
import dayjs from "dayjs";

export const BlogCarousel = ({lang}: { lang: string }) => {
    const projects = getBlogs(lang).slice(0, 4);

    return (
        <section className="my-2 ">
            <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">Latest Post</h2>
            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'}>
                {projects.map((blog) => {
                    const metadata = blog.data;
                    return (
                        <Card key={metadata.slug} className={'h-20 bg-white dark:bg-gray-700 dark:text-white'}>
                            <CardHeader>
                                <h3 className="text-lg font-bold">
                                    {metadata.title}
                                </h3>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm line-clamp-3">
                                    {metadata.description}
                                </p>
                                <div className={'flex flex-row flex-nowrap justify-between text-sm text-gray-400'}>
                                    <p>{dayjs(metadata.date).format('DD-MM-YYYY')}</p>
                                    <p>5 minute read</p>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </section>);
};
