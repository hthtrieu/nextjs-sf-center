"use client";

import { useTranslation } from "react-i18next";

export const useTrans = () => {
  const { t, i18n } = useTranslation();

  return { t, trans: t, i18n };
};
