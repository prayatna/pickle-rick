"use client";

import SignupFormFields from "@/components/SignupFormFields/SignupFormFields";
import { SIGNUP_DATA_COOKIE_NAME } from "@/constants";
import Cookie from "js-cookie";
import { SignupData } from "@/app/signup/page";
import React from "react";
import { Spinner } from "@chakra-ui/react";
import { Toaster, toaster } from "@/components/ui/toaster";

export default function Profile() {
  const [signupData, setSignupData] = React.useState<SignupData | null>(null);

  React.useEffect(() => {
    const cookieData = Cookie.get(SIGNUP_DATA_COOKIE_NAME);
    if (cookieData) {
      setSignupData(JSON.parse(cookieData));
    } else {
      setSignupData(null);
    }
  }, []);

  function handleClick(data: SignupData) {
    Cookie.set(SIGNUP_DATA_COOKIE_NAME, JSON.stringify(data), {
      expires: 7,
    });

    toaster.create({
      description: "Your details has been successfully updated",
      type: "success",
    });
  }

  if (signupData) {
    return (
      <div>
        <Toaster />
        <SignupFormFields
          onHandleClick={handleClick}
          initialData={signupData!}
        />
      </div>
    );
  }
  return <Spinner />;
}
