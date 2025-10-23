import {Card} from '@mantine/core';
import type React from 'react';

export const CardMedia = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <Card.Section
      className={className}
      style={{position: 'relative', aspectRatio: '16/9', overflow: 'hidden'}}
    >
      {children}
    </Card.Section>
  );
};
