import {faTriangleExclamation} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useTranslations} from 'next-intl';
import React from 'react';


export const BetaDisclaimer = () => {
  const t = useTranslations('Home');

  return (
    <section
      className={
        'container flex gap-2 text-sm font-bold p-2 rounded-lg bg-yellow-300 text-black my-1'
      }
    >
      <div>
        <FontAwesomeIcon icon={faTriangleExclamation} size={'sm'} />
      </div>
      <div className={'w-full flex justify-between'}>
        <h1>{t('beta_disclaimer')}</h1>
        <a
          href={'https://github.com/alvinvin00/djoni.dev/commits/main/'}
          className={'underline text-blue-600 hover:text-blue-800'}
          target={'_blank'}
        >
          {t('changelog_link')}
        </a>
      </div>
    </section>
  );
};
