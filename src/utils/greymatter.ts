import path from "path";
import fs from "fs";
import matter from "gray-matter";

export const getBlogData = (lang: string, slug: string) => {
    const filepath = path.join(process.cwd(), `/src/assets/blog/${lang}/${slug}.md`);

    const fileContent = fs.readFileSync(filepath, 'utf8');

    return matter(fileContent);
}

export const getBlogs = (lang: string) => {
    const blogDir = path.join(process.cwd(), `/src/assets/blog/${lang}`);

    return fs.readdirSync(`${blogDir}`).map((file) => {
        // Read markdown file as string
        const fullPath = path.join(blogDir, file);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        return matter(fileContents)
    });
}

export const getProjectData = (lang: string, slug: string) => {
    const filepath = path.join(process.cwd(), `/src/assets/projects/${lang}/${slug}.md`);

    const fileContent = fs.readFileSync(filepath, 'utf8');

    return matter(fileContent);
}

export const getProjects = (lang: string) => {
    const blogDir = path.join(process.cwd(), `/src/assets/projects/${lang}`);

    return fs.readdirSync(`${blogDir}`).map((file) => {
        // Read markdown file as string
        const fullPath = path.join(blogDir, file);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        return matter(fileContents)
    });
}
