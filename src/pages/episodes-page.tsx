import type { Episode } from "../types/api";
import { useFetchWithInfiniteScroll } from "../hooks/useFetchWithInfiniteScroll";

export const EpisodesPage = () => {
  const { data: episodes, loading, error, observerTarget } =
    useFetchWithInfiniteScroll<Episode>({
      url: "https://rickandmortyapi.com/api/episode",
      errorMessage: "Failed to fetch episodes",
    });

  if (error && episodes.length === 0) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Episodes</h1>
      <div className="grid">
        {episodes.map((episode) => (
          <div key={episode.id} className="card">
            <h3>{episode.name}</h3>
            <p>Episode: {episode.episode}</p>
            <p>Air Date: {episode.air_date}</p>
            <p>Characters: {episode.characters.length}</p>
          </div>
        ))}
      </div>
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">Error: {error}</div>}
      <div ref={observerTarget} />
    </div>
  );
};
