import { SignIn as ClerkSignIn, useUser } from "@clerk/clerk-react";
import React from "react";

function SignIn() {
  const { isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div class="flex justify-center items-center h-screen">
        <div class="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="flex justify-center my-20 items-center">
      <ClerkSignIn />
    </div>
  );
}


export default SignIn;
