import { Grid, Show, GridItem, Box, HStack } from "@chakra-ui/react";
import GameGenre from "../components/GameGenre";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import PlatformMenu from "../components/PlatformMenu";
import SortMenu from "../components/SortMenu";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{ base: `"main"`, lg: `"aside main"` }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GameGenre />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box>
          <GameHeading />
          <HStack marginBottom={5} spacing={{ base: 1, sm: 5 }}>
            <PlatformMenu />
            <SortMenu />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
