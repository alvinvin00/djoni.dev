import {createFileRoute} from '@tanstack/react-router';
import {allAbouts} from 'content-collections';
import {motion} from 'motion/react';

export const Route = createFileRoute('/$locale_/about')({
  component: AboutRoute,
});

function AboutRoute() {
  const {locale} = Route.useParams();
  const aboutData = allAbouts.find((about) => about.lang === locale);

  return (
    <div className="min-h-screen pt-8 pb-16">
      <motion.div
        initial={{opacity: 0, y: -20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        className="container mx-auto px-4 mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">
          <span className="bg-gradient-neon bg-clip-text text-transparent">
            About Me
          </span>
        </h1>
      </motion.div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{opacity: 0, scale: 0.95}}
            animate={{opacity: 1, scale: 1}}
            transition={{delay: 0.2, duration: 0.6}}
            className="glass-card-dark p-8 md:p-12 rounded-lg"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
                Alvin Leonardo{' '}
                <span className="bg-gradient-neon bg-clip-text text-transparent">
                  Djoni
                </span>
              </h2>
              <p className="text-xl text-neon-purple dark:text-neon-cyan font-medium">
                Software Engineer
              </p>
            </div>

            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.4, duration: 0.6}}
              className="prose prose-invert max-w-none text-gray-300"
              dangerouslySetInnerHTML={{__html: aboutData?.content ?? ''}}
            />
          </motion.div>

          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.6, duration: 0.6}}
            className="mt-12 text-center"
          >
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/alvinvin00"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border-2 border-neon-purple/30 dark:border-neon-cyan/30 text-neon-purple dark:text-neon-cyan hover:bg-neon-purple/10 dark:hover:bg-neon-cyan/10 transition-all duration-300"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/alvinleonardo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-gradient-neon text-white hover:shadow-neon-purple-lg transition-all duration-300"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
