import type { Location } from "../types/api";
import { useFetchWithInfiniteScroll } from "../hooks/useFetchWithInfiniteScroll";

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
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Locations</h1>
      <div className="grid">
        {locations.map((location) => (
          <div key={location.id} className="card">
            <h3>{location.name}</h3>
            <p>Type: {location.type}</p>
            <p>Dimension: {location.dimension}</p>
            <p>Residents: {location.residents.length}</p>
          </div>
        ))}
      </div>
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">Error: {error}</div>}
      <div ref={observerTarget} />
    </div>
  );
};
