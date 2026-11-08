import {SiGithub} from '@icons-pack/react-simple-icons';
import dayjs from 'dayjs';
import {ExternalLink} from 'lucide-react';
import {motion} from 'motion/react';

interface Project {
  slug: string;
  title: string;
  description: string;
  thumbnail?: string;
  date: string;
  tags?: string[];
  status?: string;
  github?: string;
  link?: string;
}

export function ProjectGrid({
  projects,
  locale,
}: {
  projects: Project[];
  locale: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.slug}
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{delay: index * 0.05, duration: 0.5}}
        >
          <article className="group relative h-full bg-white border border-gray-200 shadow-sm rounded-2xl overflow-hidden hover:border-neon-purple/30 transition-all duration-300 hover-lift dark:bg-dark-card/50 dark:border-white/5 dark:shadow-none">
            {project.thumbnail && (
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent dark:from-dark-card" />
              </div>
            )}

            <div className="p-6 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-neon-purple transition-colors duration-300 dark:text-white">
                  {project.title}
                </h3>
                <span className="text-xs text-gray-500 dark:text-gray-600 whitespace-nowrap">
                  {dayjs(project.date).year()}
                </span>
              </div>

              <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed dark:text-gray-400">
                {project.description}
              </p>

              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium rounded-md bg-gray-100 text-gray-600 border border-gray-200 dark:bg-white/5 dark:text-gray-400 dark:border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-white/5">
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-md ${
                    project.status === 'active'
                      ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                      : project.status === 'handed-off'
                        ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                        : project.status === 'completed'
                          ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
                          : 'bg-gray-500/10 text-gray-600 dark:text-gray-500'
                  }`}
                >
                  {project.status === 'handed-off'
                    ? 'Handed Off'
                    : project.status === 'completed'
                      ? 'Completed'
                      : project.status === 'archived'
                        ? 'Archived'
                        : (project.status ?? 'Unknown')}
                </span>

                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 text-gray-500 hover:text-neon-cyan transition-colors dark:text-gray-600"
                    >
                      <SiGithub className="w-4 h-4" />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 text-gray-500 hover:text-neon-purple transition-colors dark:text-gray-600"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <a
              href={`/${locale}/projects/${project.slug}`}
              className="absolute inset-0 z-[1]"
            >
              <span className="sr-only">{project.title}</span>
            </a>
          </article>
        </motion.div>
      ))}
    </div>
  );
}
