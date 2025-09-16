import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const extractPathname = (href: string) => {
  if (!href) {
    return "";
  }
  return href.split("?")[0];
};

export const checkMenuActive = (
  currentPathname: string,
  menuItem: { href?: string }
) => {
  if (!menuItem?.href) {
    return false;
  }
  return matchPattern(currentPathname, extractPathname(menuItem?.href));
};

export const matchPattern = (link: string, pattern: string) => {
  if (link == pattern) {
    return true;
  }

  const regexPattern = pattern.replace(/:[^/]+/g, "([^/]+)") + "$";
  const regex = new RegExp(regexPattern);
  const match = link.match(regex);

  if (match && match[1]) {
    return true;
  } else {
    return false;
  }
};
