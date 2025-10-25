import React, {ReactNode} from 'react';
import {NavLink as MantineNavLink} from '@mantine/core';
import {Link} from '@tanstack/react-router';

export const NavLink = function({href, children}: {
  href: string;
  children: ReactNode;
}) {

  return (
    <MantineNavLink
      component={Link}
      href={href}
      label={children}
    />
  );
};
