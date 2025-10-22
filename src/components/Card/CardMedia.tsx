import React from 'react';
import {Card} from '@mantine/core';

export const CardMedia = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <Card.Section className={className} style={{position: 'relative', aspectRatio: '16/9', overflow: 'hidden'}}>
      {children}
    </Card.Section>
  );
};
