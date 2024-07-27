import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandText from "../components/ExpandText";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug!); // slug! is a way to tell typeScript that slug will not be undefined

  if (!data) return null;
  if (error) throw error;
  if (isLoading) return <Spinner marginStart={"45%"} marginTop="30px" />;
  return (
    <>
      <Heading>{data?.name}</Heading>
      <ExpandText text={data?.description_raw} />
    </>
  );
};

export default GameDetailPage;
