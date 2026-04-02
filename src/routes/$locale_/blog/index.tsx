import {createFileRoute, Link} from '@tanstack/react-router';
import {allBlogs} from 'content-collections';
import dayjs from 'dayjs';
import {motion} from 'motion/react';
import React from 'react';

export const Route = createFileRoute('/$locale_/blog/')({
  component: BlogIndexPage,
});

export function BlogIndexPage() {
  const blogs = allBlogs
    .filter((blog) => blog.lang === 'en')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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
            Blog
          </span>
        </h1>
        <p className="text-gray-400 dark:text-gray-300 text-center max-w-2xl mx-auto text-lg">
          Thoughts, ideas, and insights about technology, development, and
          creative solutions.
        </p>
      </motion.div>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.slug}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: index * 0.1, duration: 0.6}}
            >
              <Link
                to="/$locale/blog/$slug"
                params={{locale: 'en', slug: blog.slug}}
                className="block h-full"
              >
                <article className="h-full glass-card-dark p-6 rounded-lg border-2 border-neon-purple/20 dark:border-neon-cyan/20 transition-all duration-300 hover:border-neon-purple dark:hover:border-neon-cyan hover:shadow-neon-purple dark:hover:shadow-neon-cyan hover:scale-105">
                  {blog.thumbnail && (
                    <div className="relative mb-4 overflow-hidden rounded-lg">
                      <img
                        src={blog.thumbnail}
                        alt={blog.title}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  )}

                  <div className="space-y-3">
                    <h2 className="text-2xl font-bold text-white hover:text-neon-purple dark:hover:text-neon-cyan transition-colors duration-300 line-clamp-2">
                      {blog.title}
                    </h2>

                    {blog.description && (
                      <p className="text-gray-400 line-clamp-3">
                        {blog.description}
                      </p>
                    )}

                    {blog.tags && blog.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {blog.tags.slice(0, 3).map((tag: string) => (
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
                      <time className="text-sm text-gray-500">
                        {dayjs(blog.date).format('MMMM D, YYYY')}
                      </time>
                      {blog.categories && blog.categories.length > 0 && (
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-neon-purple/10 dark:bg-neon-cyan/10 text-neon-purple dark:text-neon-cyan">
                          {blog.categories[0]}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
