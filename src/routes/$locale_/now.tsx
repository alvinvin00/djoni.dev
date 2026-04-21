import {createFileRoute} from '@tanstack/react-router';
import {allNows} from 'content-collections';
import dayjs from 'dayjs';
import {motion} from 'motion/react';

export const Route = createFileRoute('/$locale_/now')({
  component: NowRoute,
});

function NowRoute() {
  const {locale} = Route.useParams();
  const now = allNows.find((n) => n.lang === locale);

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
            What I'm Doing Now
          </span>
        </h1>
        <p className="text-gray-400 dark:text-gray-300 text-center max-w-2xl mx-auto text-lg">
          A glimpse into my current activities, projects, and focus areas.
        </p>
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{opacity: 0, scale: 0.95}}
          animate={{opacity: 1, scale: 1}}
          transition={{delay: 0.2, duration: 0.6}}
          className="max-w-4xl mx-auto glass-card-dark p-8 md:p-12 rounded-lg"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">{now?.title}</h2>
            <p className="text-sm text-gray-400">
              Last Updated:{' '}
              <span className="text-neon-purple dark:text-neon-cyan">
                {dayjs(now?.date).format('MMMM D, YYYY')}
              </span>
            </p>
          </div>

          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.4, duration: 0.6}}
            className="prose prose-invert max-w-none text-gray-300"
            dangerouslySetInnerHTML={{__html: now?.content ?? ''}}
          />
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.6, duration: 0.6}}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm">
            This is a{' '}
            <a
              href="https://nownownow.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-purple dark:text-neon-cyan hover:underline"
            >
              now page
            </a>
            . If you have your own site, consider making one too.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
