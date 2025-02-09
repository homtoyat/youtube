"use client";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { HistoryIcon, ListVideoIcon, ThumbsUpIcon } from "lucide-react";
import React from "react";
import Link from "next/link";
const items = [
  { title: "History", url: "/playlist/history", icon: HistoryIcon, auth: true },
  {
    title: "Liked Videos",
    url: "/playlist/liked",
    icon: ThumbsUpIcon,
    auth: true,
  },
  { title: "All Playlists", url: "/playlist", icon: ListVideoIcon },
];

export const PersonalSection = () => {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.url}>
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                isActive={false}
                onClick={() => {}}
              >
                <Link href={item.url} className="flex  items-center gap-4">
                  <item.icon></item.icon>
                  <span className="text-sm">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
