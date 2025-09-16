"use client";

import { createInstance } from "i18next";
import { I18nextProvider } from "react-i18next";

import { getServerTranslations } from "@/i18n";

const TranslationsProvider = ({
  children,
  locale,
  resources,
}: {
  children: React.ReactNode;
  locale: string;
  resources: any;
}) => {
  const i18n = createInstance();

  getServerTranslations(locale, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default TranslationsProvider;
