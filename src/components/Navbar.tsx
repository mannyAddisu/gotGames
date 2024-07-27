import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Asset.png";
import ThemeSwitch from "./ThemeSwitch";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={5}>
      <Image src={logo} boxSize="60px" />
      <SearchBar />
      <ThemeSwitch />
    </HStack>
  );
};

export default Navbar;
