import {
  Card,
  Center,
  Container,
  Image,
  Overlay,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import {createFileRoute} from '@tanstack/react-router';
import {allBlogs} from 'content-collections';
import dayjs from 'dayjs';
import {FormattedMessage} from 'react-intl';

export const Route = createFileRoute('/$locale_/blog/')({
  component: BlogIndexPage,
});

export function BlogIndexPage() {
  const {locale} = Route.useParams();
  const blogs = allBlogs
    .filter((blog) => blog.lang === locale)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <Stack gap="md" py="xs">
      <Card
        shadow="sm"
        padding={0}
        radius="md"
        withBorder
        pos="relative"
        w="100%"
        mah={240}
        style={{overflow: 'hidden'}}
      >
        <Card.Section>
          <Image
            src="/assets/blog-bg.jpg"
            alt={`notebook and a laptop, courtesy of Unsplash`}
            w="100%"
            h={240}
            fit="cover"
          />
        </Card.Section>
        <Overlay zIndex={1} backgroundOpacity={0} style={{pointerEvents: 'none'}}>
          <Center h="100%">
            <Stack align="center" gap={4} c="white">
              <Title order={1} fz="2rem" fw={700}>
                <FormattedMessage id="Blog.header_title" defaultMessage="Blog" />
              </Title>
              <Text size="xl">
                <FormattedMessage id="Blog.welcome_message" defaultMessage="Welcome to my blog!" />
              </Text>
              <Text size="lg" fw={700} c="yellow">
                <FormattedMessage id="Blog.wip_message" defaultMessage="This is still a work in progress." />
              </Text>
            </Stack>
          </Center>
        </Overlay>
      </Card>

      <Container size="xl" w="100%">
        <SimpleGrid cols={{base: 2, md: 3, lg: 4}} spacing="md">
          {blogs.map((blog) => {
            return (
              <Card
                key={blog.slug}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
              >
                <Stack gap="xs">
                  <Text size="lg" fw={700} lineClamp={2}>
                    {blog.title}
                  </Text>
                  <Stack gap="xs">
                    <Text size="md" fw={300} lineClamp={3}>
                      {blog.description || 'No description'}
                    </Text>
                    <Stack gap={2}>
                      <Text size="xs" fw={300}>
                        {dayjs(blog.date).format('DD-MM-YYYY')}
                      </Text>
                    </Stack>
                  </Stack>
                </Stack>
              </Card>
            );
          })}
        </SimpleGrid>
      </Container>
    </Stack>
  );
}
