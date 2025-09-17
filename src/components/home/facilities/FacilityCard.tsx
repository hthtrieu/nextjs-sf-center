import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from "react";
import { motion } from "framer-motion";

export const FacilityCard = ({ facility }: { facility: any }) => {
  return (
    <div>
      <Card className="group p-0 overflow-hidden">
        <CardContent className="flex aspect-2/1 max-h-[720px] items-center justify-center p-0 relative">
          <img
            src={facility.image}
            alt={facility.name}
            className="h-full w-full object-cover"
          />
        </CardContent>
      </Card>
    </div>
  );
};
