import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { FadeIn } from "@/components/fade-in";
import { PageIntro } from "@/components/page-intro";
import { TagPill } from "@/components/tag-pill";
import { getPortfolioContent } from "@/content/site-content";

export const metadata: Metadata = {
  title: "简历",
  description: "方大政的网页简历，涵盖经历、技能与教育背景。",
};

export default function ResumeZhPage() {
  const { experience, site, skills, ui } = getPortfolioContent("zh");

  return (
    <div className="pb-20">
      <PageIntro
        eyebrow={ui.pageIntros.resume.eyebrow}
        title={ui.pageIntros.resume.title}
        description={ui.pageIntros.resume.description}
      />

      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <FadeIn>
          <aside className="space-y-6 rounded-[2rem] border border-line bg-white p-6">
            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
                {ui.labels.profile}
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                {site.name}
              </h2>
              <p className="text-base leading-7 text-muted">{site.intro}</p>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-medium text-accent">{ui.labels.education}</p>
              {site.education.map((item) => (
                <p key={item} className="text-sm leading-7 text-muted">
                  {item}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={site.resumePdfHref}>{ui.buttons.downloadResume}</ButtonLink>
              <ButtonLink href="/zh/contact" variant="secondary">
                {ui.buttons.letsConnect}
              </ButtonLink>
            </div>
          </aside>
        </FadeIn>

        <div className="space-y-8">
          <FadeIn delay={0.05}>
            <section className="rounded-[2rem] border border-line bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
                {ui.labels.experience}
              </p>
              <div className="mt-5 space-y-6">
                {experience.map((item) => (
                  <article key={item.company} className="border-t border-line pt-5 first:border-t-0 first:pt-0">
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-foreground">
                          {item.role}
                        </h3>
                        <p className="text-base text-muted">{item.company}</p>
                      </div>
                      <p className="text-sm text-muted">{item.period}</p>
                    </div>
                    <p className="mt-4 text-base leading-7 text-muted">{item.summary}</p>
                  </article>
                ))}
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className="rounded-[2rem] border border-line bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
                {ui.labels.skills}
              </p>
              <div className="mt-5 space-y-6">
                <div>
                  <p className="mb-3 text-sm font-medium text-foreground">{ui.labels.languages}</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((item) => (
                      <TagPill key={item}>{item}</TagPill>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-3 text-sm font-medium text-foreground">{ui.labels.roboticsSystems}</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.robotics.map((item) => (
                      <TagPill key={item}>{item}</TagPill>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-3 text-sm font-medium text-foreground">{ui.labels.softwareBackend}</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.software.map((item) => (
                      <TagPill key={item}>{item}</TagPill>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-3 text-sm font-medium text-foreground">{ui.labels.ai}</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.ai.map((item) => (
                      <TagPill key={item}>{item}</TagPill>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
