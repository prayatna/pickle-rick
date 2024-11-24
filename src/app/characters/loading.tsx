import CharacterCardSkeleton from "@/components/CharacterCardSkeleton/CharacterCardSkeleton";
import { Box } from "@chakra-ui/react";
import React from "react";

async function CharactersLoading() {
  return (
    <>
      {" "}
      {[...Array(10)].map((x, i) => (
        <CharacterCardSkeleton key={i} />
      ))}
    </>
  );
}

export default CharactersLoading;
