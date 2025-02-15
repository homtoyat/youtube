"use client";
import { FilterCarousel } from "@/components/filter-carpusel";
import { trpc } from "@/trpc/client";
import { useRouter } from "next/navigation";

import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
interface CategoriesSectionProps {
  categoryId?: string;
}

export const CategoriesSection = ({ categoryId }: CategoriesSectionProps) => {
  return (
    <Suspense
      fallback={
        <FilterCarousel
          isLoading={true}
          data={[]}
          onSelect={() => {}}
        ></FilterCarousel>
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
  const router = useRouter();
  const onSelect = (value: string | null) => {
    const url = new URL(window.location.href);
    if (value) {
      url.searchParams.set("categoryId", value);
    } else {
      url.searchParams.delete("categoryId");
    }
    router.push(url.toString());
  };
  const [categories] = trpc.categories.getMany.useSuspenseQuery();
  const data = categories.map((c) => ({ value: c.id, label: c.name }));
  console.log(data);
  return (
    <FilterCarousel
      data={data}
      value={categoryId}
      isLoading={false}
      onSelect={onSelect}
    ></FilterCarousel>
  );
};
