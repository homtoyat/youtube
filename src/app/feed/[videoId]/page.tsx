import * as React from "react";

interface PageProps {
  params: Promise<{ videoId: string }>;
}
export default async function page({ params }: PageProps) {
  const { videoId } = await params;
  return <div>page {videoId}</div>;
}
