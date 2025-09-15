import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export const MaxWidthWrapper = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-10",
        className
      )}
    >
      {children}
    </div>
  );
};
