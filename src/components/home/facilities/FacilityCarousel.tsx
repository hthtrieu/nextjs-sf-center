"use client";
import { useTrans } from "@/hooks/useTrans";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FacilityCard } from "./FacilityCard";
import { motion } from "framer-motion";

export const FacilityCarousel = () => {
  const { t } = useTrans();
  return (
    <motion.div
      key={"top_students.title"}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ delay: 0.5 }}
      // transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex flex-col gap-4 md:gap-8">
        <Carousel
          opts={{
            align: "center",
            slidesToScroll: 1,
            loop: true,
            duration: 100,
            active: true,
          }}
          // plugins={[
          //   Autoplay({
          //     delay: 2500, // Set the autoplay delay in milliseconds (e.g., 2000ms = 2 seconds)
          //   }),
          // ]}
          className="w-full"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                <div className="p-2">
                  <FacilityCard
                    facility={{
                      name: "Hai Truong",
                      image: "https://i.pravatar.cc/1080",
                      award: "lorem ipsum",
                    }}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-between">
            <CarouselNext />
            <CarouselPrevious />
          </div>
        </Carousel>
        <h1 className="font-bold text-3xl text-sky-800 text-center">
          {t("facilities.title")}
        </h1>
      </div>
    </motion.div>
  );
};
