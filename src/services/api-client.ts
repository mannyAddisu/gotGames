import axios from "axios";
import { GameQuery } from "../App";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9e50654c85064c75ab547616b3d08378",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  get = () => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint)
      .then((res) => res.data);
  };
  getGames = (gameQuery: GameQuery) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, {
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchQuery,
        },
      })
      .then((res) => res.data);
  };
}
export default APIClient;
