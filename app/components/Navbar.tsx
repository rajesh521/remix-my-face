import {
  HStack,
  Heading,
  IconButton,
  Spacer,
  Tag,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack
      bg={"blackAlpha.100"}
      p={4}
      backdropFilter={"blur(20px)"}
      w={"full"}
      position={"sticky"}
      top={0}
      zIndex={100}
      userSelect={"none"}
    >
      <Heading size={"md"} as={"a"} href={"/"}>
        Remix My Face
      </Heading>
      <Spacer />
      <Tag>v0.05</Tag>
      <IconButton
        aria-label={"Toggle Dark Mode"}
        icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
        onClick={toggleColorMode}
        size={"sm"}
        rounded={"full"}
      />
    </HStack>
  );
}
