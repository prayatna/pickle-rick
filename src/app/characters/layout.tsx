import { Box } from "@chakra-ui/react";
import React from "react";

export default function CharactersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box
      display={"grid"}
      gridTemplateColumns={"repeat(auto-fit, minmax(230px, 1fr))"}
      gap={2}
      padding={4}
    >
      {children}
    </Box>
  );
}
