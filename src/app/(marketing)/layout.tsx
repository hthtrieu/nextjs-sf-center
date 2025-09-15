"use client";

import { usePathname } from "next/navigation";

import DefaultLayout from "@/components/layouts/default/DefaultLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <DefaultLayout
      className={`${pathname === "/" ? "" : "pt-[var(--header-height)]"}`}
    >
      {children}
    </DefaultLayout>
  );
}
