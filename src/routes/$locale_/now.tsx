import {allNows} from 'content-collections';
import dayjs from 'dayjs';
import {createFileRoute} from '@tanstack/react-router';

export const Route = createFileRoute('/$locale_/now')({
  component: NowRoute,
});

function NowRoute() {
  const now = allNows.find((now) => now.lang === 'en');

  return (
    <div className={'container'}>
      <div
        className={
          'flex flex-col gap-1 rounded-xl p-2 bg-white shadow-xl dark:bg-gray-700 dark:text-white'
        }
      >
        <h4 className={'text-center font-bold text-lg'}>{now?.title}</h4>
        <p className={'text-center text-sm'}>
          Last Updated: {dayjs(now?.date).format('DD MM YYYY')}
        </p>
        <hr />
        {now?.content}
      </div>
    </div>
  );
}
