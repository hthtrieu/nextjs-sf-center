import React, { useEffect, useState } from "react";
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEventListener } from "@/hooks/user-event-listener";
import { Constants } from "@/lib/constant";
import { useTrans } from "@/hooks/useTrans";

export const Header = ({ className }: { className?: string }) => {
  const { t } = useTrans();

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [scrolling, setScrolling] = useState(false);
  useEventListener("scroll", () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  });

  useEffect(() => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  }, []);
  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-[100] border-none transition-all",
        {
          "bg-transparent": isHomePage && !scrolling,
          "bg-white/80 shadow backdrop-blur supports-[backdrop-filter]:bg-white/75":
            !isHomePage || scrolling,
          "bg-header-dark  supports-[backdrop-filter]:bg-header-dark":
            isHomePage && scrolling,
        },
        className
      )}
    >
      <header className="relative flex h-full flex-col justify-end py-2">
        <MaxWidthWrapper>
          <div className="flex h-[57px] items-center">
            <div className="flex flex-col justify-between gap-y-1.5">
              <Link href="/">Logo</Link>
              <span className="text-xs">{"description"}</span>
            </div>

            <div className="ml-auto hidden h-full items-center lg:flex">
              <div className="flex items-center gap-x-2 md:gap-x-4 lg:gap-x-6 xl:gap-x-8">
                <ul className="flex items-center gap-x-2 md:gap-x-4 lg:gap-x-6 xl:gap-x-8">
                  {Constants.HEADER_URLS.map(
                    (item: { label: string; href: string }, index) => (
                      <li key={index}>
                        <Link
                          href={item?.href}
                          className={cn(
                            "text-[15px] underline-offset-4 hover:underline",
                            {
                              "text-dark-1": !isHomePage,
                              "font-medium text-primary":
                                pathname === item.href,
                            }
                          )}
                        >
                          {t(item.label)}
                        </Link>
                      </li>
                    )
                  )}
                </ul>

                <div className="max-[1441px]:block min-[1441px]:hidden">
                  <div>Lang</div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};
