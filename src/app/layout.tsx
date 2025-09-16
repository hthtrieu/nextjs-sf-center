import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { getServerTranslations } from "@/i18n";
import { getLocale } from "@/i18n/utils";
import TranslationsProvider from "@/components/providers/TranslationsProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Base Nextjs",
  description: "Base Dev Nextjs",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const { resources } = await getServerTranslations(locale);
  return (
    <>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased relative flex min-h-screen flex-col overflow-x-hidden`}
        >
          {/* <TranslationsProvider locale={locale} resources={resources}> */}
          <TranslationsProvider locale={locale} resources={resources}>
            <Suspense fallback={<>Loading suspense</>}>{children} </Suspense>
          </TranslationsProvider>
          {/* <TranslationsProvider/> */}
        </body>
      </html>
    </>
  );
}
