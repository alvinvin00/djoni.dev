import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {ActionIcon, Group, Text} from '@mantine/core';
import {Link} from '@tanstack/react-router';
import {socials} from '@/config/socials';

export const Footer = () => {
  return (
    <Group justify="space-between">
      <Text>
        &copy; 2025 Djoni&apos;s Den, All Rights Reserved. <br />
        Made with love, Mantine, and Tanstack Start, hosted on Vercel
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
