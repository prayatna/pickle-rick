import { GET_CHARACTERS } from "@/graphql/characters";
import { getClient } from "@/lib/client";

export default async function Characters() {
  const { data } = await getClient().query({
    query: GET_CHARACTERS,
    variables: { page: 1 },
  });
  console.log(data.characters.results);
  console.log(data.characters.info);

  return <div>Characters</div>;
}
