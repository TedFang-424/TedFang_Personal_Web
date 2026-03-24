import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-accent text-white shadow-[0_18px_40px_-24px_rgba(200,93,134,0.6)] hover:bg-accent-strong",
  secondary:
    "border border-line bg-white text-foreground hover:border-accent/40 hover:bg-soft",
  ghost: "text-foreground hover:bg-soft",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium tracking-tight transition-all duration-200 ${variants[variant]}`}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}
