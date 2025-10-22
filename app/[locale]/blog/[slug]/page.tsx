import {allBlogs} from 'content-collections';
import {setRequestLocale} from 'next-intl/server';
import React from 'react';

type BlogContentProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export const generateStaticParams = async ({params}: {
  params: Promise<{locale: string}>;
}) => {
  const {locale} = await params;

  setRequestLocale(locale);

  return allBlogs.map((blog) => ({
    slug: blog.slug,
  }));
};

export const generateMetadata = async (props: BlogContentProps) => {
  const {locale, slug} = await props.params;
  setRequestLocale(locale);

  const blog = allBlogs.find(
    (blog) => blog._meta.filePath === `blog/${locale}/${slug}`,
  );

  return {
    title: blog?.title,
    description: blog?.description,
    keywords: blog?.categories ?? [],
  };
};

const Page = async (props: BlogContentProps) => {
  const params = await props.params;

  const {
    locale,
    slug,
  } = params;

  setRequestLocale(locale);

  const blog = allBlogs.find(
    (blog) => blog._meta.filePath === `blog/${locale}/${slug}`,
  );

  return <div className={'container'}>{blog?.content}</div>;
};

export default Page;
