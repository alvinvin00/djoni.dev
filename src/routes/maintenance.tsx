import {Container, Title, Text, Button, Center} from '@mantine/core';
import {createFileRoute, Link} from '@tanstack/react-router';

export const Route = createFileRoute('/maintenance')({
  component: MaintenancePage,
});

function MaintenancePage() {
  return (
    <Center style={{minHeight: '100vh', flexDirection: 'column'}}>
      <Container size="sm" ta="center" py="xl">
        <Title order={1} mb="md">
          Site Under Maintenance
        </Title>
        <Text size="lg" mb="lg">
          We're performing some scheduled maintenance. We'll be back online
          shortly. Thank you for your patience!
        </Text>
        <Button component={Link} to="/" variant="gradient" gradient={{from: 'blue', to: 'cyan'}}>
          Go to Home (when available)
        </Button>
      </Container>
    </Center>
  );
}
