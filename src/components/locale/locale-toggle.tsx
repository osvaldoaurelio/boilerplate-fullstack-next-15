"use client"

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Skeleton,
} from "@/components/ui";
import { FLAG } from "@/constants/locales";
import { locales, type Locale } from "@/i18n/config";
import { getUserLocale, setUserLocale } from "@/server/services/i18n/locale";
import { useTranslations } from "next-intl";
import { useEffect, useState, useTransition } from "react";

export function LocaleToggle() {
  const t = useTranslations('LocaleToggle');

  const [isPending, startTransition] = useTransition();
  const [locale, setLocale] = useState<Locale | ''>('');

  useEffect(() => {
    async function fetchLocale() {
      const userLocale = await getUserLocale();

      setLocale(userLocale);
    }

    fetchLocale();
  }, []);

  function toggleLocale(newLocale: Locale) {
    startTransition(() => {
      setUserLocale(newLocale);
      setLocale(newLocale);
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild aria-busy={isPending} className={isPending ? 'pointer-events-none opacity-60' : ''}>
        <Button variant="outline" size="icon">
          {locale === '' ? <Skeleton className="h-[15] w-[20] rounded-none" /> : FLAG[locale]}
          <span className="sr-only">{t('title')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map(locale => (
          <DropdownMenuItem key={locale} onClick={() => toggleLocale(locale)}>
            {FLAG[locale]}{t(locale)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
