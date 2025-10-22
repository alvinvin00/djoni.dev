'use client';
import React, {ReactNode} from 'react';
import {NavLink as MantineNavLink} from '@mantine/core';
import {usePathname} from 'next/navigation';
import Link from 'next/link';

export const NavLink = function ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <MantineNavLink
      component={Link}
      href={href}
      label={children}
      active={pathname === href}
    />
  );
};
