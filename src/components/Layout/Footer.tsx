import {ActionIcon, Anchor, Group, Stack, Text} from '@mantine/core';
import {Link, useParams} from '@tanstack/react-router';
import {socials} from '@/config/socials';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const params = useParams({strict: false});
  const locale = (params as {locale?: string}).locale ?? 'en';

  return (
    <footer className="relative mt-20 border-t-2 border-neon-purple/30 dark:border-neon-cyan/30">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 to-neon-cyan/5 dark:from-dark-bg/80 dark:to-dark-card/80 backdrop-blur-sm" />
      <div className="relative px-8 py-12">
        <Group
          justify="space-between"
          align="start"
          className="gap-8 flex-col md:flex-row"
        >
          <Stack gap="md" className="flex-1">
            <div>
              <h3 className="text-2xl font-bold mb-2 bg-gradient-neon bg-clip-text text-transparent">
                Djoni&apos;s Den
              </h3>
              <Text
                size="sm"
                className="text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                A personal space on the internet where thoughts meet code,
                creativity meets technology, and ideas turn into reality.
              </Text>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <Text size="xs" className="mb-1">
                &copy; {currentYear} Djoni&apos;s Den, All Rights Reserved.
              </Text>
              <Text size="xs">
                Made with{' '}
                <span className="text-neon-purple dark:text-neon-cyan animate-pulse-neon">
                  ♥
                </span>{' '}
                using{' '}
                <Anchor
                  href="https://mantine.dev"
                  target="_blank"
                  className="text-neon-purple dark:text-neon-cyan hover:underline"
                >
                  Mantine
                </Anchor>
                ,{' '}
                <Anchor
                  href="https://tanstack.com/start"
                  target="_blank"
                  className="text-neon-purple dark:text-neon-cyan hover:underline"
                >
                  TanStack Start
                </Anchor>
                , &{' '}
                <Anchor
                  href="https://tailwindcss.com"
                  target="_blank"
                  className="text-neon-purple dark:text-neon-cyan hover:underline"
                >
                  Tailwind CSS
                </Anchor>
                . Hosted on Vercel.
              </Text>
            </div>
          </Stack>

          <Stack gap="md" className="flex-1 md:text-right">
            <Text fw={600} className="text-base">
              <span className="bg-gradient-neon bg-clip-text text-transparent">
                Find me on Cyberspace
              </span>
            </Text>
            <Group gap="sm" className="md:justify-end flex-wrap">
              {socials.map((social) => (
                <ActionIcon
                  key={social.id}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.title ?? social.name}
                  variant="subtle"
                  size="lg"
                  className="relative group overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-neon-purple dark:hover:shadow-neon-cyan"
                >
                  <social.icon
                    className="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                    style={{color: social.color}}
                  />
                  <span
                    className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{backgroundColor: `${social.color}20`}}
                  />
                </ActionIcon>
              ))}
            </Group>
          </Stack>
        </Group>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <Group justify="center" gap="xl" className="flex-wrap">
            <Link
              to="/$locale"
              params={{locale}}
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-neon-purple dark:hover:text-neon-cyan transition-colors duration-300 link-underline"
            >
              Home
            </Link>
            <Link
              to="/$locale/about"
              params={{locale}}
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-neon-purple dark:hover:text-neon-cyan transition-colors duration-300 link-underline"
            >
              About
            </Link>
            <Link
              to="/$locale/blog"
              params={{locale}}
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-neon-purple dark:hover:text-neon-cyan transition-colors duration-300 link-underline"
            >
              Blog
            </Link>
            <Link
              to="/$locale/projects"
              params={{locale}}
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-neon-purple dark:hover:text-neon-cyan transition-colors duration-300 link-underline"
            >
              Projects
            </Link>
          </Group>
        </div>
      </div>
    </footer>
  );
};
