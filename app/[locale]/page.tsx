import {Button, Container, Group, Paper, Text, Title} from '@mantine/core';
import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {useTranslations} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import React, {use} from 'react';
import {BlogCarousel} from '@/components/BlogCarousel';
import homeBg from '@/public/assets/home-bg.jpg';

const Page = ({params}: {params: {locale: 'en' | 'id'}}) => {
  const {locale} = use(params);

  setRequestLocale(locale);

  const t = useTranslations('Home');

  return (
    <Container fluid p={0}>
      <div style={{position: 'relative', height: '240px'}}>
        <Image
          src={homeBg}
          alt={'Photo of a code snippet, courtesy of Unsplash'}
          placeholder={'blur'}
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
            {t('welcome_text')}
          </Title>
          <Text size="lg" ta="center">
            {t('welcome_text_2')}
          </Text>
          <Group grow mt="md">
            <Button
              component={Link}
              href={`/now`}
              variant="gradient"
              gradient={{from: 'red', to: 'orange'}}
            >
              {t('now_button')}
            </Button>
            <Button
              component={Link}
              href={`/projects`}
              variant="gradient"
              gradient={{from: 'green', to: 'lime'}}
            >
              {t('project_button')}
            </Button>
            <Button
              component={Link}
              href={`/blog`}
              variant="gradient"
              gradient={{from: 'blue', to: 'cyan'}}
            >
              {t('blog_button')}
            </Button>
          </Group>
          <Text size="lg" fw={700} ta="center" mt="md">
            {t('thanks_text')}
          </Text>
        </Paper>
        <BlogCarousel locale={locale} />
      </Container>
    </Container>
  );
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{locale: 'en' | 'id'}>;
}): Promise<Metadata> => {
  const {locale} = await params;

  const t = await getTranslations({locale, namespace: 'Home'});

  return {
    title: t('title'),
  } satisfies Metadata;
};

export default Page;
