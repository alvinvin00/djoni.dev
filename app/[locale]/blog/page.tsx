import {allBlogs} from 'contentlayer/generated';
import dayjs from 'dayjs';
import {useTranslations} from 'next-intl';
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import React from 'react';

import {Card, CardContent, CardHeader} from '@/components/Card';

const Page = ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);

  const t = useTranslations('Blog');

  const blogs = allBlogs
    .filter((blog) => blog._raw.flattenedPath.includes(locale))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className={'container'}>
      <div className="flex flex-col gap-4 my-2">
        <div className="flex flex-col items-center bg-white dark:bg-gray-700 dark:text-white py-2 shadow-lg rounded-xl">
          <h5 className="text-lg font-bold">{t('title')}</h5>
          <p className="text-sm">{t('description')}</p>
          <p className="text-yellow-200 font-bold">{t('disclaimer_text')}</p>
        </div>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 z-10">
          {blogs.map((blog) => {
            return (
              <Card
                key={blog.slug}
                className="flex flex-col gap-2 bg-white dark:bg-gray-700 dark:text-white"
              >
                <CardHeader>
                  <h3 className="text-lg font-bold line-clamp-2 overflow-clip overflow-ellipsis">
                    {blog.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-md font-light line-clamp-3">
                    {blog.body.raw}
                  </p>
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-light">
                      {dayjs(blog.date).format('DD-MM-YYYY')}
                    </p>
                    {/*<p className="text-xs font-light">*/}
                    {/*    {metadata.read_time}*/}
                    {/*</p>*/}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const generateMetadata = async ({
  params: {locale},
}: {
  params: {locale: string};
}) => {
  unstable_setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: 'Blog'});

  return {
    title: t('title'),
    description: t('description'),
  };
};

export default Page;
