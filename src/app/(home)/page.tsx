import { HydrateClient, trpc } from "@/trpc/server";
import React, { Suspense } from "react";
import { PageClient } from "./client";
import { ErrorBoundary } from "react-error-boundary";
import { HomeView } from "@/modules/home/ui/view/home-view";

export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{ categoryId?: string }>;
}
export default async function page({ searchParams }: PageProps) {
  const { categoryId } = await searchParams;
  void trpc.categories.getMany.prefetch();
  return (
    <HydrateClient>
      <HomeView categoryId={categoryId}></HomeView>
    </HydrateClient>
  );
}
