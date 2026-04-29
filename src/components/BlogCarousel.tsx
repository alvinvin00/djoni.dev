import {useCallback, useEffect, useState} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import dayjs from 'dayjs';

interface Blog {
  slug: string;
  title: string;
  description?: string;
  thumbnail?: string;
  date: string;
}

export function BlogCarousel({blogs, locale}: {blogs: Blog[]; locale: string}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    dragFree: false,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const latestBlogs = blogs.slice(0, 4);

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-neon bg-clip-text text-transparent">
        Latest Posts
      </h2>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {latestBlogs.map((blog) => (
              <div
                key={blog.slug}
                className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0"
              >
                <a
                  href={`/${locale}/blog/${blog.slug}`}
                  className="block h-full glass-card-dark p-4 rounded-lg border border-neon-purple/20 dark:border-neon-cyan/20 transition-all duration-300 hover:border-neon-purple dark:hover:border-neon-cyan hover:shadow-neon-purple"
                >
                  {blog.thumbnail && (
                    <div className="relative mb-3 overflow-hidden rounded-lg h-32">
                      <img
                        src={blog.thumbnail}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  )}
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">
                    {blog.title}
                  </h3>
                  {blog.description && (
                    <p className="text-sm text-gray-400 line-clamp-2 mb-3">
                      {blog.description}
                    </p>
                  )}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{dayjs(blog.date).format('DD-MM-YYYY')}</span>
                    <span>5 min read</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-8 h-8 flex items-center justify-center rounded-full bg-dark-card/80 border border-neon-purple/30 text-neon-purple hover:bg-neon-purple/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed z-10"
          aria-label="Previous slide"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-8 h-8 flex items-center justify-center rounded-full bg-dark-card/80 border border-neon-purple/30 text-neon-purple hover:bg-neon-purple/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed z-10"
          aria-label="Next slide"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
