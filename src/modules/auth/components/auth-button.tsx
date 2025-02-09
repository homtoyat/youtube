import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";
import React from "react";

export const AuthButton = () => {
  return (
    <Button
      variant="outline"
      className="px-4 py-2 text-sm text-blue-600 hover:text-blue-500 border-blue-200 rounded-full shadow-none [&_svg]:size-5"
    >
      <UserCircleIcon></UserCircleIcon>
      Sign In
    </Button>
  );
};
