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
import type { Location } from "../../types/api";
import { useFetchWithInfiniteScroll } from "../../hooks/useFetchWithInfiniteScroll";
import { PageShell } from "../templates";

export const LocationsPage = () => {
  const {
    data: locations,
    loading,
    error,
    observerTarget,
  } = useFetchWithInfiniteScroll<Location>({
    url: "https://rickandmortyapi.com/api/location",
    errorMessage: "Failed to fetch locations",
  });

  if (error && locations.length === 0) {
    return (
      <PageShell title="Locations" description="Rick and Morty locations.">
        <Alert color="red" variant="light">
          Error: {error}
        </Alert>
      </PageShell>
    );
  }

  return (
    <PageShell title="Locations" description="Rick and Morty locations.">
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
        {locations.map((location) => (
          <Card key={location.id} withBorder radius="md" padding="lg">
            <Stack gap="xs">
              <Text fw={600}>{location.name}</Text>
              <Text size="sm" c="dimmed">
                Type: {location.type}
              </Text>
              <Text size="sm" c="dimmed">
                Dimension: {location.dimension}
              </Text>
              <Text size="sm" c="dimmed">
                Residents: {location.residents.length}
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
