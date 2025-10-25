
import React from 'react';
import { Group } from '@mantine/core';
import { DarkModeButton } from '@/components/Button/DarkMode';
import {Link} from '@tanstack/react-router';

export const Navbar = () => {
  return (
    <Group justify="space-between" style={{ width: '100%' }}>
      <Link href="/">
        <h6 className={'text-lg font-bold'}>Djoni&apos;s Den</h6>
      </Link>
      <Group>
        <DarkModeButton />
      </Group>
    </Group>
  );
};
