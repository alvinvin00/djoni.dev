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
    const blogDir = path.join(process.cwd(), `/src/assets/blog/${lang}`);

    return fs.readdirSync(`${blogDir}`).map((file) => {
        // Read markdown file as string
        const fullPath = path.join(blogDir, file);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        return {
            slug: matterResult.data['slug'],
        }
    });
}

const readBlogFileFromAssets = (lang: string, slug: string) => {
    const filepath = path.join(process.cwd(), `/src/assets/blog/${lang}/${slug}.md`);

    const fileContent = fs.readFileSync(filepath, 'utf8');

    return matter(fileContent);
}

const Page = ({params: {lang, slug}}: BlogContentProps) => {
    const matterResult = readBlogFileFromAssets(lang, slug);

    return <>
        {matterResult.content}
    </>
}

export default Page;
