import React from "react";
import {getProjects} from "@/utils/greymatter";
import {Card, CardContent, CardHeader} from "@/components/Card";

const Page = ({params: {lang}}: { params: { lang: string } }) => {
    const projects = getProjects(lang)

    return (
        <>
            <div className="flex flex-col gap-4 py-2">
                <div className="container flex flex-col items-center bg-white shadow-lg rounded-xl">
                    <h5 className="text-lg font-bold">
                        Showcase
                    </h5>
                    <p className="text-md">
                        Here&apos;s all the projects that I have worked on
                    </p>
                </div>
                <div className="container grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 z-10">
                    {projects.map((project) => {
                        const metadata = project.data
                        return (
                            <Card key={metadata.slug}>
                                <CardHeader>
                                    <h3 className="text-lg font-bold whitespace-nowrap overflow-clip overflow-ellipsis">
                                        {metadata.title}
                                    </h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-xs font-light line-clamp-3">
                                        {metadata.description}
                                    </p>
                                </CardContent>
                            </Card>)
                    })}
                </div>
            </div>
        </>
    )
}

export const metadata = {
    title: "Showcase | Djoni's Den"
}

export default Page;
