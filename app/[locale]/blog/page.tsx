import {allBlogs} from 'contentlayer/generated';
import dayjs from 'dayjs';
import {useTranslations} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import React, {use} from 'react';

import {Card, CardContent, CardHeader} from '@/components/Card';
import Image from 'next/image';
import blogBg from '/public/assets/blog-bg.jpg';

const Page = (props: {params: Promise<{locale: string}>}) => {
  const params = use(props.params);

  const {
    locale,
  } = params;

  setRequestLocale(locale);

  const t = useTranslations('Blog');

  const blogs = allBlogs
    .filter((blog) => blog.lang === locale)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="flex flex-col gap-4 my-2">
      <div className="relative w-full h-auto max-h-60 aspect-video">
        <Image
          src={blogBg}
          alt={'Photo of a notebook and a laptop, courtesy of Unsplash'}
          className={'object-cover blur-sm'}
          placeholder={'blur'}
          fill
        />
        <div className="absolute h-full w-full grid place-items-center">
          <div className="flex flex-col text-center text-white backdrop-blur-sm">
            <h5 className="text-2xl font-bold">{t('title')}</h5>
            <p className="text-xl">{t('description')}</p>
            <p className="text-yellow-500 text-lg font-bold">{t('disclaimer_text')}</p>
          </div>
        </div>
      </div>
      <div className="container grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 z-10">
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
                  {blog.description || 'No description'}
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
  );
};

export const generateMetadata = async (
  props: {
    params: Promise<{locale: string}>;
  },
) => {
  const {locale} = await props.params;

  setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: 'Blog'});

  return {
    title: t('title'),
    description: t('description'),
  };
};

export default Page;
