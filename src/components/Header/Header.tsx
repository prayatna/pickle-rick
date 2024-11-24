import React from "react";
import Link from "next/link";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
// TODO: only show links based on signup data
export default function Header() {
  return (
    <header>
      <Flex wrap="wrap" as="nav" gap="4" justify="space-between" align="center">
        <Image
          marginEnd="auto"
          height="100px"
          src="https://i.imghippo.com/files/qUPQ3820a.png"
        ></Image>
        <Box p="4">
          <Link href="/characters">
            <Text fontWeight="semibold">Characters</Text>
          </Link>
        </Box>
        <Box p="4">
          <Link href="/profile">
            <Text fontWeight="semibold">Profile</Text>
          </Link>
        </Box>
        <Box p="4">
          <Link href="/signup">
            <Text fontWeight="semibold">Signup</Text>
          </Link>
        </Box>
      </Flex>
    </header>
  );
}
