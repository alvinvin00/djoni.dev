import {allAbouts} from 'contentlayer/generated';
// import {about} from './velite';
import {setRequestLocale} from 'next-intl/server';
import React from 'react';
import Markdown from 'react-markdown';

const Page = async (props: {params: Promise<{locale: string}>}) => {
  const params = await props.params;

  const {
    locale,
  } = params;

  setRequestLocale(locale);

  const aboutData = allAbouts.find((about) =>
    about.lang === locale,
  );

  return (
    <div className="container">
      <div
        className={
          'rounded-lg p-2 text-center shadow-lg bg-white dark:bg-gray-600 text-black dark:text-white'
        }
      >
        <h1 className={'text-xl font-bold'}>
          Alvin Leonardo{' '}
          <span className={'text-blue-800 dark:text-blue-200'}>Djoni</span>
        </h1>
        <h2 className={'text-sm font-semibold'}>Software Engineer</h2>
        <br />
        <div className="my-4 text-justify">
          <Markdown>{aboutData?.body?.raw}</Markdown>
        </div>
      </div>
    </div>
  );
};

export const generateMetadata = async (
  props: {
    params: Promise<{locale: string}>;
  },
) => {
  const {locale} = await props.params;

  setRequestLocale(locale);

  const aboutData = allAbouts.find((about) =>
    about._raw.flattenedPath.includes(locale),
  );

  return {
    title: aboutData?.title,
  };
};

export default Page;
