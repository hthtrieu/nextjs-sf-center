import { useEffect } from "react";

export const useOnClickOutside = (refs: any[], handler: any) => {
  useEffect(() => {
    const handleClick = (e: any) => {
      if (
        typeof refs == "object" &&
        refs?.every((ref) => !ref.current?.contains(e.target))
      ) {
        handler();
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [refs, handler]);
};
