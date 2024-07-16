import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GameGenre from "./components/GameGenre";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformMenu from "./components/PlatformMenu";
import { Platform } from "./hooks/usePlatform";
function App() {
  const [selectGenre, setSelectGenre] = useState<Genre | null>(null);
  const [platform, setPlatform] = useState<Platform | null>(null);

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GameGenre
            selectedGenre={selectGenre}
            onSelectGenre={(genre) => setSelectGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformMenu
          selectedPlatform={platform}
          onSelectPlatform={(platform) => setPlatform(platform)}
        />
        <GameGrid selectedGenre={selectGenre} selectedPlatform={platform} />
      </GridItem>
    </Grid>
  );
}

export default App;
