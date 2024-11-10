export const locales = ['en-US', 'es-MX', 'pt-BR'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en-US';
