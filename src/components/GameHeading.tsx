import { Heading } from "@chakra-ui/react";
import useFindPlatform from "../hooks/useFindPlatform";
import useFindGenre from "../hooks/useFindGenre";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const selectedGenre = useFindGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = useFindPlatform(platformId);

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
