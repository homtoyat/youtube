import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";
import React from "react";

export const AuthButton = () => {
  return (
    <Button>
      <UserCircleIcon></UserCircleIcon>
      Sign In˝
    </Button>
  );
};
