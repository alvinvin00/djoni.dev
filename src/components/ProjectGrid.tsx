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
          <a
            href={`/${locale}/projects/${project.slug}`}
            className="group block h-full"
          >
            <article className="h-full bg-dark-card/50 border border-white/5 rounded-2xl overflow-hidden hover:border-neon-purple/30 transition-all duration-300 hover-lift">
              {project.thumbnail && (
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent" />
                </div>
              )}

              <div className="p-6 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-neon-purple transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-xs text-gray-600 whitespace-nowrap">
                    {dayjs(project.date).year()}
                  </span>
                </div>

                <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium rounded-md bg-white/5 text-gray-400 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-md ${
                      project.status === 'active'
                        ? 'bg-green-500/10 text-green-400'
                        : project.status === 'archived'
                          ? 'bg-gray-500/10 text-gray-400'
                          : 'bg-yellow-500/10 text-yellow-400'
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
                        className="text-gray-600 hover:text-neon-cyan transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <SiGithub className="w-4 h-4" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-neon-purple transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </a>
        </motion.div>
      ))}
    </div>
  );
}
