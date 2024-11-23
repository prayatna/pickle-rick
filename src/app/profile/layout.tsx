import { Box, Heading, VStack } from "@chakra-ui/react";
import React from "react";

export default function Profile({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box textAlign={"center"} fontSize={"xl"} pt={"30vh"}>
      <VStack gap="8">
        <Heading size="2xl" letterSpacing="tight">
          Edit your details
        </Heading>
        {children}
      </VStack>
    </Box>
  );
}
