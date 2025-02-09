import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function layout({ children }: Props) {
  return <div>{children} </div>;
}
