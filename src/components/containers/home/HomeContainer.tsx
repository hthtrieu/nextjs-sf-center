import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { Hero } from "@/components/hero/Hero";
import { HeroCarousel } from "@/components/hero/HeroCarousel";
import { CourseList } from "@/components/home/courses/CourseList";
import { FacilityCarousel } from "@/components/home/facilities/FacilityCarousel";
import { StudentCarousel } from "@/components/home/top-students/StudentCarousel";
import React from "react";

export const HomeContainer = () => {
  return (
    <>
      <HeroCarousel />
      <MaxWidthWrapper>
        <div className="my-8">
          <CourseList />
        </div>
        <div className="my-8">
          <StudentCarousel />
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="max-w-full">
        <div className="my-8 mx-4">
          <FacilityCarousel />
        </div>
      </MaxWidthWrapper>
    </>
  );
};
