import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatfromIconList";
import CriticScore from "./CriticScore";
import getCroppedImages from "../services/image-url";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={getCroppedImages(game.background_image)} />
      <CardBody>
        <Heading fontSize="xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platform={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          />
          <CriticScore score={Number(game.metacritic)} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
