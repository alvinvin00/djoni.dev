import {allProjects} from 'contentlayer/generated';
import dayjs from 'dayjs';
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import Image from 'next/image';
import React from 'react';

import {Card, CardContent, CardFooter, CardHeader, CardMedia} from '@/components/Card';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import projectsBg from '/public/assets/projects-bg.jpg';

const Page = async (props: {params: Promise<{locale: string}>}) => {
  const params = await props.params;

  const {
    locale,
  } = params;

  unstable_setRequestLocale(locale);

  const projects = allProjects
    .filter((project) => project.lang === locale)
    .sort((a, b) => dayjs(a.date).diff(b.date, 'day'));

  return (
    <div className="flex flex-col gap-4 py-2">
      <div className="relative w-full h-auto max-h-60 aspect-video">
        <Image
          src={projectsBg}
          alt={'Photo of a code snippet in a monitor and a laptop, courtesy of Unsplash'}
          className={'object-cover blur-md'}
          placeholder={'blur'}
          fill
        />
        <div className="absolute h-full w-full grid place-items-center">
          <div
            className="flex flex-col items-center text-white">
            <h1 className="text-2xl font-bold">Projects</h1>
            <p className="text-xl">
              Here&apos;s all the projects that I have worked on
            </p>
          </div>
        </div>
      </div>

      <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projects.map((project) => {
          return (
            <Card
              key={project.slug}
              className="bg-white dark:bg-gray-700 dark:text-white min-h-60"
            >
              <CardMedia className="max-h-60 overflow-hidden">
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
                <span className="text-sm font-semibold">
                    {dayjs(project.date).year()}
                  </span>
              </CardHeader>
              <CardContent>
                <p className="text-md font-light line-clamp-3 overflow-hidden">
                  {project.description}
                </p>
              </CardContent>
              {project.link && (
                <CardFooter>
                  <Link
                    href={project.link}
                    className={'p-2 rounded-lg size-8 grid place-items-center text-white bg-blue-400 dark:bg-black hover:scale-105'}
                  >
                    <FontAwesomeIcon icon={faGlobe} />
                  </Link>
                </CardFooter>
              )}
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
  unstable_setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: 'Projects'});

  return {
    title: t('title'),
    description: t('description'),
  };
};

export default Page;
