import React from "react";
import {getBlogs} from "@/utils/greymatter";
import {Card, CardContent, CardHeader} from "@/components/Card";

export const BlogCarousel = ({lang}: { lang: string }) => {
        const projects = getBlogs(lang).slice(0, 4);

        return (
            <section className="mx-1">
                <h2 className="text-2xl font-bold mb-4">Latest Post</h2>
                <div className={'grid grid-cols-4 gap-1'}>
                    {projects.map((blog) => {
                        const metadata = blog.data;

                        return (
                            <Card key={blog.data['slug']} className={'h-20 text-black'}>
                                <CardHeader>
                                    <h3 className="text-xl font-bold">
                                        {metadata.title}
                                    </h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm line-clamp-3">
                                        {metadata.description}
                                    </p>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </section>);
    }
;
