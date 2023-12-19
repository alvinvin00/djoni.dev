import React from 'react';
import * as fs from "fs";
import matter from "gray-matter";
import * as path from "path";
import * as process from "process";

type BlogContentProps = {
    params: {
        lang: string,
        slug: string
    }
};

export const generateStaticParams = ({params: {lang}}: { params: { lang: string } }) => {
    const blogDir = path.join(process.cwd(), '/src/assets/blog');

    return fs.readdirSync(`${blogDir}/${lang}`).map((file) => {
        const fileName = file.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(blogDir, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        return {
            slug: matterResult.data['slug'],
        }
    });
}

const Page = ({params: {lang, slug}}: BlogContentProps) => {
    return <></>
}

export default Page;
