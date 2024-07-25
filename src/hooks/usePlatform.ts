import { useQuery } from "@tanstack/react-query";
import platformService from "../services/platformService";
import platforms from "../data/platforms";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: platformService.get,
    staleTime: 24 * 60 * 60 * 1000, //24h,
    initialData: { count: platforms.length, results: platforms, next: null },
  });

export default usePlatforms;
