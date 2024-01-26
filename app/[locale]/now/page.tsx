import {allNows} from 'contentlayer/generated';
import dayjs from 'dayjs';
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';

const NowPage = ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);

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

export const generateMetadata = async ({
                                         params: {locale},
                                       }: {
  params: {locale: string};
}) => {
  unstable_setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: 'Now'});

  return {
    title: t('title'),
  };
};

export default NowPage;
