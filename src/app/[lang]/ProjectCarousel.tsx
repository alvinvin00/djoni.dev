import React from "react";
import {Card, CardContent, CardHeader} from "@/components/Card";
import {getProjects} from "@/utils/greymatter";
import dayjs from "dayjs";

interface ProjectShowcaseProps {
    lang: string
}

export const ProjectCarousel = ({lang}: ProjectShowcaseProps) => {
    const projects = getProjects(lang).sort((a, b) => {
        return dayjs(a.data['date']).diff(b.data['date'], 'day')
    }).slice(0, 4)

    return (
        <section className="mx-1">
            <h2 className="text-2xl font-bold mb-4">My Projects</h2>
            <div className={'grid grid-cols-4 gap-2'}>
                {projects.map((project) => {
                    const metadata = project.data;

                    return (
                        <Card key={project.data['slug']} className={'h-auto text-black'}>
                            <CardHeader>
                                <h3 className="text-xl font-bold">
                                    {metadata.title}
                                </h3>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm">
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
