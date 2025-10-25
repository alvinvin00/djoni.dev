import {allProjects} from 'content-collections';
import dayjs from 'dayjs';
import React from 'react';

import {Card} from '@mantine/core';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {createFileRoute} from '@tanstack/react-router';

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
});

function ProjectsPage() {
  const projects = allProjects
    .filter((project) => project.lang === 'en')
    .sort((a, b) => dayjs(a.date).diff(b.date, 'day'));

  return (
    <div className="flex flex-col gap-4 py-2">
      <div className="relative w-full h-auto max-h-60 aspect-video">
        <img
          src="/assets/projects-bg.jpg"
          alt={
            'code snippet in a monitor and a laptop, courtesy of Unsplash'
          }
          className={'object-cover blur-md w-full h-full'}
        />
        <div className="absolute h-full w-full grid place-items-center">
          <div className="flex flex-col items-center text-white">
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
              <div className="max-h-60 overflow-hidden">
                <img
                  src={project.thumbnail ?? ''}
                  alt={project.title}
                  className="object-cover object-top w-full h-full"
                />
              </div>
              <div>
                <h5 className="text-xl font-bold whitespace-nowrap overflow-clip text-ellipsis">
                  {project.title}
                </h5>
                <span className="text-sm font-semibold">
                  {dayjs(project.date).year()}
                </span>
              </div>
              <div>
                <p className="text-md font-light line-clamp-3 overflow-hidden">
                  {project.description}
                </p>
              </div>
              {project.link && (
                <div>
                  <a
                    href={project.link}
                    className={
                      'p-2 rounded-lg size-8 grid place-items-center text-white bg-blue-400 dark:bg-black hover:scale-105'
                    }
                  >
                    <FontAwesomeIcon icon={faGlobe} />
                  </a>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
};
