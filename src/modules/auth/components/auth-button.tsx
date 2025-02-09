import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";
import React from "react";

export const AuthButton = () => {
  return (
    <Button
      variant="outline"
      className="rounded-full border-blue-200 px-4 py-2 text-sm text-blue-600 shadow-none hover:text-blue-500 [&_svg]:size-5"
    >
      <UserCircleIcon></UserCircleIcon>
    </Button>
  );
};
