import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";

import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { cn, isFunction } from "../../lib/utils";
const DrawerCommon = React.memo(
  ({
    open,
    closeMenu,
    children,
    className,
    position = "right",
    closeDrawer,
    isShowHeaderClose = false,
  }: {
    open: boolean;
    closeMenu?: () => void;
    children: React.ReactNode;
    className?: string;
    position?: "right" | "left";
    closeDrawer?: () => void;
    isShowHeaderClose?: boolean;
  }) => {
    const drawerNavigation = useRef(null);

    useOnClickOutside([drawerNavigation], () => {
      isFunction(closeMenu) && closeMenu();
    });

    useEffect(() => {
      if (open) {
        document.body.classList.remove("overflow-y-auto");
        document.body.classList.add("overflow-y-hidden");
      } else {
        document.body.classList.remove("overflow-y-hidden");
        document.body.classList.add("overflow-y-auto");
      }
    }, [open]);

    return (
      <>
        <div
          ref={drawerNavigation}
          id="drawer-navigation"
          className={cn(
            "fixed z-[100] h-screen w-[323px] overflow-y-auto bg-white transition-transform dark:bg-gray-800",
            {
              "translate-x-full": !open && position == "right",
              "-translate-x-full": !open && position == "left",
            },
            "shadow-[4px_0px_20px_rgba(47,50,125,0.1)]",
            className,
            {
              "right-0 top-0 ": position == "right",
              "left-0 top-0 ": position == "left",
            }
          )}
        >
          {isShowHeaderClose && (
            <div className="flex cursor-pointer justify-end p-[10px]">
              <X onClick={closeDrawer && closeDrawer} className={"h-8 w-8"} />
            </div>
          )}
          {children}
        </div>
        <div
          className={cn("fixed bottom-0 left-0 right-0 top-0 z-[9] h-full", {
            hidden: !open,
          })}
        ></div>
      </>
    );
  }
);

DrawerCommon.displayName = "DrawerCommon";

export default DrawerCommon;
