import CharacterCardSkeleton from "@/components/CharacterCardSkeleton/CharacterCardSkeleton";
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
