import React from "react";
import { Card, CardContent } from "@/components/ui/card";
const ActivityCard = ({
  activity,
}: {
  activity: { name: string; image: string };
}) => {
  return (
    <Card className="group p-0 overflow-hidden rounded-2xl w-full">
      <CardContent className="flex w-full h-full items-center justify-center p-0 relative m-0">
        <img
          src={activity.image}
          alt={activity.name}
          className="h-full w-full object-cover aspect-2/1"
        />
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
