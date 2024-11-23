"use client";

import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { SIGNUP_DATA_COOKIE_NAME } from "@/constants";
import { Box, Input, VStack } from "@chakra-ui/react";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface SignupData {
  userName: string;
  jobTitle: string;
}

export default function Signup() {
  const [signupData, setSignupData] = useState<SignupData>({
    userName: "",
    jobTitle: "",
  });

  const router = useRouter();

  function handleClick() {
    Cookie.set(SIGNUP_DATA_COOKIE_NAME, JSON.stringify(signupData), {
      expires: 7,
    });

    router.push("/characters");
  }

  return (
    <Box w={{ mdTo2xl: "xl", base: "sm" }}>
      <VStack gap={"5"}>
        <Field label="Username" width={"100%"}>
          <Input
            placeholder="Rick"
            value={signupData.userName}
            onChange={(event) => {
              signupData.userName = event.target.value;
              setSignupData({ ...signupData });
            }}
          />
        </Field>
        <Field label="Job title">
          <Input
            placeholder="Megagenius scientist"
            value={signupData.jobTitle}
            onChange={(event) => {
              signupData.jobTitle = event.target.value;
              setSignupData({ ...signupData });
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
