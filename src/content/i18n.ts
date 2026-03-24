export type Locale = "en" | "zh";

export const locales: Locale[] = ["en", "zh"];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === "/zh" || pathname.startsWith("/zh/") ? "zh" : "en";
}

export function withLocalePath(path: string, locale: Locale) {
  if (locale === "en") {
    return path;
  }

  return path === "/" ? "/zh" : `/zh${path}`;
}

export function switchLocalePath(pathname: string, locale: Locale) {
  const currentLocale = getLocaleFromPathname(pathname);
  const normalized =
    currentLocale === "zh"
      ? pathname.replace(/^\/zh(?=\/|$)/, "") || "/"
      : pathname || "/";

  return withLocalePath(normalized, locale);
}
