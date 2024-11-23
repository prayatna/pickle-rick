import { Box, Heading, VStack } from "@chakra-ui/react";
import React from "react";

export default function SignupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box textAlign={"center"} fontSize={"xl"} pt={"30vh"}>
      <VStack gap="8">
        <Heading size="2xl" letterSpacing="tight">
          Signup for all things Rick and Morty
        </Heading>
        {children}
      </VStack>
    </Box>
  );
}
