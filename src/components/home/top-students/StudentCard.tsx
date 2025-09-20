import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from "react";
import { motion } from "framer-motion";

const StudentCard = ({
  student,
}: {
  student: { name: string; image: string; award: string };
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div>
      <Card
        className="group p-0 overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <CardContent className="flex max-h-[500px] md:h-fit aspect-3/4 items-center justify-center p-0 relative">
          <img
            src={student.image}
            alt={student.name}
            className="h-full w-full object-cover"
          />
          {/* <div className="absolute bottom-0 left-0 right-0 h-1/3 p-4 bg-sky-800/80 text-white hidden group-hover:block transition-all duration-500 ease-in-out">
            <p>{student.award}</p>
          </div> */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={hovered ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 right-0 h-1/3 p-4 bg-sky-800/80 text-white"
          >
            <p>{student.award}</p>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentCard;
