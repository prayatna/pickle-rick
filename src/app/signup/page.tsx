import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Box, Input, VStack } from "@chakra-ui/react";

export default function Signup() {
  return (
    <Box w={{ mdTo2xl: "xl", base: "sm" }}>
      <VStack gap={"5"}>
        <Field label="Username" width={"100%"}>
          <Input placeholder="Rick" />
        </Field>
        <Field label="Job title">
          <Input placeholder="Megagenius scientist" />
        </Field>
        <Button size="md">Sign Up</Button>
      </VStack>
    </Box>
  );
}
