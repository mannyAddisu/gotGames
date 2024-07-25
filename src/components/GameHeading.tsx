import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatform";
interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data } = usePlatforms();
  const selectedGenre = genres?.results.find(
    (genre) => genre.id === gameQuery.genreId
  );
  const selectedPlatform = data?.results.find(
    (platform) => platform.id === gameQuery.platformId
  );
  return (
    <Heading as={"h1"} marginBottom={5}>
      {`
      ${selectedPlatform?.name || ""} 
      ${selectedGenre?.name || ""} 
      Games`}
    </Heading>
  );
};

export default GameHeading;
