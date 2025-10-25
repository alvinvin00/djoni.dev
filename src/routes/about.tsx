import {allAbouts} from 'content-collections';
import Markdown from 'react-markdown';
import {createFileRoute} from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: AboutRoute,
});

function AboutRoute() {
  const aboutData = allAbouts.find((about) => about.lang === 'en');

  return (
    <div className="container">
      <div
        className={
          'rounded-lg p-2 text-center shadow-lg bg-white dark:bg-gray-600 text-black dark:text-white'
        }
      >
        <h1 className={'text-xl font-bold'}>
          Alvin Leonardo <span className={'text-blue-800 dark:text-blue-200'}>Djoni</span>
        </h1>
        <h2 className={'text-sm font-semibold'}>Software Engineer</h2>
        <br />
        <div className="my-4 text-justify">
          <Markdown>{aboutData?.body?.raw}</Markdown>
        </div>
      </div>
    </div>
  );
}
