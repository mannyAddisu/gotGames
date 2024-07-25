import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useFindPlatform from "../hooks/useFindPlatform";
import useFindGenre from "../hooks/useFindGenre";
interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const selectedGenre = useFindGenre(gameQuery.genreId);
  const selectedPlatform = useFindPlatform(gameQuery.platformId);
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
