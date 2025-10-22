import React from 'react';
import clsx from 'clsx';

export const CardMedia = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const classes = clsx(
    'relative aspect-video w-full h-auto overflow-hidden',
    className,
  );

  return <div className={classes}>{children}</div>;
};
