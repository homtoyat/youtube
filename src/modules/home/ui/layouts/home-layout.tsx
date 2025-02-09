import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { HomeNavbar } from "../components/home-navbar";

interface Props {
  children: React.ReactNode;
}
export const HomeLayout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <div className="w-full">
        <HomeNavbar></HomeNavbar>
        <div>{children}</div>
      </div>
    </SidebarProvider>
  );
};
