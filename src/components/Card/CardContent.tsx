import React from 'react';
import {Stack} from '@mantine/core';

export const CardContent = ({children}: {children: React.ReactNode}) => {
  return <Stack gap="xs">{children}</Stack>;
};
