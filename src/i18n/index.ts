import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";

import { fallbackLng, languageCookie, languages } from "./i18nConfig";

export const getServerTranslations = async (
  locale: string,
  i18nInstance?: any,
  resources?: any
) => {
  i18nInstance = i18nInstance || createInstance();

  i18nInstance.use(initReactI18next);

  if (!resources) {
    i18nInstance.use(
      resourcesToBackend(
        (lang: string) => import(`./locales/${lang}/translation.json`)
      )
    );
  }

  await i18nInstance.init({
    lng: locale,
    resources,
    fallbackLng: fallbackLng,
    supportedLngs: languages,
    detection: {
      order: ["cookie"],
      lookupCookie: languageCookie,
      caches: ["cookie"],
    },
    preload: resources ? [] : languages,
  });

  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.t,
  };
};
