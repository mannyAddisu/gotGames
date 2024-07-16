import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import LoadingSkeleton from "./LoadingSkeleton";
import useGames from "../hooks/useGames";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; //a constant(dummy) array to be used later to map the skeletons
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={4}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => <LoadingSkeleton key={skeleton} />)}
        {data.map((game) => {
          return <GameCard key={game.id} game={game} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
