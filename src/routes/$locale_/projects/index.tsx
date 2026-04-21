import {SiGithub} from '@icons-pack/react-simple-icons';
import {createFileRoute, Link} from '@tanstack/react-router';
import {allProjects} from 'content-collections';
import dayjs from 'dayjs';
import {ExternalLink} from 'lucide-react';
import {motion} from 'motion/react';
import React from 'react';

export const Route = createFileRoute('/$locale_/projects/')({
  component: ProjectsPage,
});

function ProjectsPage() {
  const {locale} = Route.useParams();
  const projects = allProjects
    .filter((project) => project.lang === locale)
    .sort((a, b) => dayjs(b.date).diff(a.date, 'day'));

  return (
    <div className="min-h-screen pt-8">
      <motion.div
        initial={{opacity: 0, y: -20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        className="container mx-auto px-4 mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">
          <span className="bg-gradient-neon bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
        <p className="text-gray-400 dark:text-gray-300 text-center max-w-2xl mx-auto text-lg">
          A collection of my work, from web applications to mobile development,
          showcasing various technologies and creative solutions.
        </p>
      </motion.div>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: index * 0.1, duration: 0.6}}
            >
              <Link
                to="$slug"
                params={{slug: project.slug}}
                className="block h-full"
              >
                <div className="h-full glass-card-dark p-6 rounded-lg border-2 border-neon-purple/20 dark:border-neon-cyan/20 transition-all duration-300 hover:border-neon-purple dark:hover:border-neon-cyan hover:shadow-neon-purple dark:hover:shadow-neon-cyan hover:scale-105">
                  {project.thumbnail && (
                    <div className="relative mb-4 overflow-hidden rounded-lg">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )}

                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-2xl font-bold text-white hover:text-neon-purple dark:hover:text-neon-cyan transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-sm text-gray-500 whitespace-nowrap">
                        {dayjs(project.date).year()}
                      </span>
                    </div>

                    <p className="text-gray-400 line-clamp-3">
                      {project.description}
                    </p>

                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs font-medium rounded-md bg-neon-purple/20 dark:bg-neon-cyan/20 text-neon-purple dark:text-neon-cyan"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          project.status === 'active'
                            ? 'bg-green-500/20 text-green-400'
                            : project.status === 'archived'
                              ? 'bg-gray-500/20 text-gray-400'
                              : 'bg-yellow-500/20 text-yellow-400'
                        }`}
                      >
                        {project.status ?? 'Completed'}
                      </span>

                      <div className="flex gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-neon-cyan transition-colors duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <SiGithub className="w-5 h-5" />
                          </a>
                        )}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-neon-purple transition-colors duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
