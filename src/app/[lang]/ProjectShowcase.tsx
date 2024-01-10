import React from "react";
import {Card, CardContent, CardHeader} from "@/components/Card";
import {getProjects} from "@/utils/greymatter";


interface ProjectShowcaseProps {
    lang: string
}

export const ProjectShowcase = ({lang}: ProjectShowcaseProps) => {
    const projects = getProjects(lang)

    return (
        <section className="mx-1">
            <h2 className="text-2xl font-bold mb-4">My Projects</h2>
            <div className={'grid grid-cols-4 gap-1'}>
                {projects.map((project) => {
                    const metadata = project.data;

                    return (
                        <Card key={project.data['slug']} className={'h-20 text-black'}>
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
