import React from "react";
import {Card, CardContent, CardHeader, CardMedia} from "@/components/Card";
import {getProjects} from "@/utils/greymatter";
import dayjs from "dayjs";
import Image from "next/image";

interface ProjectShowcaseProps {
    locale: string
}

export const ProjectCarousel = ({locale}: ProjectShowcaseProps) => {
    const projects = getProjects(locale).sort((a, b) => {
        return dayjs(a.data['date']).diff(b.data['date'], 'day')
    }).slice(0, 4)

    return (
        <section className="my-2">
            <h2 className="text-2xl font-bold mb-4 text-center">My Projects</h2>
            <div className={'grid grid-cols-2 md:grid-cols-4 gap-2'}>
                {projects.map((project) => {
                    const metadata = project.data;

                    return (
                        <Card key={metadata.slug} className={'h-auto text-black'}>
                            <CardMedia className={'h-40'}>
                                {metadata.thumbnail !== undefined
                                    ? <Image src={metadata.thumbnail} alt={metadata.title} fill/>
                                    : <div className={'h-40 bg-black'}></div>
                                }
                            </CardMedia>
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
        </section>
    );
};
