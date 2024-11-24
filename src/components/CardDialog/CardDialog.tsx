"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLazyQuery, useQuery } from "@apollo/client";
import { CharacterDetail, GET_CHARACTER_DETAILS } from "@/graphql/characters";
import { Spinner } from "@chakra-ui/react";

export default function CardDialog({ characterId }: { characterId: string }) {
  const [getCharacterDetail, { loading, error, data }] = useLazyQuery(
    GET_CHARACTER_DETAILS
  );

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  if (loading) return <Spinner />;
  if (error) return `Error! ${error}`;

  function handleOpenDialog() {
    getCharacterDetail({
      variables: { id: characterId },
    });
    setIsDialogOpen(!isDialogOpen);
  }

  return (
    <DialogRoot
      onOpenChange={handleOpenDialog}
      open={isDialogOpen}
      placement="center"
      motionPreset="slide-in-bottom"
    >
      <DialogTrigger asChild>
        <Button size="xs" variant="solid">
          Info
        </Button>
      </DialogTrigger>
      <CharacterDetailContent characterDetails={data?.character} />
      <DialogCloseTrigger />
    </DialogRoot>
  );
}

function CharacterDetailContent({
  characterDetails,
}: {
  characterDetails: CharacterDetail;
}) {
  if (!characterDetails) return null;

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{characterDetails.name}</DialogTitle>
      </DialogHeader>
      <DialogBody>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </DialogBody>
      <DialogFooter>
        <DialogActionTrigger asChild>
          <Button variant="outline">Close</Button>
        </DialogActionTrigger>
      </DialogFooter>
    </DialogContent>
  );
}
