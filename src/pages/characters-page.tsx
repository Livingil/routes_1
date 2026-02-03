import type { Character } from "../types/api";
import { useFetchWithInfiniteScroll } from "../hooks/useFetchWithInfiniteScroll";

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
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Characters</h1>
      <div className="grid">
        {characters.map((character) => (
          <div key={character.id} className="card">
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Location: {character.location.name}</p>
          </div>
        ))}
      </div>
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">Error: {error}</div>}
      <div ref={observerTarget} />
    </div>
  );
};
