"use client";

import SignupFormFields from "@/components/SignupFormFields/SignupFormFields";
import { SIGNUP_DATA_COOKIE_NAME } from "@/constants";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";
import React from "react";

export interface SignupData {
  username: string;
  jobTitle: string;
}

export default function Signup() {
  const router = useRouter();

  function handleClick(data: SignupData) {
    Cookie.set(SIGNUP_DATA_COOKIE_NAME, JSON.stringify(data), {
      expires: 7,
    });
    router.push("/characters?page=1");
  }

  return <SignupFormFields onHandleClick={handleClick} />;
}
