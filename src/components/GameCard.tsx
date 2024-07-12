import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="xl">{game.name}</Heading>
      </CardBody>
      {/* <Text></Text> */}
    </Card>
  );
};

export default GameCard;
