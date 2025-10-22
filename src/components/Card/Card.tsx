import {PropsWithChildren} from 'react';
import {Card as MantineCard} from '@mantine/core';

type CardProps = PropsWithChildren<{
  className?: string;
}>;

export const Card = ({children, className}: CardProps) => {
  return (
    <MantineCard
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className={className}
      style={{transition: 'transform 0.2s'}}
      styles={{
        root: {
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
      }}
    >
      {children}
    </MantineCard>
  );
};
