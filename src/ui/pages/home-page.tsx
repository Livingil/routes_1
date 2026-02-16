import { Group, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { AppButton } from "../atoms";
import { PageShell } from "../templates";

export const HomePage = () => {
  return (
    <PageShell
      title="Welcome"
      description="Simple routing demo with protected pages."
    >
      <Text c="dimmed">
        Use the buttons below to explore the dashboard or sign in.
      </Text>
      <Group gap="sm">
        <AppButton component={Link} to="/dashboard">
          Go to Dashboard
        </AppButton>
        <AppButton component={Link} to="/login" variant="light">
          Go to Login
        </AppButton>
      </Group>
    </PageShell>
  );
};
