import {Button, Container, Group, Paper, Text, Title} from '@mantine/core';
import {createFileRoute} from '@tanstack/react-router';
import {BlogCarousel} from '@/components/BlogCarousel';

export const Route = createFileRoute('/$locale_/')({
  component: HomeRoute,
});

function HomeRoute() {
  return (
    <Container fluid p={0}>
      <div style={{position: 'relative', height: '240px'}}>
        <img
          src={'/assets/home-bg.jpg'}
          alt={'code snippet, courtesy of Unsplash'}
          style={{objectFit: 'cover', width: '100%', height: '100%'}}
        />
      </div>
      <Container>
        <Paper
          shadow="xl"
          p="md"
          radius="lg"
          style={{
            position: 'relative',
            top: '-50px',
            margin: '0 auto',
            maxWidth: '800px',
          }}
        >
          <Title order={1} ta="center" mb="md">
            Welcome to my personal website!
          </Title>
          <Text size="lg" ta="center">
            This is where I share my thoughts, projects, and experiences.
          </Text>
          <Group grow mt="md">
            <Button
              component="a"
              href={`/now`}
              variant="gradient"
              gradient={{from: 'red', to: 'orange'}}
            >
              What I'm doing now
            </Button>
            <Button
              component="a"
              href={`/projects`}
              variant="gradient"
              gradient={{from: 'green', to: 'lime'}}
            >
              My Projects
            </Button>
            <Button
              component="a"
              href={`/blog`}
              variant="gradient"
              gradient={{from: 'blue', to: 'cyan'}}
            >
              My Blog
            </Button>
          </Group>
          <Text size="lg" fw={700} ta="center" mt="md">
            Thanks for visiting!
          </Text>
        </Paper>
        <BlogCarousel />
      </Container>
    </Container>
  );
}
