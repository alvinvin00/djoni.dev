'use client';

import React from 'react';
import { NavLink } from '@/components/UI/NavLink';

export const Navlinks = () => {
  return (
    <>
      <NavLink href={`/now`}>Now</NavLink>
      <NavLink href={`/projects`}>Projects</NavLink>
      <NavLink href={`/blog`}>Blog</NavLink>
      <NavLink href={`/about`}>About</NavLink>
    </>
  );
};
