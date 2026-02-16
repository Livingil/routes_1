import { Card, Stack, Text } from "@mantine/core";
import { useLoaderData } from "react-router-dom";
import { PageShell } from "../templates";

interface StatsUser {
  name: string;
  email: string;
}

export const StatsPage = () => {
  const user = useLoaderData() as StatsUser;

  return (
    <PageShell title="Stats" description="Loaded via a route loader.">
      <Card withBorder radius="md" padding="lg">
        <Stack gap="xs">
          <Text fw={600}>{user.name}</Text>
          <Text c="dimmed">{user.email}</Text>
        </Stack>
      </Card>
    </PageShell>
  );
};
