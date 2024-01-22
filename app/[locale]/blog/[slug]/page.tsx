import {allBlogs} from 'contentlayer/generated';
import {unstable_setRequestLocale} from 'next-intl/server';
import React from 'react';

type BlogContentProps = {
  params: {
    locale: string;
    slug: string;
  };
};

export const generateStaticParams = ({
  params: {locale},
}: {
  params: {locale: string};
}) => {
  unstable_setRequestLocale(locale);

  return allBlogs.map((blog) => ({
    slug: blog.slug,
  }));
};

export const generateMetadata = ({
  params: {locale, slug},
}: BlogContentProps) => {
  unstable_setRequestLocale(locale);

  const blog = allBlogs.find(
    (blog) => blog._raw.flattenedPath === `blog/${locale}/${slug}`,
  );

  return {
    title: blog?.title,
    description: blog?.body.raw,
    keywords: blog?.categories ?? [],
  };
};

const Page = ({params: {locale, slug}}: BlogContentProps) => {
  unstable_setRequestLocale(locale);

  const blog = allBlogs.find(
    (blog) => blog._raw.flattenedPath === `blog/${locale}/${slug}`,
  );

  return <div className={'container'}>{blog?.body?.raw}</div>;
};

export default Page;
