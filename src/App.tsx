import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GameGenre from "./components/GameGenre";
import PlatformMenu from "./components/PlatformMenu";
import SortMenu from "./components/SortMenu";
import GameHeading from "./components/GameHeading";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GameGenre />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingX={2.5}>
          <GameHeading />
          <HStack spacing={5} marginBottom={5}>
            <PlatformMenu />
            <SortMenu />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
