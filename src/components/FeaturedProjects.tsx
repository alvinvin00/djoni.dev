import {SiGithub} from '@icons-pack/react-simple-icons';
import {Link} from '@tanstack/react-router';
import {allProjects} from 'content-collections';
import {ExternalLink} from 'lucide-react';
import {motion} from 'motion/react';

export function FeaturedProjects({locale}: {locale: string}) {
  const featuredProjects = allProjects
    .filter((project) => project.lang === locale)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-20">
      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.6}}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="bg-gradient-neon bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <p className="text-gray-400 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          A selection of my recent work, showcasing various technologies and
          creative solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: index * 0.1, duration: 0.6}}
            className="group"
          >
            <Link
              to={`/$locale/projects/$slug`}
              params={{locale, slug: project.slug}}
              className="block h-full"
            >
              <div className="h-full glass-card-dark p-6 rounded-lg border-2 border-neon-purple/20 dark:border-neon-cyan/20 transition-all duration-300 hover:border-neon-purple dark:hover:border-neon-cyan hover:shadow-neon-purple dark:hover:shadow-neon-cyan hover:scale-105">
                {project.thumbnail && (
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-neon-purple dark:group-hover:text-neon-cyan transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 line-clamp-3">
                    {project.description}
                  </p>

                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium rounded-md bg-neon-purple/20 dark:bg-neon-cyan/20 text-neon-purple dark:text-neon-cyan"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                    <span className="text-sm text-gray-500">
                      {new Date(project.date).getFullYear()}
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

      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        transition={{delay: 0.4}}
        className="text-center mt-12"
      >
        <Link
          to="/$locale/projects"
          params={{locale}}
          className="inline-block px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 border-2 border-neon-purple dark:border-neon-cyan text-neon-purple dark:text-neon-cyan hover:bg-neon-purple/10 dark:hover:bg-neon-cyan/10 hover:shadow-neon-purple dark:hover:shadow-neon-cyan"
        >
          View All Projects →
        </Link>
      </motion.div>
    </section>
  );
}
