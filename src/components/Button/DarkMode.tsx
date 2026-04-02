import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {ActionIcon, useMantineColorScheme} from '@mantine/core';
import type React from 'react';

export const DarkModeButton = () => {
  const {colorScheme, toggleColorScheme} = useMantineColorScheme();

  return (
    <ActionIcon
      onClick={() => toggleColorScheme()}
      variant="subtle"
      size="lg"
      aria-label="Toggle color scheme"
      className="relative overflow-hidden rounded-full border-2 border-neon-purple/50 dark:border-neon-cyan/50 transition-all duration-300 hover:border-neon-purple dark:hover:border-neon-cyan hover:shadow-neon-purple dark:hover:shadow-neon-cyan group"
    >
      <FontAwesomeIcon
        icon={colorScheme === 'dark' ? faMoon : faSun}
        className="text-neon-purple dark:text-neon-cyan transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
      />
      <span className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 to-neon-cyan/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </ActionIcon>
  );
};
