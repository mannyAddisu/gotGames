import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ThemeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text fontSize={{ md: "lg" }}>Theme</Text>
    </HStack>
  );
};

export default ThemeSwitch;
