import {AppShell, Burger, Group} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {Link, useParams} from '@tanstack/react-router';
import type React from 'react';
import {DarkModeButton} from '@/components/Button/DarkMode';
import {BetaDisclaimer} from './BetaDisclaimer';
import {Footer} from './Footer';

export function AppLayout({children}: {children: React.ReactNode}) {
  const [opened, {toggle}] = useDisclosure();
  const params = useParams({strict: false});
  const locale = (params as {locale?: string}).locale ?? 'en';

  return (
    <AppShell
      header={{height: 70}}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: {desktop: true, mobile: !opened},
      }}
      padding="md"
    >
      <AppShell.Header className="glass-card-dark dark:glass-card border-l-4 border-neon-purple shadow-neon-purple">
        <Group h="100%" px="md" justify="space-between">
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
            className="text-white dark:text-gray-200"
          />
          <Link
            to="/$locale"
            params={{locale}}
            className="group flex items-center gap-2 transition-all duration-300 hover:scale-105"
          >
            <h2 className="text-2xl font-bold bg-gradient-neon bg-clip-text text-transparent transition-all duration-300 group-hover:filter group-hover:brightness-125">
              Djoni&apos;s Den
            </h2>
          </Link>
          <Group ml="xl" gap="md" visibleFrom="sm" align="center">
            <NavLink to="/$locale/now" params={{locale}}>
              Now
            </NavLink>
            <NavLink to="/$locale/projects" params={{locale}}>
              Projects
            </NavLink>
            <NavLink to="/$locale/blog" params={{locale}}>
              Blog
            </NavLink>
            <NavLink to="/$locale/about" params={{locale}}>
              About
            </NavLink>
            <DarkModeButton />
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar
        py="md"
        px={4}
        className="glass-card-dark border-l-4 border-neon-purple"
      >
        <div className="flex flex-col gap-4 p-4">
          <NavLinkMobile
            to="/$locale/now"
            params={{locale}}
            onClick={toggle}
          >
            Now
          </NavLinkMobile>
          <NavLinkMobile
            to="/$locale/projects"
            params={{locale}}
            onClick={toggle}
          >
            Projects
          </NavLinkMobile>
          <NavLinkMobile
            to="/$locale/blog"
            params={{locale}}
            onClick={toggle}
          >
            Blog
          </NavLinkMobile>
          <NavLinkMobile
            to="/$locale/about"
            params={{locale}}
            onClick={toggle}
          >
            About
          </NavLinkMobile>
        </div>
      </AppShell.Navbar>

      <AppShell.Main className="dark:bg-dark-bg dark:text-white min-h-screen">
        <BetaDisclaimer />
        {children}
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
}

function NavLink(props: React.ComponentProps<typeof Link>) {
  const {children, ...rest} = props;
  return (
    <Link
      {...rest}
      className="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-300 hover:text-neon-purple dark:hover:text-neon-cyan group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-neon transition-all duration-300 group-hover:w-full" />
      <span className="absolute inset-0 rounded-lg bg-neon-purple/0 transition-all duration-300 group-hover:bg-neon-purple/10" />
    </Link>
  );
}

function NavLinkMobile(props: React.ComponentProps<typeof Link>) {
  const {children, onClick, ...rest} = props;
  return (
    <Link
      {...rest}
      onClick={onClick}
      className="block px-6 py-4 text-lg font-medium text-gray-700 dark:text-gray-200 transition-all duration-300 hover:text-neon-purple dark:hover:text-neon-cyan hover:bg-white/5 dark:hover:bg-white/10 rounded-lg border-l-4 border-transparent hover:border-neon-purple"
    >
      {children}
    </Link>
  );
}
