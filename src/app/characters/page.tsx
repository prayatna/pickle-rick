import CharacterCard from "@/components/CharacterCard/CharacterCard";
import { Character, Characters, GET_CHARACTERS } from "@/graphql/characters";
import { getClient } from "@/lib/client";
import { Box } from "@chakra-ui/react";

interface CharactersPageProps {
  searchParams: { page?: string };
}

export default async function CharactersPage({
  searchParams,
}: CharactersPageProps) {
  const page = parseInt(searchParams.page ? searchParams.page : "1");

  const { data } = await getClient().query({
    query: GET_CHARACTERS,
    variables: { page: page },
  });
  // console.log(data.characters.results);
  // console.log(data.characters.info);

  const { results, info } = data.characters;

  return (
    <>
      {results.map((c: Character) => (
        <CharacterCard key={c.id} characterInfo={c} />
      ))}
      <Box>Next;</Box>
    </>
  );
}
