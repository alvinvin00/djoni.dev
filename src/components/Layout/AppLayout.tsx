'use client';
import {AppShell, Burger, Drawer, Group} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import type React from 'react';
import {BetaDisclaimer} from './BetaDisclaimer';
import {Footer} from './Footer';
import {Navbar} from './Navbar';
import {Navlinks} from './Navlinks';

export function AppLayout({children}: {children: React.ReactNode}) {
  const [opened, {toggle}] = useDisclosure();

  return (
    <AppShell
      header={{height: 60}}
      navbar={{width: 300, breakpoint: 'sm', collapsed: {mobile: !opened}}}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Navbar />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Navlinks />
      </AppShell.Navbar>

      <AppShell.Main>
        <BetaDisclaimer />
        {children}
      </AppShell.Main>

      <AppShell.Footer p="md">
        <Footer />
      </AppShell.Footer>

      <Drawer
        opened={opened}
        onClose={toggle}
        title="Djoni's Den"
        hiddenFrom="sm"
      >
        <Navlinks />
      </Drawer>
    </AppShell>
  );
}
