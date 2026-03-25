import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { ChatPlaceholder } from "@/components/chat-placeholder";
import { ExperienceCard } from "@/components/experience-card";
import { FadeIn } from "@/components/fade-in";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { TagPill } from "@/components/tag-pill";
import {
  assistantQuestions,
  experience,
  featuredProjects,
  heroStats,
  research,
  site,
  workingPrinciples,
} from "@/content/portfolio";
import profileImage from "../../me.png";

export default function Home() {
  const [treadmillPublication, vanderbiltPublication] = research.publications;

  return (
    <div className="relative pb-20 xl:h-[calc(100dvh-5rem)] xl:snap-y xl:snap-mandatory xl:overflow-y-auto xl:pb-0">
      <div className="pointer-events-none fixed right-6 bottom-6 z-20 hidden rounded-full border border-line bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.22em] text-muted shadow-[0_20px_40px_-30px_rgba(200,93,134,0.35)] xl:block">
        Scroll
      </div>
      <section className="mx-auto flex w-full max-w-6xl items-start px-6 py-10 xl:h-[calc(100dvh-5rem)] xl:snap-start lg:py-14 lg:px-8">
        <div className="w-full space-y-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.02fr)_23rem] lg:gap-12">
            <FadeIn className="space-y-7">
              <div className="space-y-5">
                <div className="space-y-3">
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
                    Robotics, real-time systems, applied AI
                  </p>
                  <div className="space-y-2">
                    <p className="text-balance text-3xl font-semibold tracking-tight text-accent-strong sm:text-4xl lg:text-[2.95rem]">
                      Dazheng Ted Fang
                    </p>
                    <span className="block h-px w-24 bg-line" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h1 className="text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-[4.25rem] lg:leading-[1.01]">
                    {site.title}
                  </h1>
                  <p className="max-w-2xl text-pretty text-lg leading-7 text-muted">
                    {site.intro}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  <TagPill>Robotics</TagPill>
                  <TagPill>Real-Time Systems</TagPill>
                  <TagPill>Applied AI</TagPill>
                  <TagPill>Production Software</TagPill>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/projects">View Projects</ButtonLink>
                <ButtonLink href="/resume" variant="secondary">
                  Resume
                </ButtonLink>
              </div>
              <div className="grid gap-4 border-t border-line pt-6 sm:grid-cols-2 xl:grid-cols-4">
                {heroStats.map((item) => (
                  <div key={item.label} className="space-y-1">
                    <p className="text-2xl font-semibold tracking-tight text-foreground">
                      {item.value}
                    </p>
                    <p className="text-sm leading-6 text-muted">{item.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="rounded-[2.2rem] border border-line bg-white p-5 shadow-[0_35px_90px_-70px_rgba(200,93,134,0.55)]">
                <div className="overflow-hidden rounded-[1.6rem] border border-line bg-soft">
                  <Image
                    src={profileImage}
                    alt="Portrait of Dazheng Ted Fang"
                    className="aspect-square w-full object-cover object-center"
                    priority
                  />
                </div>
                <div className="mt-5 rounded-[1.5rem] border border-line bg-soft p-4.5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
                      Focus
                    </p>
                    <span className="rounded-full border border-line bg-white px-3 py-1 text-xs text-muted">
                      Cross-disciplinary
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {[
                      "Robotics",
                      "Real-Time Systems",
                      "Applied AI",
                      "Production Software",
                      "ROS2",
                      "Full-Stack",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line bg-white px-3 py-2 text-sm font-medium text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-5 rounded-[1.5rem] bg-tint p-4.5">
                  <p className="text-sm text-muted">Core approach</p>
                  <p className="mt-2 text-lg font-medium leading-8 text-foreground">
                    Systems thinking, product sense, and end-to-end execution.
                  </p>
                </div>
                <div className="mt-5 rounded-[1.5rem] border border-line bg-white p-4.5">
                  <p className="text-sm text-muted">What I optimize for</p>
                  <div className="mt-3.5 space-y-2.5">
                    {workingPrinciples.map((principle) => (
                      <div
                        key={principle}
                        className="flex gap-3 text-sm leading-6 text-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{principle}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="grid gap-6 rounded-[2.2rem] border border-line bg-soft px-6 py-7 sm:px-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
            <SectionHeader
              eyebrow="About"
              title="I like building complete systems that have to work in the real world."
              description="My work sits at the intersection of software, embodied interaction, and applied AI. I care about execution, technical depth, clarity of experience, and making ambitious systems usable."
            />
            <div className="rounded-[1.5rem] border border-line bg-white p-5">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
                Through-line
              </p>
              <p className="mt-3 text-base leading-7 text-muted">
                From immersive locomotion platforms to business operations
                software to knowledge assistants, the common thread is building
                systems that are technically deep and genuinely useful.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-6xl items-center px-6 py-12 xl:h-[calc(100dvh-5rem)] xl:snap-start lg:px-8">
        <div className="w-full">
          <FadeIn>
            <SectionHeader
              eyebrow="Selected Work"
              title="Featured projects"
              description="A few projects that best represent how I work across robotics, production systems, and AI-enabled product engineering."
            />
          </FadeIn>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <FadeIn key={project.slug} delay={index * 0.06}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-6xl items-center px-6 py-12 xl:h-[calc(100dvh-5rem)] xl:snap-start lg:px-8">
        <div className="w-full">
          <FadeIn>
            <SectionHeader
              eyebrow="Experience"
              title="A concise view of the roles behind the work"
              description="I enjoy work that combines technical depth, product thinking, and responsibility for execution."
            />
          </FadeIn>
          <div className="mt-8 grid gap-5">
            {experience.map((item, index) => (
              <FadeIn key={item.company} delay={index * 0.05}>
                <ExperienceCard {...item} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-6xl items-center px-6 py-12 xl:h-[calc(100dvh-5rem)] xl:snap-start lg:px-8">
        <div className="w-full">
          <FadeIn>
            <SectionHeader
              eyebrow="Research & Recognition"
              title="Technical credibility, kept intentionally lightweight"
              description="Research and recognition that reflect a deeper interest in real-time interaction, robotics systems, and applied engineering."
            />
          </FadeIn>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <FadeIn>
              <article className="rounded-[2rem] border border-line bg-white p-6">
                <p className="text-sm font-medium text-accent">Publication</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                  {treadmillPublication.title}
                </h3>
                <p className="mt-2 text-base text-muted">
                  {treadmillPublication.venue}, {treadmillPublication.year}
                </p>
                <p className="mt-3 text-base leading-7 text-muted">
                  {treadmillPublication.summary}
                </p>
              </article>
            </FadeIn>
            <FadeIn delay={0.08}>
              <article className="rounded-[2rem] border border-line bg-white p-6">
                <p className="text-sm font-medium text-accent">Awards</p>
                <div className="mt-4 space-y-4">
                  {research.awards.map((award) => (
                    <div key={award} className="rounded-2xl bg-soft px-4 py-4">
                      <p className="text-base leading-7 text-foreground">
                        {award}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {research.recognition.map((item) => (
                    <TagPill key={item}>{item}</TagPill>
                  ))}
                </div>
              </article>
            </FadeIn>
          </div>
          <div className="mt-6">
            <FadeIn delay={0.12}>
              <article className="rounded-[2rem] border border-line bg-white p-6 lg:max-w-[58rem]">
                <p className="text-sm font-medium text-accent">Publication</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                  {vanderbiltPublication.title}
                </h3>
                <p className="mt-2 text-base text-muted">
                  {vanderbiltPublication.venue}, {vanderbiltPublication.year}
                </p>
                <p className="mt-3 text-base leading-7 text-muted">
                  {vanderbiltPublication.summary}
                </p>
              </article>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-6xl items-center px-6 py-12 xl:h-[calc(100dvh-5rem)] xl:snap-start lg:px-8">
        <div className="w-full">
          <FadeIn>
            <SectionHeader
              eyebrow="Ask My Work"
              title="A future interface for exploring projects, decisions, and technical work"
              description="Designed as the next layer of the portfolio: a grounded assistant surface for navigating engineering context instead of only reading static pages."
            />
          </FadeIn>
          <div className="mt-8">
            <FadeIn>
              <ChatPlaceholder questions={assistantQuestions} />
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
