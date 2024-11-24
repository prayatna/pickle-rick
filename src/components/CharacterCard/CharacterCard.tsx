import { Card, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Character } from "@/graphql/characters";

import CardDialog from "../CardDialog/CardDialog";

export default function CharacterCard({
  characterInfo,
}: {
  characterInfo: Character;
}) {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image src={characterInfo.image} alt={characterInfo.name} />
      <Card.Body gap="2">
        <Card.Title>{characterInfo.name}</Card.Title>
        <Card.Description>
          This is of species {characterInfo.species}
        </Card.Description>
        <Text fontWeight="small" letterSpacing="tight" mt="2">
          Status : {characterInfo.status}
        </Text>
      </Card.Body>
      <Card.Footer alignItems={"center"}>
        <CardDialog characterId={characterInfo.id} />
      </Card.Footer>
    </Card.Root>
  );
}
