import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
interface Props {
  platform: Platform[];
}
const PlatformIconList = ({ platform }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    android: FaAndroid,
    linux: FaLinux,
    mac: FaApple,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platform.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
