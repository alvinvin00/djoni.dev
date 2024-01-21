import {allBlogs} from "contentlayer/generated";
import {MetadataRoute} from "next";

export const sitemap = () => {
    return allBlogs.map((blog) => {
        const [type, locale, slug] = blog._raw.flattenedPath.split('/');

        return ({
            changeFrequency: 'never',
            lastModified: new Date(blog.date),
            priority: 0.7,
            url: `https://djoni.dev/${type}/${locale}/${slug}`,
        });
    }) satisfies MetadataRoute.Sitemap;
}

export default sitemap;
