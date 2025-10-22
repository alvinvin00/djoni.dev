import {allAbouts} from 'content-collections';
import {setRequestLocale} from 'next-intl/server';
import Markdown from 'react-markdown';
import {hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import type {Metadata} from 'next';

const Page = async (props: {params: Promise<{locale: 'en' | 'id'}>}) => {
  const params = await props.params;

  const {locale} = params;

  setRequestLocale(locale);

  const aboutData = allAbouts.find((about) => about.lang === locale);

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

export const generateMetadata = async (props: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> => {
  const {locale} = await props.params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale as Locale);

  const aboutData = allAbouts.find((about) =>
    about._meta.flattenedPath.includes(locale),
  );

  return {
    title: aboutData?.title,
  };
};

export default Page;
