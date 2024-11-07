import { LocaleToggle } from "@/components/locale";
import { ThemeToggle, NextThemeProvider } from "@/components/themes";
import { Toaster } from "@/components/ui";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from "next-intl/server";
import localFont from "next/font/local";

import type { LayoutProps as RootLayoutProps } from "@/types/pages";
import type { Metadata } from "next";

import "../styles/globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <div className="right-[16px] top-[16px] flex gap-x-2 fixed z-100">
              <LocaleToggle />
              <ThemeToggle />
            </div>
            {children}
            <Toaster />
          </NextIntlClientProvider>
        </NextThemeProvider>
      </body>
    </html>
  );
}
