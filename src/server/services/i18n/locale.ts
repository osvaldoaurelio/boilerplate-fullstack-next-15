'use server';

import { COOKIE_LOCALE } from '@/constants/locales';
import { defaultLocale, type Locale } from '@/i18n/config';
import { cookies } from 'next/headers';

export async function getUserLocale() {
  const cookieStore = await cookies();
  const userLocale = cookieStore.get(COOKIE_LOCALE)?.value || defaultLocale;

  return userLocale as Locale;
}

export async function setUserLocale(locale: Locale) {
  const cookieStore = await cookies();

  cookieStore.set(COOKIE_LOCALE, locale);
};
