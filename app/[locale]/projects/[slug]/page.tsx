import {allProjects} from 'content-collections';
import {Metadata} from 'next';
import {setRequestLocale} from 'next-intl/server';
import React from 'react';

export const generateStaticParams = ({params: {locale}}: {
  params: {
    locale: string;
  };
}) => {
  setRequestLocale(locale);

  return allProjects.map((blog) => ({
    slug: blog.slug,
  }));
};

export const generateMetadata = async (
  props: {
    params: Promise<{
      locale: string;
      slug: string;
    }>;
  },
) => {
  const {locale, slug} = await props.params;
  setRequestLocale(locale);

  const project = allProjects.find(
    (blog) => blog._raw.flattenedPath === `projects/${locale}/${slug}`,
  );

  return {
    title: project?.title,
    // description: project?.body.raw,
  } satisfies Metadata;
};

const ProjectDetailPage = async (
  props: {
    params: Promise<{
      locale: string;
      slug: string;
    }>;
  },
) => {
  const params = await props.params;

  const {
    locale,
    slug,
  } = params;

  const project = allProjects.find(
    (blog) => blog._raw.flattenedPath === `projects/${locale}/${slug}`,
  );

  return <div className={'container'}>{project?.body?.raw}</div>;
};

export default ProjectDetailPage;
