"use client";

import ReactWrapperBalancer from "react-wrap-balancer";

import { useTrans } from "@/hooks/useTrans";
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { RegisterCourseButton } from "../layouts/default/header/RegisterCourseButton";

export const Hero = ({ data }: { data: any }) => {
  const { t } = useTrans();

  return (
    <section
      className={`bg-base absolute z-40 h-screen max-h-[745px] bg-cover w-full bg-center ${
        !data?.homeBanner ? "bg-home-hero" : ""
      }`}
      style={{ backgroundImage: `url(${data?.homeBanner})` }}
    >
      <div className="h-full pt-[var(--header-height)]">
        <MaxWidthWrapper className="h-full max-w-screen-2xl">
          <div className="grid h-full grid-cols-1 md:grid-rows-12">
            {/* <div
              className={cn(
                "bg-base relative z-0 md:col-span-4",
                "max-lg:hidden"
              )}
            ></div> */}
            <div
              className={cn(
                "md:row-span-4 md:row-start-4",
                "max-lg:!col-span-1"
              )}
            >
              <div className="flex h-full flex-col justify-center gap-y-12">
                <div className="text-white">
                  <p
                    className={cn(
                      "text-[32px] font-semibold  text-shadow-[2px_2px_0_rgba(0,0,0,0.6)]",
                      "max-lg:text-center",
                      "max-md:text-[28px]"
                    )}
                  >
                    <ReactWrapperBalancer>
                      {t("home.hero.slogan")}
                    </ReactWrapperBalancer>
                  </p>
                  <p
                    className={cn(
                      "text-2xl font-normal text-shadow-[2px_2px_0_rgba(0,0,0,0.6)] ",
                      "max-lg:text-center"
                    )}
                  >
                    <ReactWrapperBalancer>
                      {t("home.hero.slogan_en")}
                    </ReactWrapperBalancer>
                  </p>
                </div>
                <RegisterCourseButton />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};
