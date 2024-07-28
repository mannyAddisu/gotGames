import useTrailer from "../hooks/useTrailer";
interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailer(gameId);
  if (isLoading) return null;
  if (error) throw error;
  const dataInit = data?.results[0];
  return (
    dataInit && (
      <video src={dataInit?.data[480]} poster={dataInit?.preview} controls />
    )
  );
};

export default GameTrailer;
