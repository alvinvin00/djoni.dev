'use client';

import React from 'react';
import {ActionIcon, useMantineColorScheme} from '@mantine/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-regular-svg-icons';

export const DarkModeButton = () => {
  const {colorScheme, toggleColorScheme} = useMantineColorScheme();

  return (
    <ActionIcon
      onClick={() => toggleColorScheme()}
      variant="default"
      size="lg"
      aria-label="Toggle color scheme"
    >
      <FontAwesomeIcon icon={colorScheme === 'dark' ? faMoon : faSun} />
    </ActionIcon>
  );
};
