import { useQuery } from "@tanstack/react-query";
import platformService from "../services/platformService";
import platforms from "../data/platforms";
import ms from "ms";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: platformService.get,
    staleTime: ms("24h"), //24h,
    initialData: platforms,
  });

export default usePlatforms;
