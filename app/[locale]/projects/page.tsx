import React from "react";
import {getProjects} from "@/utils/greymatter";
import {Card, CardContent, CardHeader, CardMedia} from "@/components/Card";
import dayjs from "dayjs";
import Image from "next/image";

const Page = ({params: {locale}}: { params: { locale: string } }) => {
    const projects = getProjects(locale).sort((a, b) => {
        return dayjs(a.data['date']).diff(b.data['date'], 'day')
    })

    return (
        <div className='container'>
            <div className="flex flex-col gap-4 py-2">
                <div
                    className="flex flex-col items-center bg-white dark:bg-gray-700 dark:text-white shadow-lg rounded-xl">
                    <h5 className="text-lg font-bold">
                        Projects
                    </h5>
                    <p className="text-md">
                        Here&apos;s all the projects that I have worked on
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {projects.map((project) => {
                        const metadata = project.data
                        return (
                            <Card key={metadata.slug} className='bg-white dark:bg-gray-700 dark:text-white'>
                                <CardMedia className='max-h-60'>
                                    <Image src={metadata.thumbnail} alt={metadata.title} className='object-cover object-top'
                                           fill/>
                                </CardMedia>
                                <CardHeader>
                                    <h3 className="text-lg font-bold whitespace-nowrap overflow-clip overflow-ellipsis">
                                        {metadata.title}
                                    </h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-md font-light line-clamp-3">
                                        {metadata.description}
                                    </p>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export const metadata = {
    title: "Showcase | Djoni's Den"
}

export default Page;
