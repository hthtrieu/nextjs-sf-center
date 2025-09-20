"use client";
import React from "react";
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { useTrans } from "@/hooks/useTrans";
import ActivityCard from "./ActivityCard";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const ActivityGallery = () => {
  const { t } = useTrans();
  return (
    <div className="bg-gradient-to-tl bg-yellow-400 w-full h-fit py-4 md:py-16">
      <MaxWidthWrapper>
        <div>
          <h1 className="font-bold text-xl md:text-4xl text-sky-800 mb-4 md:mb-8 text-center">
            {t("activities.title")}
          </h1>
        </div>
        <div className="flex gap-2 md:gap-4 flex-wrap justify-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5, once: true }}
              variants={fadeUp}
              transition={{ delay: index * 0.3 }}
              className="w-2/5 md:w-1/4"
            >
              <ActivityCard
                activity={{
                  name: "Hai Truong",
                  image: "https://i.pravatar.cc/300",
                }}
              />
            </motion.div>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
