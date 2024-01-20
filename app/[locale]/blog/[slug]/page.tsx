import React from 'react';
import {getBlogData, getBlogs} from "@/utils/greymatter";

type BlogContentProps = {
    params: {
        locale: string,
        slug: string
    }
};

export const generateStaticParams = ({params: {locale}}: { params: { locale: string } }) => {
    const blogs = getBlogs(locale);

    return blogs.map((blog) => {
        const metadata = blog.data;

        return ({
            slug: metadata.slug
        });
    })
}

export const generateMetadata = ({params: {locale, slug}}: BlogContentProps) => {
    const matterResult = getBlogData(locale, slug);

    return {
        title: matterResult.data['title'],
        description: matterResult.data['description'],
        keywords: matterResult.data['keywords'],
    }
}

const Page = ({params: {locale, slug}}: BlogContentProps) => {
    const matterResult = getBlogData(locale, slug);

    return <>
        {matterResult.content}
    </>
}

export default Page;
