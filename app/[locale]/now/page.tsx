import {allNows} from 'content-collections';
import dayjs from 'dayjs';
import {getTranslations, setRequestLocale} from 'next-intl/server';

const NowPage = async (props: {params: Promise<{locale: string}>}) => {
  const {locale} = await props.params;

  setRequestLocale(locale);

  const now = allNows.find((now) => now.lang === locale);

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
        {now?.body.raw}
      </div>
    </div>
  );
};

export const generateMetadata = async (props: {
  params: Promise<{locale: string}>;
}) => {
  const {locale} = await props.params;

  setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: 'Now'});

  return {
    title: t('title'),
  };
};

export default NowPage;
