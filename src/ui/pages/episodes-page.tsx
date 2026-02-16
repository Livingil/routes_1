import {
  Alert,
  Box,
  Card,
  Center,
  Loader,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import type { Episode } from "../../types/api";
import { useFetchWithInfiniteScroll } from "../../hooks/useFetchWithInfiniteScroll";
import { PageShell } from "../templates";

export const EpisodesPage = () => {
  const {
    data: episodes,
    loading,
    error,
    observerTarget,
  } = useFetchWithInfiniteScroll<Episode>({
    url: "https://rickandmortyapi.com/api/episode",
    errorMessage: "Failed to fetch episodes",
  });

  if (error && episodes.length === 0) {
    return (
      <PageShell title="Episodes" description="Rick and Morty episodes.">
        <Alert color="red" variant="light">
          Error: {error}
        </Alert>
      </PageShell>
    );
  }

  return (
    <PageShell title="Episodes" description="Rick and Morty episodes.">
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
        {episodes.map((episode) => (
          <Card key={episode.id} withBorder radius="md" padding="lg">
            <Stack gap="xs">
              <Text fw={600}>{episode.name}</Text>
              <Text size="sm" c="dimmed">
                Episode: {episode.episode}
              </Text>
              <Text size="sm" c="dimmed">
                Air Date: {episode.air_date}
              </Text>
              <Text size="sm" c="dimmed">
                Characters: {episode.characters.length}
              </Text>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
      {loading ? (
        <Center mt="md">
          <Loader size="sm" />
        </Center>
      ) : null}
      {error ? (
        <Alert color="red" variant="light" mt="md">
          Error: {error}
        </Alert>
      ) : null}
      <Box ref={observerTarget} />
    </PageShell>
  );
};
