import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface Screenshot {
  id: number;
  image: string;
  width: number;
  height: number;
}
const useScreenShot = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.get,
  });
};
export default useScreenShot;
