import { allBlogs } from 'content-collections';
import dayjs from 'dayjs';
import React from 'react';

import { Card, Group, Stack } from '@mantine/core';

export function Route() {
  const blogs = allBlogs
    .filter((blog) => blog.lang === 'en')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="flex flex-col gap-4 my-2">
      <div className="relative w-full h-auto max-h-60 aspect-video">
        <img
          src="/assets/blog-bg.jpg"
          alt={'notebook and a laptop, courtesy of Unsplash'}
          className={'object-cover blur-xs w-full h-full'}
        />
        <div className="absolute h-full w-full grid place-items-center">
          <div className="flex flex-col text-center text-white backdrop-blur-xs">
            <h5 className="text-2xl font-bold">Blog</h5>
            <p className="text-xl">Welcome to my blog!</p>
            <p className="text-yellow-500 text-lg font-bold">
              This is still a work in progress.
            </p>
          </div>
        </div>
      </div>
      <div className="container grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 z-10">
        {blogs.map((blog) => {
          return (
            <Card
              key={blog.slug}
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              className="flex flex-col gap-2 bg-white dark:bg-gray-700 dark:text-white"
            >
              <Group>
                <h3 className="text-lg font-bold line-clamp-2 overflow-clip text-ellipsis">
                  {blog.title}
                </h3>
              </Group>
              <Stack>
                <p className="text-md font-light line-clamp-3">
                  {blog.description || 'No description'}
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-light">
                    {dayjs(blog.date).format('DD-MM-YYYY')}
                  </p>
                </div>
              </Stack>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
