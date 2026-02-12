import {
  Alert,
  Badge,
  Box,
  Card,
  Center,
  Group,
  Image,
  Loader,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import type { Character } from "../../types/api";
import { useFetchWithInfiniteScroll } from "../../hooks/useFetchWithInfiniteScroll";
import { PageShell } from "../templates";

const getStatusColor = (status: string) => {
  if (status === "Alive") return "green";
  if (status === "Dead") return "red";
  return "gray";
};

export const CharactersPage = () => {
  const {
    data: characters,
    loading,
    error,
    observerTarget,
  } = useFetchWithInfiniteScroll<Character>({
    url: "https://rickandmortyapi.com/api/character",
    errorMessage: "Failed to fetch characters",
  });

  if (error && characters.length === 0) {
    return (
      <PageShell title="Characters" description="Rick and Morty characters.">
        <Alert color="red" variant="light">
          Error: {error}
        </Alert>
      </PageShell>
    );
  }

  return (
    <PageShell title="Characters" description="Rick and Morty characters.">
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
        {characters.map((character) => (
          <Card key={character.id} withBorder radius="md" padding="lg">
            <Card.Section>
              <Image
                src={character.image}
                alt={character.name}
                height={180}
                fit="cover"
              />
            </Card.Section>
            <Stack gap="xs" mt="sm">
              <Group justify="space-between">
                <Text fw={600}>{character.name}</Text>
                <Badge color={getStatusColor(character.status)}>
                  {character.status}
                </Badge>
              </Group>
              <Text size="sm" c="dimmed">
                Species: {character.species}
              </Text>
              <Text size="sm" c="dimmed">
                Gender: {character.gender}
              </Text>
              <Text size="sm" c="dimmed">
                Location: {character.location.name}
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
