import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImages from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GameGenre = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading } = useGenres();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  if (isLoading)
    return (
      <List>
        {skeleton.map((sk) => (
          <ListItem key={sk} paddingY="5px">
            <HStack>
              <Skeleton boxSize={"32px"} borderRadius={8} />
              <SkeletonText width={"100px"} noOfLines={1} />
            </HStack>
          </ListItem>
        ))}
      </List>
    );
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImages(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              variant="link"
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GameGenre;
