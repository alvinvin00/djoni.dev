import path from "path";
import fs from "fs";
import matter from "gray-matter";

const getMatterFromFile = (filePath: string) => {
    const filepath = path.join(process.cwd(), `/src/assets/${filePath}`);

    const fileContent = fs.readFileSync(filepath, 'utf8');

    return matter(fileContent);
}

const getMatterFromFolder = (folderPath: string) => {
    const cwDir = path.join(process.cwd(), `/src/assets/${folderPath}`);

    return fs.readdirSync(`${cwDir}`).map((file) => {
        // Read markdown file as string
        const fullPath = path.join(cwDir, file);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        return matter(fileContents)
    });
}

export const getBlogData = (lang: string, slug: string) => {
    return getMatterFromFile(`/blog/${lang}/${slug}.md`);
}

export const getBlogs = (lang: string) => {
    return getMatterFromFolder(`/blog/${lang}`);
}

export const getProjectData = (lang: string, slug: string) => {
    return getMatterFromFile(`/projects/${lang}/${slug}.md`);
}

export const getProjects = (lang: string) => {
    return getMatterFromFolder(`/projects/${lang}`);
}

export const getAboutData = (lang: string) => {
    return getMatterFromFile(`/about/${lang}.md`);
}
