"use client";
import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";
import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
export const AuthButton = () => {
  return (
    <>
      <SignedIn>
        <UserButton></UserButton>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant="outline"
            className="rounded-full border-blue-200 px-4 py-2 text-sm text-blue-600 shadow-none hover:text-blue-500 [&_svg]:size-5"
          >
            <UserCircleIcon></UserCircleIcon>
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
