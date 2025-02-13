import { trpc } from "@/trpc/server";
import React from "react";

export default async function page() {
  const data = await trpc.hello({ text: " homto" });
  return <div> client components says: {data.greeting} </div>;
}
