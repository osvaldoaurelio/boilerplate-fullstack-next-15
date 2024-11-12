import { NextThemeProvider } from "@/components/themes";
import { Toaster } from "@/components/ui";
import { geistMono, geistSans } from "@/constants/fonts";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import type { LayoutProps as RootLayoutProps } from "@/types/pages";
import "@/styles/globals.css";

export default async function RootLayout({ children }: RootLayoutProps) {
  const [locale, messages] = await Promise.all([getLocale(), getMessages()]);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex-col-center`}>
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
