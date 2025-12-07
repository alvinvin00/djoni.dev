import {AppShell, Burger, Group} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {Link, useMatches} from '@tanstack/react-router';
import type React from 'react';
import classes from './AppLayout.module.css';
import {BetaDisclaimer} from './BetaDisclaimer';
import {Footer} from './Footer';

export function AppLayout({children}: {children: React.ReactNode}) {
  const [opened, {toggle}] = useDisclosure();
  const matches = useMatches();
  const localeMatch = matches.find((match) => match.params.locale);
  const locale = localeMatch?.params.locale || 'en';

  return (
    <AppShell
      header={{height: 60}}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: {desktop: true, mobile: !opened},
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{flex: 1}}>
            <Link to="/$locale" params={{locale}} className={classes.navLink}>
              <h2>Djoni&apos;s Den</h2>
            </Link>
            <Group ml={'xl'} gap={0} visibleFrom={'sm'}>
              <Link
                to={`/$locale/now`}
                params={{locale}}
                className={classes.navLink}
              >
                Now
              </Link>
              <Link
                to={`/$locale/projects`}
                params={{locale}}
                className={classes.navLink}
              >
                Projects
              </Link>
              <Link
                to={`/$locale/blog`}
                params={{locale}}
                className={classes.navLink}
              >
                Blog
              </Link>
              <Link
                to={`/$locale/about`}
                params={{locale}}
                className={classes.navLink}
              >
                About
              </Link>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <Link to={`/$locale/now`} params={{locale}} className={classes.navLink}>
          Now
        </Link>
        <Link
          to={`/$locale/projects`}
          params={{locale}}
          className={classes.navLink}
        >
          Projects
        </Link>
        <Link
          to={`/$locale/blog`}
          params={{locale}}
          className={classes.navLink}
        >
          Blog
        </Link>
        <Link
          to={`/$locale/about`}
          params={{locale}}
          className={classes.navLink}
        >
          About
        </Link>
      </AppShell.Navbar>

      <AppShell.Main>
        <BetaDisclaimer />
        {children}
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
}
