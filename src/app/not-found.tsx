import Link from "next/link";
import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-4xl items-center px-6 py-20 lg:px-8">
      <div className="rounded-[2.4rem] border border-line bg-white p-8 shadow-[0_30px_80px_-60px_rgba(200,93,134,0.45)] sm:p-12">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
          The link may be outdated, or the page may still be in progress. The
          main portfolio sections are available below.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/">Back Home</ButtonLink>
          <ButtonLink href="/projects" variant="secondary">
            View Projects
          </ButtonLink>
        </div>
        <div className="mt-8 flex flex-wrap gap-4 text-sm text-muted">
          <Link href="/resume">Resume</Link>
          <Link href="/research">Research</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
