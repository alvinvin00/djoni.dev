import {Button, Container, Group, Paper, Text, Title} from '@mantine/core';
import {createFileRoute, Link} from '@tanstack/react-router';
import {BlogCarousel} from '@/components/BlogCarousel';
import {FormattedMessage} from 'react-intl';

export const Route = createFileRoute('/$locale_/')({
  component: HomeRoute,
});

function HomeRoute() {
  const {locale} = Route.useParams();

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
            <FormattedMessage id="Home.welcome_text" defaultMessage="Welcome to my personal website!" />
          </Title>
          <Text size="lg" ta="center">
             <FormattedMessage id="Home.welcome_text_2" defaultMessage="This is where I share my thoughts, projects, and experiences." />
          </Text>
          <Group grow mt="md">
            <Button
              component={Link}
              to="/$locale/now"
              params={{locale}}
              variant="gradient"
              gradient={{from: 'red', to: 'orange'}}
            >
              <FormattedMessage id="Home.now_button" defaultMessage="What I'm doing now" />
            </Button>
            <Button
              component={Link}
              to="/$locale/projects"
              params={{locale}}
              variant="gradient"
              gradient={{from: 'green', to: 'lime'}}
            >
              <FormattedMessage id="Home.project_button" defaultMessage="My Projects" />
            </Button>
            <Button
              component={Link}
              to="/$locale/blog"
              params={{locale}}
              variant="gradient"
              gradient={{from: 'blue', to: 'cyan'}}
            >
              <FormattedMessage id="Home.blog_button" defaultMessage="My Blog" />
            </Button>
          </Group>
          <Text size="lg" fw={700} ta="center" mt="md">
            <FormattedMessage id="Home.thanks_text" defaultMessage="Thanks for visiting!" />
          </Text>
        </Paper>
        <BlogCarousel />
      </Container>
    </Container>
  );
}
