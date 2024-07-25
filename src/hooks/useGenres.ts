import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import genreService from "../services/genreService";

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: genreService.get,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres, next: null },
  });

export default useGenres;
