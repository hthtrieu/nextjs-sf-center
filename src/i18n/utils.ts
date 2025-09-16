import { cookies } from "next/headers";

import { fallbackLng, languageCookie } from "@/i18n/i18nConfig";

export const getLocale = async () => {
  return (await cookies()).get(languageCookie)?.value ?? fallbackLng;
};
