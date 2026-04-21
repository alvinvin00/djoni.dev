import {SiGithub} from '@icons-pack/react-simple-icons';
import {createFileRoute, Link} from '@tanstack/react-router';
import {allProjects} from 'content-collections';
import dayjs from 'dayjs';
import {ArrowLeft, ExternalLink} from 'lucide-react';
import {motion} from 'motion/react';

export const Route = createFileRoute('/$locale_/projects/$slug')({
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const {slug, locale} = Route.useParams();

  const project = allProjects.find((p) => p.slug === slug && p.lang === locale);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-neon-purple dark:text-neon-cyan mb-4">
          Project Not Found
        </h1>
        <Link
          to=".."
          className="text-neon-purple dark:text-neon-cyan hover:underline"
        >
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-8 pb-16">
      <motion.div
        initial={{opacity: 0, y: -20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        className="container mx-auto px-4"
      >
        <Link
          to=".."
          className="inline-flex items-center gap-2 text-gray-400 hover:text-neon-purple dark:hover:text-neon-cyan transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <motion.h1
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.1, duration: 0.6}}
              className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-neon bg-clip-text text-transparent"
            >
              {project.title}
            </motion.h1>

            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.2, duration: 0.6}}
              className="flex flex-wrap items-center gap-4 mb-6"
            >
              <span className="text-gray-400">
                {dayjs(project.date).format('MMMM D, YYYY')}
              </span>
              {project.status && (
                <span
                  className={`px-3 py-1 text-sm font-medium rounded-full ${
                    project.status === 'active'
                      ? 'bg-green-500/20 text-green-400'
                      : project.status === 'archived'
                        ? 'bg-gray-500/20 text-gray-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                  }`}
                >
                  {project.status}
                </span>
              )}
            </motion.div>

            {project.tags && project.tags.length > 0 && (
              <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.3, duration: 0.6}}
                className="flex flex-wrap gap-2 mb-6"
              >
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm font-medium rounded-md bg-neon-purple/20 dark:bg-neon-cyan/20 text-neon-purple dark:text-neon-cyan"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            )}

            {(project.github || project.link) && (
              <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.4, duration: 0.6}}
                className="flex gap-4"
              >
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-neon-purple/30 dark:border-neon-cyan/30 text-neon-purple dark:text-neon-cyan hover:bg-neon-purple/10 dark:hover:bg-neon-cyan/10 transition-all duration-300"
                  >
                    <SiGithub className="w-5 h-5" />
                    View Code
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-neon text-white hover:shadow-neon-purple-lg transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
              </motion.div>
            )}
          </header>

          {project.thumbnail && (
            <motion.div
              initial={{opacity: 0, scale: 0.95}}
              animate={{opacity: 1, scale: 1}}
              transition={{delay: 0.5, duration: 0.6}}
              className="mb-12"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-auto rounded-lg border-2 border-neon-purple/20 dark:border-neon-cyan/20"
              />
            </motion.div>
          )}

          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.6, duration: 0.6}}
            className="glass-card-dark p-8 rounded-lg"
          >
            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{__html: project.content}}
            />
          </motion.div>
        </article>
      </motion.div>
    </div>
  );
}
