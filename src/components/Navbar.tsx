import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Asset.png";
import ThemeSwitch from "./ThemeSwitch";
import SearchBar from "./SearchBar";

interface Props {
  onSearch: (searchQuery: string) => void;
}
const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent={"space-between"} padding={5}>
      <Image src={logo} boxSize="60px" />
      <SearchBar onSearch={onSearch} />
      <ThemeSwitch />
    </HStack>
  );
};

export default Navbar;
