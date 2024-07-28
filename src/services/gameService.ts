import APIClient from "./api-client";
import { Genre } from "./genreService";
import { Platform } from "./platformService";

interface Publisher {
  id: number;
  name: string;
}

export interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: string;
  genre: string;
  description_raw: string;
}

export default new APIClient<Game>("/games");
