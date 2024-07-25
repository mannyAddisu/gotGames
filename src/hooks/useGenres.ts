import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import genreService from "../services/genreService";
import ms from "ms";
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: genreService.get,
    staleTime: ms("24h"), //24h
    initialData: genres,
  });

export default useGenres;
