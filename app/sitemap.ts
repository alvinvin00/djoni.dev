import locales from "@/config/locale";
import {MetadataRoute} from "next";

export const generateSitemaps = () => {
    return locales.map((locale) => ({
        id: locale
    }));
}

export const sitemap = ({id}: { id: string }) => {
    return [
        {
            changeFrequency: 'daily',
            lastModified: new Date('2024-2-1'),
            priority: 1,
            url: `https://djoni.dev/${id}`,
        },
        {
            changeFrequency: 'daily',
            lastModified: new Date('2024-2-1'),
            priority: 1,
            url: `https://djoni.dev/${id}/about`,
        },
        {
            changeFrequency: 'daily',
            lastModified: new Date('2024-2-1'),
            priority: 1,
            url: `https://djoni.dev/${id}/projects`,
        },
        {
            changeFrequency: 'daily',
            lastModified: new Date('2024-2-1'),
            priority: 1,
            url: `https://djoni.dev/${id}/now`,
        },
    ] satisfies MetadataRoute.Sitemap;
}

export default sitemap;
