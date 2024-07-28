import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Asset.png";
import ThemeSwitch from "./ThemeSwitch";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={5}>
      <Link to={"/"}>
        <Image src={logo} boxSize="60px" objectFit="contain" />
      </Link>
      <SearchBar />
      <ThemeSwitch />
    </HStack>
  );
};

export default Navbar;
