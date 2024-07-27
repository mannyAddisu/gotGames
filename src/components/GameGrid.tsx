import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import LoadingSkeleton from "./LoadingSkeleton";
import useGames from "../hooks/useGames";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
  const { data, error, isLoading, hasNextPage, fetchNextPage } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; //a constant(dummy) array to be used later to map the skeletons
  const fetchedGames =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;
  return (
    <>
      {error && <Text paddingStart="50%">{error.message}</Text>}
      <InfiniteScroll
        dataLength={fetchedGames}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={<Spinner marginStart="50%" />}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={5}
          padding="10px"
        >
          {isLoading &&
            skeletons.map((skeleton) => <LoadingSkeleton key={skeleton} />)}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
