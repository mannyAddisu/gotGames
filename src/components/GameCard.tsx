import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatfromIconList";
import CriticScore from "./CriticScore";
import getCroppedImages from "../services/image-url";
import { Game } from "../services/gameService";
import { useNavigate } from "react-router-dom";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  const navigate = useNavigate();
  return (
    <Card
      borderRadius={10}
      overflow={"hidden"}
      boxShadow={"lg"}
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .2s ease-in",
      }}
      onClick={() => {
        navigate(`/games/${game.slug}`);
      }}
    >
      <Image src={getCroppedImages(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={2}>
          <PlatformIconList
            platform={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          />
          <CriticScore score={Number(game.metacritic)} />
        </HStack>
        <Heading fontSize="xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
