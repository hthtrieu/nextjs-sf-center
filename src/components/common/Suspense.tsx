import { Dot } from "lucide-react";
import React from "react";

export const SuspenseMotion = () => {
  return (
    <div className="flex justify-center items-center h-full">
      {/* todo: make supense with framer-motion  */}
      <Dot className="animate-spin" />
    </div>
  );
};
