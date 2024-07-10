import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Asset.png";
import ThemeSwitch from "./ThemeSwitch";
const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src={logo} boxSize="60px" />
      <ThemeSwitch />
    </HStack>
  );
};

export default Navbar;
