import { HydrateClient, trpc } from "@/trpc/server";
import React, { Suspense } from "react";
import { PageClient } from "./client";
import { ErrorBoundary } from "react-error-boundary";

export default async function page() {
  void trpc.hello.prefetch({ text: " homto" });
  return (
    <HydrateClient>
      <Suspense fallback={<p>Loading...</p>}>
        <ErrorBoundary fallback={<p>Loading...</p>}>
          <PageClient />
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
}
