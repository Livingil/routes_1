import { Card, Stack, Text } from "@mantine/core";
import { useAuth } from "../../context";
import { PageShell } from "../templates";

export const ProfilePage = () => {
  const { email } = useAuth();

  return (
    <PageShell title="Profile" description="Your profile details.">
      <Card withBorder radius="md" padding="lg">
        <Stack gap="xs">
          <Text fw={600}>Email</Text>
          <Text c="dimmed">{email ?? "Not set"}</Text>
        </Stack>
      </Card>
    </PageShell>
  );
};
