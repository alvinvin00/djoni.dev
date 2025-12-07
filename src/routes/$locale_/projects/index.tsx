import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  ActionIcon,
  Box,
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
import {allProjects} from 'content-collections';
import dayjs from 'dayjs';
import {FormattedMessage} from 'react-intl';

export const Route = createFileRoute('/$locale_/projects/')({
  component: ProjectsPage,
});

function ProjectsPage() {
  const {locale} = Route.useParams();
  const projects = allProjects
    .filter((project) => project.lang === locale)
    .sort((a, b) => dayjs(a.date).diff(b.date, 'day'));

  return (
    <Stack gap="md" py="xs">
      <Box pos="relative" w="100%" h="auto" mah={240} style={{aspectRatio: '16/9'}}>
        <Image
          src="/assets/projects-bg.jpg"
          alt={'code snippet in a monitor and a laptop, courtesy of Unsplash'}
          w="100%"
          h="100%"
          fit="cover"
          style={{filter: 'blur(12px)'}}
        />
        <Overlay zIndex={1} backgroundOpacity={0}>
          <Center h="100%">
            <Stack align="center" gap={0} c="white">
              <Title order={1} fz="2rem" fw={700}>
                <FormattedMessage id="Projects.header_title" defaultMessage="Projects" />
              </Title>
              <Text size="xl">
                <FormattedMessage id="Projects.header_description" defaultMessage="Here's all the projects that I have worked on" />
              </Text>
            </Stack>
          </Center>
        </Overlay>
      </Box>

      <Container size="xl" w="100%">
        <SimpleGrid cols={{base: 2, md: 3, lg: 4}} spacing="md">
          {projects.map((project) => {
            return (
              <Card
                key={project.slug}
                mih={240}
                withBorder
                shadow="sm"
                radius="md"
                padding="lg"
              >
                <Card.Section mah={240} style={{overflow: 'hidden'}}>
                  <Image
                    src={project.thumbnail ?? ''}
                    alt={project.title}
                    h="100%"
                    w="100%"
                    fit="cover"
                    style={{objectPosition: 'top'}}
                  />
                </Card.Section>
                <Stack gap="xs" mt="md">
                  <Box>
                    <Title
                      order={5}
                      fz="xl"
                      fw={700}
                      style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {project.title}
                    </Title>
                    <Text size="sm" fw={600}>
                      {dayjs(project.date).year()}
                    </Text>
                  </Box>
                  <Box>
                    <Text size="md" fw={300} lineClamp={3}>
                      {project.description}
                    </Text>
                  </Box>
                  {project.link && (
                    <Box>
                      <ActionIcon
                        component="a"
                        href={project.link}
                        variant="filled"
                        color="blue"
                        size="lg"
                        radius="md"
                      >
                        <FontAwesomeIcon icon={faGlobe} />
                      </ActionIcon>
                    </Box>
                  )}
                </Stack>
              </Card>
            );
          })}
        </SimpleGrid>
      </Container>
    </Stack>
  );
}
