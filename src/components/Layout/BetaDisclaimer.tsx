import {faTriangleExclamation} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Alert, Anchor} from '@mantine/core';
import type React from 'react';

export const BetaDisclaimer = () => {
  return (
    <div className="container mx-auto px-4 mt-4 animate-fade-in-down">
      <Alert
        variant="filled"
        icon={
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            className="animate-pulse-neon"
          />
        }
        className="relative overflow-hidden border-l-4 border-neon-purple dark:border-neon-cyan bg-gradient-to-r from-neon-purple/10 to-neon-cyan/10 dark:from-dark-card/80 dark:to-dark-surface/80 backdrop-blur-sm shadow-neon-purple dark:shadow-neon-cyan"
      >
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              className="text-neon-purple dark:text-neon-cyan text-lg animate-pulse-neon"
            />
            <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
              This site is actively under development and may change frequently.
              Thank you for your patience and understanding!
            </p>
          </div>
          <Anchor
            href="https://github.com/alvinvin00/djoni.dev/commits/main/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-neon-purple/20 dark:bg-neon-cyan/20 hover:bg-neon-purple/30 dark:hover:bg-neon-cyan/30 text-neon-purple dark:text-neon-cyan transition-all duration-300 hover:shadow-neon-purple dark:hover:shadow-neon-cyan border border-neon-purple/30 dark:border-neon-cyan/30"
          >
            View Changelog
          </Anchor>
        </div>
        <span className="absolute inset-0 bg-gradient-neon opacity-5 animate-shimmer pointer-events-none" />
      </Alert>
    </div>
  );
};
