import React from 'react';

export const CardFooter = ({children}: {children: React.ReactNode}) => {
  return <div className={'w-full flex self-end items-end justify-end gap-2 mx-2 my-1'}>{children}</div>;
};
