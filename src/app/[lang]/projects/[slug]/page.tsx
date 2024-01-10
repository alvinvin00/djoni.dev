import React from 'react';
import {getBlogs, getProjectData} from "@/utils/greymatter";
import Markdown from "react-markdown";

type BlogContentProps = {
    params: {
        lang: string,
        slug: string
    }
};

export const generateStaticParams = ({params: {lang}}: { params: { lang: string } }) => {
    const projects = getBlogs(lang);

    return projects.map((project) => {
        return {
            slug: project.data['slug']
        }
    })
}


export const generateMetadata = ({params: {lang, slug}}: BlogContentProps) => {
    const matterResult = getProjectData(lang, slug);

    return {
        title: matterResult.data['title'],
        description: matterResult.data['description'],
        keywords: matterResult.data['keywords'],
    }
}

const Page = ({params: {lang, slug}}: BlogContentProps) => {
    const matterResult = getProjectData(lang, slug);

    return (
        <>
            <Markdown>
                {matterResult.content}
            </Markdown>
        </>
    )
}

export default Page;
