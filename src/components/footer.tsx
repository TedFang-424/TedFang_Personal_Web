"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  getLocaleFromPathname,
  withLocalePath,
} from "@/content/i18n";
import { getPortfolioContent } from "@/content/site-content";

export function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const { navItems, site, ui } = getPortfolioContent(locale);

  return (
    <footer className="relative border-t border-line bg-white/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl space-y-2">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
              {ui.footer.eyebrow}
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              {ui.footer.title}
            </h2>
          </div>
          <div className="space-y-2 text-sm text-muted">
            <p>{site.email}</p>
            <div className="flex gap-4">
              <Link href={site.github} target="_blank" rel="noreferrer" className="hover:text-foreground">
                GitHub
              </Link>
              <Link href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">
                LinkedIn
              </Link>
              <Link href={site.resumePdfHref} className="hover:text-foreground">
                {ui.nav.resumePdf}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-line pt-5 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={withLocalePath(item.href, locale)}
                className="hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <p>{site.name}</p>
        </div>
      </div>
    </footer>
  );
}
