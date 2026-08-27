import {SiGithub} from '@icons-pack/react-simple-icons';
import {ExternalLink} from 'lucide-react';
import {motion} from 'motion/react';

interface Project {
  slug: string;
  title: string;
  description: string;
  thumbnail?: string;
  date: string;
  tags?: string[];
  github?: string;
  link?: string;
}

export function FeaturedProjects({
  locale,
  projects,
}: {
  locale: string;
  projects: Project[];
}) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-24">
      <div className="text-center mb-16">
        <p className="text-sm font-medium text-neon-purple mb-3 tracking-wider uppercase">
          Portfolio
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-neon bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          A selection of my recent work, showcasing various technologies and creative solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: index * 0.1, duration: 0.5}}
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
                  <h3 className="text-xl font-bold text-white group-hover:text-neon-purple transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.slice(0, 3).map((tag) => (
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
                    <span className="text-xs text-gray-600">
                      {new Date(project.date).getFullYear()}
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

      <div className="text-center mt-12">
        <a
          href={`/${locale}/projects`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-gray-400 hover:text-white border border-gray-800 hover:border-neon-purple/30 transition-all duration-300 focus-ring"
        >
          View All Projects
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
