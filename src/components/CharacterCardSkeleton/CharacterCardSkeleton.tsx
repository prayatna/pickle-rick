import { Card, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Button } from "@/components/ui/button";

export default function CharacterCardSkeleton() {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image
        src="https://miro.medium.com/v2/da:true/resize:fit:256/0*pyRw1qikTI1eqGm9.gif"
        alt="image loading"
      />
      <Card.Body gap="2">
        <Card.Title>Pickle Rick</Card.Title>
        <Card.Description>This is of species Human</Card.Description>
        <Text fontWeight="small" letterSpacing="tight" mt="2">
          Status : unknown
        </Text>
      </Card.Body>
      <Card.Footer alignItems={"center"}>
        <Button size="xs" variant="solid">
          View
        </Button>
      </Card.Footer>
    </Card.Root>
  );
}
