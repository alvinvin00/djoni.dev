import dayjs from 'dayjs';
import {motion} from 'motion/react';

interface Blog {
  slug: string;
  title: string;
  description?: string;
  thumbnail?: string;
  date: string;
  tags?: string[];
  categories?: string[];
}

export function BlogGrid({blogs, locale}: {blogs: Blog[]; locale: string}) {
  return (
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
            <a
              href={`/${locale}/blog/${blog.slug}`}
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
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
