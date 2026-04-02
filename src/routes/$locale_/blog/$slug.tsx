import {createFileRoute, Link} from '@tanstack/react-router';
import {allBlogs} from 'content-collections';
import dayjs from 'dayjs';
import {motion} from 'motion/react';

export const Route = createFileRoute('/$locale_/blog/$slug')({
  component: BlogContentPage,
});

function BlogContentPage() {
  const {slug} = Route.useParams();

  const blog = allBlogs.find((b) => b.slug === slug && b.lang === 'en');

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-neon-purple dark:text-neon-cyan mb-4">
          Blog Post Not Found
        </h1>
        <Link
          to="/$locale/blog"
          params={{locale: 'en'}}
          className="text-neon-purple dark:text-neon-cyan hover:underline"
        >
          ← Back to Blog
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
          to="/$locale/blog"
          params={{locale: 'en'}}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-neon-purple dark:hover:text-neon-cyan transition-colors duration-300 mb-8"
        >
          ← Back to Blog
        </Link>

        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <motion.h1
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.1, duration: 0.6}}
              className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-neon bg-clip-text text-transparent"
            >
              {blog.title}
            </motion.h1>

            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.2, duration: 0.6}}
              className="flex flex-wrap items-center gap-4 mb-6 text-gray-400"
            >
              <time>{dayjs(blog.date).format('MMMM D, YYYY')}</time>
              {blog.author && <span>• {blog.author}</span>}
            </motion.div>

            {blog.tags && blog.tags.length > 0 && (
              <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.3, duration: 0.6}}
                className="flex flex-wrap gap-2 mb-6"
              >
                {blog.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm font-medium rounded-md bg-neon-purple/20 dark:bg-neon-cyan/20 text-neon-purple dark:text-neon-cyan"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            )}

            {blog.description && (
              <motion.p
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.4, duration: 0.6}}
                className="text-xl text-gray-300"
              >
                {blog.description}
              </motion.p>
            )}
          </header>

          {blog.thumbnail && (
            <motion.div
              initial={{opacity: 0, scale: 0.95}}
              animate={{opacity: 1, scale: 1}}
              transition={{delay: 0.5, duration: 0.6}}
              className="mb-12"
            >
              <img
                src={blog.thumbnail}
                alt={blog.title}
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
              dangerouslySetInnerHTML={{__html: blog.content}}
            />
          </motion.div>
        </article>
      </motion.div>
    </div>
  );
}
