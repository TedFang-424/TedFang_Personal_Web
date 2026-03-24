import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { FadeIn } from "@/components/fade-in";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Dazheng Ted Fang about robotics, applied AI, systems engineering, and product-building opportunities.",
};

export default function ContactPage() {
  return (
    <div className="pb-20">
      <PageIntro
        eyebrow="Contact"
        title="Open to thoughtful conversations and strong technical collaboration"
        description="I&apos;m always happy to connect about robotics, applied AI, systems engineering, and product-building opportunities."
      />
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <FadeIn>
          <section className="rounded-[2rem] border border-line bg-white p-6">
            <p className="text-lg leading-8 text-muted">
              If you&apos;re working on embodied systems, high-leverage software,
              or practical AI products, I&apos;d be glad to talk.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`mailto:${site.email}`}>Email Me</ButtonLink>
              <ButtonLink href={site.resumePdfHref} variant="secondary">
                Resume PDF
              </ButtonLink>
            </div>
          </section>
        </FadeIn>
        <FadeIn delay={0.08}>
          <section className="rounded-[2rem] border border-line bg-white p-6">
            <div className="space-y-5 text-base leading-7 text-muted">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
                  Email
                </p>
                <Link href={`mailto:${site.email}`} className="mt-2 block text-foreground">
                  {site.email}
                </Link>
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
                  GitHub
                </p>
                <Link href={site.github} target="_blank" rel="noreferrer" className="mt-2 block text-foreground">
                  {site.github}
                </Link>
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
                  LinkedIn
                </p>
                <Link href={site.linkedin} target="_blank" rel="noreferrer" className="mt-2 block text-foreground">
                  {site.linkedin}
                </Link>
              </div>
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
