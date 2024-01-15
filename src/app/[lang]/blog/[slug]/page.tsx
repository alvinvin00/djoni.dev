import React from 'react';
import {getBlogData, getBlogs} from "@/utils/greymatter";

type BlogContentProps = {
    params: {
        lang: string,
        slug: string
    }
};

export const generateStaticParams = ({params: {lang}}: { params: { lang: string } }) => {
    const blogs = getBlogs(lang);

    return blogs.map((blog) => {
        const metadata = blog.data;

        return ({
            slug: metadata.slug
        });
    })
}

export const generateMetadata = ({params: {lang, slug}}: BlogContentProps) => {
    const matterResult = getBlogData(lang, slug);

    return {
        title: matterResult.data['title'],
        description: matterResult.data['description'],
        keywords: matterResult.data['keywords'],
    }
}

const Page = ({params: {lang, slug}}: BlogContentProps) => {
    const matterResult = getBlogData(lang, slug);

    return <>
        {matterResult.content}
    </>
}

export default Page;
