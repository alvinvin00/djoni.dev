import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {ActionIcon, Group, Text} from '@mantine/core';
import {Link} from '@tanstack/react-router';
import {socials} from '@/config/socials';
import {FormattedMessage} from 'react-intl';

export const Footer = () => {
  return (
    <Group justify="space-between">
      <Text>
        <FormattedMessage
          id="Footer.copyright"
          defaultMessage="&copy; {year} Djoni's Den, All Rights Reserved. <br /> Made with love, Mantine, and Tanstack Start, hosted on Vercel"
          values={{
            year: new Date().getFullYear(),
            br: <br />,
          }}
        />
      </Text>
      <Group>
        <Text fw={500}>
          <FormattedMessage id="Footer.socials_label" defaultMessage="Find me on Cyberspace:" />
        </Text>
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
