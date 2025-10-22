import React from 'react';

export const CardHeader = ({children}: {children: React.ReactNode}) => {
  return (
    <div className={'px-2 flex items-center justify-between'}>{children}</div>
  );
};
