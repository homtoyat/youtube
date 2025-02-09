import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SearchInput } from "./search-input";
import { AuthButton } from "@/modules/auth/components/auth-button";

export const HomeNavbar = () => {
  return (
    <nav className="fixed  top-0 left-0 right-0 bg-white  flex items-center  px-2 pr-5 z-50">
      <div className="flex items-center gap-4  w-full">
        {/* menu and logo */}
        <div className="flex items-center justify-start flex-shrink-0">
          <SidebarTrigger></SidebarTrigger>
          <Link href={"/"}>
            <div className="flex gap-1 p-4 ">
              <Image src="/logo.svg" alt="logo" width={32} height={32}></Image>
              <p className="font-semibold  tracking-tighter"> YouTube</p>
            </div>
          </Link>
          {/* search bar */}
          <div className="flex-1  flex justify-center max-w-[720px] mx-auto">
            <SearchInput></SearchInput>
          </div>
          <div className="flex-shrink-0  items-center  flex gap-4">
            <AuthButton></AuthButton>
          </div>
        </div>
      </div>
    </nav>
  );
};
