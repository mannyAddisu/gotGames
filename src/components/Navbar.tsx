import { Heading, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Asset.png";
import ThemeSwitch from "./ThemeSwitch";
const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={5}>
      <HStack>
        <Image src={logo} boxSize="60px" />
        <Heading fontSize={{ md: "18px", lg: "24px" }}>gotGames</Heading>
      </HStack>
      <ThemeSwitch />
    </HStack>
  );
};

export default Navbar;
