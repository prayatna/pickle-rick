import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      info {
        next
        prev
        count
        pages
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

// Get character details by ID
export const GET_CHARACTER_DETAILS = gql`
  query GetCharacterDetails($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      species
      gender
      location {
        name
      }
      episode {
        name
      }
    }
  }
`;

export interface Characters {
  info: CharactersQueryInfo;
  results: Character[];
}

export interface CharactersQueryInfo {
  next: string | null;
  prev: string | null;
  count: number;
  pages: number;
}

export interface Character {
  id: string;
  name: string;
  image: string;
  species: string;
  status: string;
}

export interface CharacterDetail {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  location: {
    name: string | null;
  };
  episode: Episode[];
}

interface Episode {
  name: string;
}
