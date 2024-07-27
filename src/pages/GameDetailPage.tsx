import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug!); // slug! is a way to tell typeScript that slug will not be undefined

  if (isLoading) return <Spinner marginStart={"45%"} marginTop="30px" />;
  if (error) throw error;
  return (
    <>
      <Heading>{data?.name}</Heading>
      <Text>{data?.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
