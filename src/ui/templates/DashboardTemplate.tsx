import { Container, Stack, Title } from "@mantine/core";
import type { ReactNode } from "react";
import { DashboardNav } from "../organisms";

interface DashboardTemplateProps {
  onLogout: () => void;
  children: ReactNode;
}

export const DashboardTemplate = ({
  onLogout,
  children,
}: DashboardTemplateProps) => {
  return (
    <Container size="lg" py="xl">
      <Stack gap="lg">
        <Title order={1}>Dashboard</Title>
        <DashboardNav onLogout={onLogout} />
        {children}
      </Stack>
    </Container>
  );
};
