import {useTranslations} from 'next-intl';
import React from 'react';
import {Alert, Anchor} from '@mantine/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTriangleExclamation} from '@fortawesome/free-solid-svg-icons';

export const BetaDisclaimer = () => {
  const t = useTranslations('Home');

  return (
    <Alert
      variant="light"
      color="yellow"
      title={t('beta_disclaimer')}
      icon={<FontAwesomeIcon icon={faTriangleExclamation} />}
      className="container my-2"
    >
      <Anchor
        href="https://github.com/alvinvin00/djoni.dev/commits/main/"
        target="_blank"
        size="sm"
      >
        {t('changelog_link')}
      </Anchor>
    </Alert>
  );
};
