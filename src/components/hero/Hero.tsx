"use client";

import ReactWrapperBalancer from "react-wrap-balancer";

import { useTrans } from "@/hooks/useTrans";
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

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
          <div className="grid h-full grid-cols-1 md:grid-cols-12">
            <div
              className={cn(
                "bg-base relative z-0 md:col-span-4",
                "max-lg:hidden"
              )}
            ></div>
            <div
              className={cn(
                "md:col-span-7 md:col-start-6",
                "max-lg:!col-span-12"
              )}
            >
              <div className="flex h-full flex-col justify-center gap-y-12">
                <div className="text-white">
                  <p
                    className={cn(
                      "text-[32px] font-semibold",
                      "max-lg:text-center",
                      "max-md:text-[28px]"
                    )}
                  >
                    <ReactWrapperBalancer>
                      {t("home.hero.slogan")}
                    </ReactWrapperBalancer>
                  </p>
                  <p
                    className={cn("text-2xl font-normal", "max-lg:text-center")}
                  >
                    <ReactWrapperBalancer>
                      {t("home.hero.slogan_en")}
                    </ReactWrapperBalancer>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};
