import { SimpleGrid } from "@chakra-ui/react";
import { Game } from "../services/gameService";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";
import { Text } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameDetails = ({ game }: Props) => {
  return (
    <SimpleGrid as={"dl"} columns={2}>
      <DefinitionItem term="Plaform">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={Number(game.metacritic)} />
      </DefinitionItem>
      <DefinitionItem term="Gernes">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameDetails;
