import { SimpleGrid, Image, Box } from "@chakra-ui/react";
import useScreenShot from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}
const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenShot(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <Box marginTop={5}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={2}>
        {data?.results.map((img) => (
          <Image key={img.id} src={img.image} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GameScreenshots;
