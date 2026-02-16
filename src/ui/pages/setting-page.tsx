import { Text } from "@mantine/core";
import { PageShell } from "../templates";

export const SettingPage = () => {
  return (
    <PageShell title="Settings" description="Manage your preferences.">
      <Text c="dimmed">Settings content can be placed here.</Text>
    </PageShell>
  );
};
