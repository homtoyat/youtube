"use client";
import { trpc } from "@/trpc/client";

import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
interface CategoriesSectionProps {
  categoryId?: string;
}

export const CategoriesSection = ({ categoryId }: CategoriesSectionProps) => {
  return (
    <Suspense
      fallback={
        <p className="animate-pulse bg-white text-red-400">Loading...</p>
      }
    >
      <ErrorBoundary fallback={<p>error...</p>}>
        <CategoriesSectionSuspense
          categoryId={categoryId}
        ></CategoriesSectionSuspense>
      </ErrorBoundary>
    </Suspense>
  );
};

const CategoriesSectionSuspense = ({ categoryId }: CategoriesSectionProps) => {
  const [categories] = trpc.categories.getMany.useSuspenseQuery();
  return <div>{JSON.stringify(categories)}</div>;
};
