'use server';

import {Locale, defaultLocale} from '@/i18n/config';

import {cookies} from 'next/headers';

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = 'APP_LOCALE';

export async function getUserLocale() {
  return (await cookies()).get(COOKIE_NAME)?.value || defaultLocale;
}

export async function setUserLocale(locale: Locale) {
  (await cookies()).set({
    name: COOKIE_NAME,
    value: locale,
    maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
    path: '/', // Make cookie available across the entire site
  });
}