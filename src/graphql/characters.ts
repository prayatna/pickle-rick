import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      info {
        next
        prev
      }
      results {
        id
        name
        species
        status
        image
      }
    }
  }
`;

export interface Characters {
  info: CharactersQueryInfo;
  results: Character[];
}

export interface CharactersQueryInfo {
  next: number | null;
  prev: number | null;
}

export interface Character {
  id: string;
  name: string;
  image: string;
  species: string;
  status: string;
}
