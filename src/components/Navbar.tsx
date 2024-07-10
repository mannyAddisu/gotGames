import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Asset.png";
const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>Navbar</Text>
    </HStack>
  );
};

export default Navbar;
