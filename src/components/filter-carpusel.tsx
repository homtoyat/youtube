"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";

interface FilterCarpuselProps {
  value?: string | null;
  isLoading?: boolean;
  onSelect: (value: string | null) => void;
  data: {
    value: string;
    label: string;
  }[];
}
export const FilterCarousel = ({
  value,
  isLoading,
  onSelect,
  data,
}: FilterCarpuselProps) => {
  const [api, setAPi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className="relative w-full">
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 left-12 top-0 z-10 w-12 bg-gradient-to-r from-white to-transparent",
          current === 1 && "hidden",
        )}
      ></div>
      <Carousel
        opts={{ align: "start", dragFree: true }}
        setApi={setAPi}
        className="w-full px-12"
      >
        <CarouselContent className="-ml-3">
          {!isLoading && (
            <CarouselItem
              className="basis-auto pl-3"
              onClick={() => onSelect?.(null)}
            >
              <Badge
                variant={!value ? "default" : "secondary"}
                className="cursor-pointer whitespace-nowrap rounded-lg px-3 py-1 text-sm"
              >
                All
              </Badge>
            </CarouselItem>
          )}
          {isLoading &&
            Array.from({ length: 14 }).map((_, index) => (
              <CarouselItem key={index} className="basis-auto pl-3">
                <Skeleton className="h-full w-[100px] rounded-lg px-3 py-1 text-sm font-semibold">
                  &nbsp;
                </Skeleton>
                {index}
              </CarouselItem>
            ))}
          {!isLoading &&
            data.map((item) => (
              <CarouselItem
                key={item.value}
                className="basis-auto pl-3"
                onClick={() => {
                  onSelect?.(item.value);
                }}
              >
                <Badge
                  variant={value === item.value ? "default" : "secondary"}
                  className="cursor-pointer whitespace-nowrap rounded-lg px-3 py-1 text-sm"
                >
                  {item.label}
                </Badge>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 z-20"></CarouselPrevious>
        <CarouselNext className="right-0 z-20"></CarouselNext>
      </Carousel>
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 right-12 top-0 z-10 w-32 bg-gradient-to-l from-white to-transparent",
          current === count && "hidden",
        )}
      ></div>
    </div>
  );
};
