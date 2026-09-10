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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog, index) => (
        <motion.div
          key={blog.slug}
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{delay: index * 0.05, duration: 0.5}}
        >
          <a
            href={`/${locale}/blog/${blog.slug}`}
            className="group block h-full"
          >
            <article className="h-full bg-dark-card/50 border border-white/5 rounded-2xl overflow-hidden hover:border-neon-purple/30 transition-all duration-300 hover-lift">
              {blog.thumbnail && (
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent" />
                </div>
              )}

              <div className="p-6 space-y-3">
                <time className="text-xs text-gray-600">
                  {dayjs(blog.date).format('MMMM D, YYYY')}
                </time>

                <h2 className="text-lg font-bold text-white group-hover:text-neon-purple transition-colors duration-300 line-clamp-2">
                  {blog.title}
                </h2>

                {blog.description && (
                  <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">
                    {blog.description}
                  </p>
                )}

                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {blog.tags.slice(0, 3).map((tag: string) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium rounded-md bg-white/5 text-gray-400 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </a>
        </motion.div>
      ))}
    </div>
  );
}
