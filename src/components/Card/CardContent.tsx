import React from 'react';

export const CardContent = ({children}: {children: React.ReactNode}) => {
  return <div className={'flex flex-col flex-auto px-2 gap-1'}>{children}</div>;
};
