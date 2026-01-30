import character from "./db/characters.json";
import episode from "./db/episode.json";
import location from "./db/location.json";
import type { Character, Episode, Item, Location } from "./types";

export const validationFunction = (category: string) => {
  let items: Item[] = [];

  if (category === "characters") {
    items = character as Character[];
  } else if (category === "episodes") {
    items = episode as Episode[];
  } else if (category === "locations") {
    items = location as Location[];
  }

  return items;
};
