import {allProjects} from 'contentlayer/generated';
import dayjs from 'dayjs';
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import Image from 'next/image';
import React from 'react';

import {Card, CardFooter, CardContent, CardHeader, CardMedia} from '@/components/Card';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-aria-components';

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
                className="bg-white dark:bg-gray-700 dark:text-white min-h-50"
              >
                <CardMedia className="max-h-60">
                  <Image
                    src={project.thumbnail ?? ''}
                    alt={project.title}
                    fill
                    className="object-cover object-top overflow-hidden "
                  />
                </CardMedia>
                <CardHeader>
                  <h5 className="text-xl font-bold whitespace-nowrap overflow-clip overflow-ellipsis">
                    {project.title}
                  </h5>
                  <span className="text-sm font-semibold">
                    {dayjs(project.date).year()}
                  </span>
                </CardHeader>
                <CardContent>
                  <p className="text-md font-light line-clamp-3 flex-1">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter>
                  {project.link && (
                    <Link
                      href={project.link}
                      className={'p-2 rounded-lg size-8 grid place-items-center text-white bg-blue-400 dark:bg-black hover:scale-105'}
                    >
                      <FontAwesomeIcon icon={faGlobe} />
                    </Link>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const generateMetadata = async ({params: {locale}}: {
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
