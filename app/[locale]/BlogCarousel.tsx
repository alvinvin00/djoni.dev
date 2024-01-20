import React from "react";
import {getBlogs} from "@/utils/greymatter";
import {Card, CardContent, CardHeader, CardMedia} from "@/components/Card";
import dayjs from "dayjs";
import Image from "next/image";

export const BlogCarousel = ({locale}: { locale: string }) => {
    const projects = getBlogs(locale).slice(0, 4);

    return (
        <section className="my-2">
            <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">Latest Post</h2>
            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'}>
                {projects.map((blog) => {
                    const metadata = blog.data;
                    return (
                        <Card key={metadata.slug} className={'bg-white dark:bg-gray-700 dark:text-white'}>
                            <CardMedia className={'h-20'}>
                                <Image src={metadata.thumbnail} alt={metadata.title} fill
                                       className={'object-cover object-top'}
                                />
                            </CardMedia>
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