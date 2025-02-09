import { HomeLayout } from "@/modules/home/ui/layouts/home-layout";
import React from "react";

interface Props {
  children: React.ReactNode;
}
export default function layout({ children }: Props) {
  return (
    <div>
      <HomeLayout> {children}</HomeLayout>
    </div>
  );
}
