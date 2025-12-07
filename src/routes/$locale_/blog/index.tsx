import {Card, Image, Stack, Text} from '@mantine/core';
import {createFileRoute} from '@tanstack/react-router';
import {allBlogs} from 'content-collections';
import dayjs from 'dayjs';

export const Route = createFileRoute('/$locale_/blog/')({
  component: BlogIndexPage,
});

export function BlogIndexPage() {
  const blogs = allBlogs
    .filter((blog) => blog.lang === 'en')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <Stack gap="md" className="my-2">
      <Card
        shadow="sm"
        padding={0}
        radius="md"
        withBorder
        className="relative w-full max-h-60 overflow-hidden"
      >
        <Card.Section>
          <Image
            src="/assets/blog-bg.jpg"
            alt={`notebook and a laptop, courtesy of Unsplash`}
            className="object-cover w-full h-60"
          />
        </Card.Section>
        <div className="absolute inset-0 grid place-items-center pointer-events-none">
          <Stack align="center" gap={4} className="text-white">
            <h5 className="text-2xl font-bold">Blog</h5>
            <p className="text-xl">Welcome to my blog!</p>
            <p className="text-yellow-500 text-lg font-bold">
              This is still a work in progress.
            </p>
          </Stack>
        </div>
      </Card>

      <div className="container grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 z-10">
        {blogs.map((blog) => {
          return (
            <Card
              key={blog.slug}
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              className="flex flex-col gap-2 bg-white dark:bg-gray-700 dark:text-white"
            >
              <Text size={'lg'} fw={'bold'} lineClamp={2}>
                {blog.title}
              </Text>
              <Stack>
                <Text size={'md'} fw={'lighter'} lineClamp={3}>
                  {blog.description || 'No description'}
                </Text>
                <Stack gap={2}>
                  <p className="text-xs font-light">
                    {dayjs(blog.date).format('DD-MM-YYYY')}
                  </p>
                </Stack>
              </Stack>
            </Card>
          );
        })}
      </div>
    </Stack>
  );
}
