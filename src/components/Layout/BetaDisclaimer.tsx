
import React from 'react';
import {Alert, Anchor} from '@mantine/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTriangleExclamation} from '@fortawesome/free-solid-svg-icons';

export const BetaDisclaimer = () => {

  return (
    <Alert
      variant="light"
      color="yellow"
      icon={<FontAwesomeIcon icon={faTriangleExclamation} />}
      className="container my-2"
    >
      <Anchor
        href="https://github.com/alvinvin00/djoni.dev/commits/main/"
        target="_blank"
        size="sm"
      >
      </Anchor>
    </Alert>
  );
};
