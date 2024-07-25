import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImages from "../services/image-url";
// import { Genre } from "../services/genreService";

interface Props {
  onSelectGenre: (genreId: number) => void;
  selectedGenreId?: number;
}
const GameGenre = ({ selectedGenreId, onSelectGenre }: Props) => {
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
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImages(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              />
              <Button
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                variant="link"
                textAlign="left"
                whiteSpace="normal"
                onClick={() => onSelectGenre(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GameGenre;
