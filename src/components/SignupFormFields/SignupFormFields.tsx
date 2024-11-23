import React from "react";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Box, Input, VStack } from "@chakra-ui/react";

interface SignupFormFieldsProps {
  initialData?: { username: string; jobTitle: string };
  onHandleClick: (data: { username: string; jobTitle: string }) => void;
}

export default function SignupFormFields({
  initialData,
  onHandleClick,
}: SignupFormFieldsProps) {
  const [username, setUsername] = React.useState(initialData?.username ?? "");
  const [jobTitle, setJobTitle] = React.useState(initialData?.jobTitle ?? "");

  function handleClick() {
    onHandleClick({ username, jobTitle });
  }

  return (
    <Box w={{ mdTo2xl: "xl", base: "sm" }}>
      <VStack gap={"5"}>
        <Field label="Username" width={"100%"}>
          <Input
            placeholder="Rick"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </Field>
        <Field label="Job title">
          <Input
            placeholder="Mega genius scientist"
            value={jobTitle}
            onChange={(event) => {
              setJobTitle(event.target.value);
            }}
          />
        </Field>
        <Button size="md" onClick={handleClick}>
          Sign Up
        </Button>
      </VStack>
    </Box>
  );
}
