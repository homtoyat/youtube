import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { HomeNavbar } from "../components/home-navbar";
import { HomeSideBar } from "../components/home-sidebar";

interface Props {
  children: React.ReactNode;
}
export const HomeLayout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <div className="w-full">
        <HomeNavbar></HomeNavbar>
        <div className="flex min-h-screen pt-[4rem]">
          <HomeSideBar></HomeSideBar>
          <main className="flex-1   overflow-y-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};
