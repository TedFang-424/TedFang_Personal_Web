"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import {
  getLocaleFromPathname,
  switchLocalePath,
  withLocalePath,
} from "@/content/i18n";
import { getPortfolioContent } from "@/content/site-content";

export function Navbar() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const { navItems, site, ui } = getPortfolioContent(locale);

  return (
    <header className="sticky top-0 z-40 border-b border-transparent bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link
          href={withLocalePath("/", locale)}
          className="text-sm font-semibold tracking-[0.08em] text-foreground"
        >
          DAZHENG TED FANG
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active =
              withLocalePath(item.href, locale) === pathname
                ? true
                : pathname.startsWith(withLocalePath(item.href, locale)) &&
                  item.href !== "/";

            return (
              <Link
                key={item.href}
                href={withLocalePath(item.href, locale)}
                className={`rounded-full px-3 py-2 text-sm transition-colors ${
                  active
                    ? "bg-soft text-foreground"
                    : "text-muted hover:bg-soft hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={switchLocalePath(pathname, locale === "en" ? "zh" : "en")}
            className="rounded-full border border-line px-3 py-2 text-sm text-muted hover:text-foreground"
          >
            {locale === "en" ? ui.language.chinese : ui.language.english}
          </Link>
          <ButtonLink href={site.resumePdfHref} variant="secondary">
            {ui.nav.resumePdf}
          </ButtonLink>
        </div>
      </div>
      <div className="border-t border-line/70 px-4 py-2 md:hidden">
        <nav className="mx-auto flex max-w-6xl gap-2 overflow-x-auto pb-1">
          {navItems.map((item) => {
            const active =
              withLocalePath(item.href, locale) === pathname
                ? true
                : pathname.startsWith(withLocalePath(item.href, locale)) &&
                  item.href !== "/";

            return (
              <Link
                key={item.href}
                href={withLocalePath(item.href, locale)}
                className={`shrink-0 rounded-full px-3 py-2 text-sm transition-colors ${
                  active
                    ? "bg-soft text-foreground"
                    : "text-muted hover:bg-soft hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={switchLocalePath(pathname, locale === "en" ? "zh" : "en")}
            className="shrink-0 rounded-full border border-line px-3 py-2 text-sm text-muted hover:text-foreground"
          >
            {locale === "en" ? ui.language.chinese : ui.language.english}
          </Link>
        </nav>
      </div>
    </header>
  );
}
