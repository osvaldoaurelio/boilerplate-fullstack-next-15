import { NextThemeProvider } from "@/components/themes";
import { Toaster } from "@/components/ui";
import { geistMono, geistSans } from "@/constants/fonts";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from "next-intl/server";

import type { LayoutProps as RootLayoutProps } from "@/types/pages";
import type { Metadata } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "BoilerPlate FullStack Next 15",
  description: "A scalable template for building high-performance web applications with Next.js 15.",
  icons: { icon: "/favicon.svg", other: { url: "/favicon.ico" } },
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const [locale, messages] = await Promise.all([getLocale(), getMessages()]);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <NextThemeProvider>
            {children}
            <Toaster />
          </NextThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
