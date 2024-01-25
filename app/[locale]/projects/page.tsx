import {allProjects} from 'contentlayer/generated';
import dayjs from 'dayjs';
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import Image from 'next/image';
import React from 'react';

import {Card, CardContent, CardHeader, CardMedia} from '@/components/Card';

const Page = ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);

  const projects = allProjects
    .filter((project) => project._raw.flattenedPath.includes(locale))
    .sort((a, b) => dayjs(a.date).diff(b.date, 'day'));

  return (
    <div className="container">
      <div className="flex flex-col gap-4 py-2">
        <div className="flex flex-col items-center bg-white dark:bg-gray-700 dark:text-white shadow-lg rounded-xl">
          <h1 className="text-lg font-bold">Projects</h1>
          <p className="text-md">
            Here&apos;s all the projects that I have worked on
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projects.map((project) => {
            return (
              <Card
                key={project.slug}
                className="bg-white dark:bg-gray-700 dark:text-white"
              >
                <CardMedia className="max-h-60">
                  <Image
                    src={project.thumbnail ?? ''}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                  />
                </CardMedia>
                <CardHeader>
                  <h5 className="text-xl font-bold whitespace-nowrap overflow-clip overflow-ellipsis">
                    {project.title}
                  </h5>
                </CardHeader>
                <CardContent>
                  <p className="text-md font-light line-clamp-3">
                    {project.description}
                  </p>
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

  const t = await getTranslations({locale, namespace: 'Projects'});

  return {
    title: t('title'),
    description: t('description'),
  };
};

export default Page;
