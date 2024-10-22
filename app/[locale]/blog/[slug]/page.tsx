import {blog as blogs} from '.velite';
import {unstable_setRequestLocale} from 'next-intl/server';
import React from 'react';

type BlogContentProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export const generateStaticParams = ({params: {locale}}: {
  params: {locale: string};
}) => {
  unstable_setRequestLocale(locale);

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
};

export const generateMetadata = async (props: BlogContentProps) => {
  const {locale, slug} = await props.params;
  unstable_setRequestLocale(locale);

  const blog = blogs.find(
    (blog) => blog._raw.flattenedPath === `blog/${locale}/${slug}`,
  );

  return {
    title: blog?.title,
    description: blog?.body.raw,
    keywords: blog?.categories ?? [],
  };
};

const Page = async (props: BlogContentProps) => {
  const params = await props.params;

  const {
    locale,
    slug,
  } = params;

  unstable_setRequestLocale(locale);

  const blog = blogs.find(
    (blog) => blog._raw.flattenedPath === `blog/${locale}/${slug}`,
  );

  return <div className={'container'}>{blog?.body?.raw}</div>;
};

export default Page;
