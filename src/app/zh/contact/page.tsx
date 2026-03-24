import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { FadeIn } from "@/components/fade-in";
import { PageIntro } from "@/components/page-intro";
import { getPortfolioContent } from "@/content/site-content";

export const metadata: Metadata = {
  title: "联系我",
  description: "联系方大政，交流机器人、应用型 AI、系统工程与产品构建机会。",
};

export default function ContactZhPage() {
  const { site, ui } = getPortfolioContent("zh");

  return (
    <div className="pb-20">
      <PageIntro
        eyebrow={ui.pageIntros.contact.eyebrow}
        title={ui.pageIntros.contact.title}
        description={ui.pageIntros.contact.description}
      />
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <FadeIn>
          <section className="rounded-[2rem] border border-line bg-white p-6">
            <p className="text-lg leading-8 text-muted">
              如果你正在做具身系统、高杠杆软件，或真正落地的 AI 产品，我很愿意交流。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`mailto:${site.email}`}>{ui.buttons.emailMe}</ButtonLink>
              <ButtonLink href={site.resumePdfHref} variant="secondary">
                {ui.nav.resumePdf}
              </ButtonLink>
            </div>
          </section>
        </FadeIn>
        <FadeIn delay={0.08}>
          <section className="rounded-[2rem] border border-line bg-white p-6">
            <div className="space-y-5 text-base leading-7 text-muted">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">Email</p>
                <Link href={`mailto:${site.email}`} className="mt-2 block text-foreground">
                  {site.email}
                </Link>
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">GitHub</p>
                <Link href={site.github} target="_blank" rel="noreferrer" className="mt-2 block text-foreground">
                  {site.github}
                </Link>
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">LinkedIn</p>
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
