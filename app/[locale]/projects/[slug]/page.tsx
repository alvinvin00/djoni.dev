import {allProjects} from 'contentlayer/generated';
import {Metadata} from 'next';
import {unstable_setRequestLocale} from 'next-intl/server';
import React from 'react';

export const generateStaticParams = ({params: {locale}}: {
  params: {
    locale: string;
  };
}) => {
  unstable_setRequestLocale(locale);

  return allProjects.map((blog) => ({
    slug: blog.slug,
  }));
};

export const generateMetadata = ({params: {locale, slug}}: {
  params: {
    locale: string;
    slug: string;
  };
}) => {
  unstable_setRequestLocale(locale);

  const project = allProjects.find(
    (blog) => blog._raw.flattenedPath === `projects/${locale}/${slug}`,
  );

  return {
    title: project?.title,
    // description: project?.body.raw,
  } satisfies Metadata;
};

const ProjectDetailPage = ({params: {locale, slug}}: {
  params: {
    locale: string;
    slug: string;
  };
}) => {
  const project = allProjects.find(
    (blog) => blog._raw.flattenedPath === `projects/${locale}/${slug}`,
  );

  return <div className={'container'}>{project?.body?.raw}</div>;
};

export default ProjectDetailPage;
