import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const PlatformMenu = () => {
  const { data, error } = usePlatform();
  const selectedPlatform = useGameQueryStore((s) => s.gameQuery.platformId);
  const setPlatform = useGameQueryStore((s) => s.setPlatform);
  if (error) return null;
  const platform = data?.results.find(
    (platform) => platform.id === selectedPlatform
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem key={platform.id} onClick={() => setPlatform(platform.id)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformMenu;
