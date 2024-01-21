import {allProjects} from "contentlayer/generated";
import {MetadataRoute} from "next";

export const sitemap = () => {
    return allProjects.map((project) => {
        const [type, locale,] = project._raw.flattenedPath.split('/');

        return ({
            changeFrequency: 'never',
            lastModified: new Date(project.date),
            priority: 0.7,
            url: `https://djoni.dev/${type}/${locale}/${project.slug}`,
        });
    }) satisfies MetadataRoute.Sitemap;
}

export default sitemap;
