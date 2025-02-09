import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import React from "react";
import { MainSection } from "./main-section";
import { Separator } from "@/components/ui/separator";
import { PersonalSection } from "./personal-section";

export const HomeSideBar = () => {
  return (
    <Sidebar className="pt-16  z-40   border-none">
      <SidebarContent className="bg-background">
        <MainSection></MainSection>
        <Separator></Separator>
        <PersonalSection></PersonalSection>
      </SidebarContent>
    </Sidebar>
  );
};
