import {Carousel} from '@mantine/carousel';
import {Card, Group, Image, Stack} from '@mantine/core';
import {allBlogs} from 'content-collections';
import dayjs from 'dayjs';

export const BlogCarousel = () => {
  const projects = allBlogs.slice(0, 4);

  return (
    <section>
      <h2
        style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          marginBottom: '1rem',
          textAlign: 'center',
        }}
      >
        Latest Post
      </h2>
      <Carousel
        height={200}
        slideGap="md"
        controlSize={26}
        withControls
        emblaOptions={{
          loop: true,
          dragFree: false,
          align: 'center',
        }}
      >
        {projects.map((blog) => {
          return (
            <Carousel.Slide key={blog.slug}>
              <Card
                key={blog.slug}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
              >
                <Card.Section style={{height: 80, position: 'relative'}}>
                  <Image
                    src={blog.thumbnail}
                    alt={blog.title}
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'top',
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </Card.Section>
                <Group>
                  <h3 style={{fontSize: '1.125rem', fontWeight: 700}}>
                    {blog.title}
                  </h3>
                </Group>
                <Stack gap="xs">
                  <p style={{fontSize: '0.875rem', margin: 0}}>
                    {blog.description || 'No description'}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.875rem',
                      color: '#9CA3AF',
                    }}
                  >
                    <p style={{margin: 0}}>
                      {dayjs(blog.date).format('DD-MM-YYYY')}
                    </p>
                    <p style={{margin: 0}}>5 minute read</p>
                  </div>
                </Stack>
              </Card>
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </section>
  );
};
