import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandText from "../components/ExpandText";
import GameDetails from "../components/GameDetails";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!); // slug! is a way to tell typeScript that slug will not be undefined

  if (isLoading) return <Spinner marginStart={"45%"} marginTop="30px" />;
  if (error || !game) throw error;
  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandText text={game?.description_raw} />
      <GameDetails game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenshots gameId={game.id} />
    </>
  );
};

export default GameDetailPage;
