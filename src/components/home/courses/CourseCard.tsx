import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useTrans } from "@/hooks/useTrans";

export const CourseCard = ({
  course,
}: {
  course: { name: string; description: string; image: string };
}) => {
  const { t } = useTrans();
  return (
    <Card className="group w-full aspect-3/4 !p-0 overflow-clip gap-0">
      <CardContent className="!p-0 h-10/12 !m-0 relative cursor-pointer">
        <img
          src={course.image}
          alt={course.name}
          className="object-cover h-full w-full"
        />
        <p
          className="
            absolute bottom-0 left-0 p-2 text-white font-semibold text-2xl
            bg-sky-200 rounded-t-lg h-2/12 w-1/2 text-wrap break-after-auto
            transition-colors duration-500 group-hover:scale-110
          "
        >
          {t(course.name)}
        </p>
      </CardContent>

      <CardFooter
        className="
          w-full h-2/12 bg-sky-200
          transition-colors duration-500"
      >
        <p className="font-semibold text-2xl text-white">
          {t(course.description)}
        </p>
      </CardFooter>
    </Card>
  );
};
