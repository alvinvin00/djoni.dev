import {faTriangleExclamation} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Alert, Anchor} from '@mantine/core';

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
        This site is still in development, it may change overtime. Thank you for
        your understanding!
      </Anchor>
    </Alert>
  );
};
