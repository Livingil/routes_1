import { Container, Stack, Text, Title } from "@mantine/core";
import type { ReactNode } from "react";

interface PageShellProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export const PageShell = ({ title, description, children }: PageShellProps) => {
  return (
    <Container size="lg" py="xl">
      <Stack gap="md">
        <div>
          <Title order={1}>{title}</Title>
          {description ? <Text c="dimmed">{description}</Text> : null}
        </div>
        {children}
      </Stack>
    </Container>
  );
};
