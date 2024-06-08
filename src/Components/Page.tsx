import { ReactNode } from "react";

function Page({
  children,
  center,
  tailWindClass,
}: {
  children: ReactNode;
  center?: boolean;
  tailWindClass?: string;
}) {
  return (
    <div
      className={`container mx-auto h-full flex-col ${
        center ? "flex justify-center" : ""
      } ${tailWindClass}`}
    >
      {children}
    </div>
  );
}

export default Page;
