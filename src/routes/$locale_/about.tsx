import {Box, Container, Paper, Text, Title} from '@mantine/core';
import {createFileRoute} from '@tanstack/react-router';
import {allAbouts} from 'content-collections';
import Markdown from 'react-markdown';
import {FormattedMessage} from 'react-intl';

export const Route = createFileRoute('/$locale_/about')({
  component: AboutRoute,
});

function AboutRoute() {
  const {locale} = Route.useParams();
  const aboutData = allAbouts.find((about) => about.lang === locale);

  return (
    <Container>
      <Paper
        radius="lg"
        p="sm"
        shadow="lg"
        withBorder
        style={{textAlign: 'center'}}
      >
        <Title order={1} size="xl" fw={700}>
          Alvin Leonardo{' '}
          <Text span c="blue" inherit>
            Djoni
          </Text>
        </Title>
        <Title order={2} size="sm" fw={600}>
          <FormattedMessage id="About.role" defaultMessage="Software Engineer" />
        </Title>
        <br />
        <Box my="md" style={{textAlign: 'justify'}}>
          <Markdown>{aboutData?.content}</Markdown>
        </Box>
      </Paper>
    </Container>
  );
}
