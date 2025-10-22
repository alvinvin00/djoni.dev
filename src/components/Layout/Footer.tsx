'use client';

import { socials } from '@/config/socials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { Group, ActionIcon, Text } from '@mantine/core';

export const Footer = () => {
  return (
    <Group justify="space-between">
      <Text>
        &copy; 2024 Djoni&apos;s Den, All Rights Reserved. <br />
        Made with love and NextJS, hosted on Vercel
      </Text>
      <Group>
        <Text fw={500}>Find me on Cyberspace:</Text>
        {socials.map((social) => (
          <ActionIcon
            key={social.id}
            component={Link}
            href={social.url}
            title={social.title ?? social.name}
            variant="filled"
            color={social.color}
          >
            <FontAwesomeIcon icon={social.icon} />
          </ActionIcon>
        ))}
      </Group>
    </Group>
  );
};