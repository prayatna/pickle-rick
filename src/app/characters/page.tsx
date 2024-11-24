import CharacterCard from "@/components/CharacterCard/CharacterCard";
import CharacterPagination from "@/components/CharacterPagination/CharacterPagination";

import { Character, Characters, GET_CHARACTERS } from "@/graphql/characters";
import { getClient } from "@/lib/client";
import { Box } from "@chakra-ui/react";

interface CharactersPageProps {
  searchParams: { page?: string };
}
export const dynamic = "force-dynamic";

export default async function CharactersPage({
  searchParams,
}: CharactersPageProps) {
  const page = parseInt(searchParams.page ? searchParams.page : "1");

  const { data } = await getClient().query({
    query: GET_CHARACTERS,
    variables: { page: page },
  });

  const { results, info } = data.characters as Characters;

  return (
    <>
      {results.map((c: Character) => (
        <CharacterCard key={c.id} characterInfo={c} />
      ))}

      <Box>
        <CharacterPagination pageInfo={info} />
      </Box>
    </>
  );
}
