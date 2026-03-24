import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { FadeIn } from "@/components/fade-in";
import { PageIntro } from "@/components/page-intro";
import { TagPill } from "@/components/tag-pill";
import { experience, site, skills } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Web resume for Dazheng Ted Fang, covering engineering experience, skills, and education.",
};

export default function ResumePage() {
  return (
    <div className="pb-20">
      <PageIntro
        eyebrow="Resume"
        title="A web-native summary of my experience and technical focus"
        description="Engineer working across robotics, production software, and applied AI systems, with an emphasis on complete implementation and clear product outcomes."
      />

      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <FadeIn>
          <aside className="space-y-6 rounded-[2rem] border border-line bg-white p-6">
            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
                Profile
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                {site.name}
              </h2>
              <p className="text-base leading-7 text-muted">{site.intro}</p>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-medium text-accent">Education</p>
              {site.education.map((item) => (
                <p key={item} className="text-sm leading-7 text-muted">
                  {item}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={site.resumePdfHref}>Download Resume PDF</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Let&apos;s Connect
              </ButtonLink>
            </div>
          </aside>
        </FadeIn>

        <div className="space-y-8">
          <FadeIn delay={0.05}>
            <section className="rounded-[2rem] border border-line bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
                Experience
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
                    <p className="mt-4 text-base leading-7 text-muted">
                      {item.summary}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className="rounded-[2rem] border border-line bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
                Skills
              </p>
              <div className="mt-5 space-y-6">
                <div>
                  <p className="mb-3 text-sm font-medium text-foreground">Languages</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((item) => (
                      <TagPill key={item}>{item}</TagPill>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-3 text-sm font-medium text-foreground">
                    Robotics / Systems
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skills.robotics.map((item) => (
                      <TagPill key={item}>{item}</TagPill>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-3 text-sm font-medium text-foreground">
                    Software / Backend
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skills.software.map((item) => (
                      <TagPill key={item}>{item}</TagPill>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-3 text-sm font-medium text-foreground">AI</p>
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
