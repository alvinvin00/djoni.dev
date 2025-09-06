import {allBlogs} from 'content-collections';
import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';

import {Card, CardContent, CardHeader, CardMedia} from '@/components/Card';

export const BlogCarousel = ({locale}: {locale: string}) => {
  const projects = allBlogs
    .filter((blog) => blog.lang === locale)
    .slice(0, 4);

  return (
    <section className="my-2">
      <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">
        Latest Post
      </h2>
      <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'}>
        {projects.map((blog) => {
          return (
            <Card
              key={blog.slug}
              className={'bg-white dark:bg-gray-700 dark:text-white'}
            >
              <CardMedia className={'h-20'}>
                <Image
                  src={blog.thumbnail}
                  alt={blog.title}
                  fill
                  className={'object-cover object-top'}
                />
              </CardMedia>
              <CardHeader>
                <h3 className="text-lg font-bold">{blog.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm line-clamp-3">
                  {blog.description || 'No description'}
                </p>
                <div className="flex flex-row flex-nowrap justify-between text-sm text-gray-400">
                  <p>{dayjs(blog.date).format('DD-MM-YYYY')}</p>
                  <p>5 minute read</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
