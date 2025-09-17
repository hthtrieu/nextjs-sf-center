import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Hero } from "./Hero";
export const HeroCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="h-screen max-h-[745px]">
        <CarouselItem>
          <Hero
            data={{
              title: "Home",
              description: "Home description",
              homeBanner: "/assets/backgrounds/hero.jpg",
            }}
          />
        </CarouselItem>
        <CarouselItem>
          <Hero
            data={{
              title: "Home",
              description: "Home description",
              homeBanner: "/assets/backgrounds/hero.jpg",
            }}
          />
        </CarouselItem>
        <CarouselItem>
          {" "}
          <Hero
            data={{
              title: "Home",
              description: "Home description",
              homeBanner: "/assets/backgrounds/hero.jpg",
            }}
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
