import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { ChatPlaceholder } from "@/components/chat-placeholder";
import { ExperienceCard } from "@/components/experience-card";
import { FadeIn } from "@/components/fade-in";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { TagPill } from "@/components/tag-pill";
import { getPortfolioContent } from "@/content/site-content";
import profileImage from "../../../me.png";

export default function HomeZhPage() {
  const {
    assistantQuestions,
    experience,
    featuredProjects,
    heroStats,
    research,
    site,
    ui,
    workingPrinciples,
  } = getPortfolioContent("zh");
  const [treadmillPublication, vanderbiltPublication] = research.publications;

  return (
    <div className="adaptive-home home-snap-shell relative pb-20">
      <div className="home-snap-indicator pointer-events-none fixed right-6 bottom-6 z-20 rounded-full border border-line bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.22em] text-muted shadow-[0_20px_40px_-30px_rgba(200,93,134,0.35)]">
        {ui.labels.scroll}
      </div>
      <section className="adaptive-panel home-snap-panel mx-auto flex w-full max-w-6xl items-start px-6 py-10 lg:px-8">
        <div className="adaptive-stack w-full space-y-8">
          <div className="adaptive-main-grid grid gap-8 lg:grid-cols-[minmax(0,1.02fr)_23rem] lg:gap-12">
            <FadeIn className="adaptive-stack space-y-7">
              <div className="adaptive-stack space-y-5">
                <div className="space-y-3">
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
                    机器人、实时系统、应用型 AI
                  </p>
                  <div className="space-y-2">
                    <p className="adaptive-name text-balance text-3xl font-semibold tracking-tight text-accent-strong sm:text-4xl lg:text-[2.95rem]">
                      方大政
                    </p>
                    <span className="block h-px w-24 bg-line" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h1 className="adaptive-title text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-[4.25rem] lg:leading-[1.01]">
                    {site.title}
                  </h1>
                  <p className="adaptive-body max-w-2xl text-pretty text-lg leading-7 text-muted">
                    {site.intro}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  <TagPill>机器人</TagPill>
                  <TagPill>实时系统</TagPill>
                  <TagPill>应用型 AI</TagPill>
                  <TagPill>生产软件</TagPill>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/zh/projects">{ui.buttons.viewProjects}</ButtonLink>
                <ButtonLink href="/zh/resume" variant="secondary">
                  {ui.buttons.resume}
                </ButtonLink>
              </div>
              <div className="adaptive-dense-grid adaptive-tight-pt grid gap-4 border-t border-line pt-6 sm:grid-cols-2 xl:grid-cols-4">
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
              <div className="adaptive-stack space-y-5">
                <div className="grid gap-5 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] md:items-start lg:grid-cols-1">
                  <div className="mx-auto w-full max-w-[16rem] md:mx-0 md:max-w-none">
                    <div className="overflow-hidden rounded-[2rem] border border-line bg-soft shadow-[0_35px_90px_-70px_rgba(200,93,134,0.55)]">
                      <Image
                        src={profileImage}
                        alt="方大政的头像"
                        className="aspect-square w-full object-cover object-center"
                        priority
                      />
                    </div>
                  </div>
                  <div className="adaptive-stack space-y-5">
                    <div className="adaptive-card rounded-[2.2rem] border border-line bg-white p-5 shadow-[0_35px_90px_-70px_rgba(200,93,134,0.55)]">
                      <div className="adaptive-card-sm rounded-[1.5rem] border border-line bg-soft p-4.5">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
                            {ui.labels.focusBlock}
                          </p>
                          <span className="rounded-full border border-line bg-white px-3 py-1 text-xs text-muted">
                            跨学科
                          </span>
                        </div>
                        <div className="adaptive-dense-grid mt-4 flex flex-wrap gap-2.5">
                          {["机器人", "实时系统", "应用型 AI", "生产软件", "ROS2", "全栈"].map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-line bg-white px-3 py-2 text-sm font-medium text-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="adaptive-card-sm adaptive-tight-mt mt-5 rounded-[1.5rem] bg-tint p-4.5">
                        <p className="text-sm text-muted">{ui.labels.coreApproach}</p>
                        <p className="mt-2 text-lg font-medium leading-8 text-foreground">
                          系统思维、产品判断，以及端到端执行。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="adaptive-card rounded-[2.2rem] border border-line bg-white p-5 shadow-[0_35px_90px_-70px_rgba(200,93,134,0.55)]">
                  <div className="adaptive-card-sm rounded-[1.5rem] border border-line bg-white p-4.5">
                    <p className="text-sm text-muted">{ui.labels.optimizeFor}</p>
                    <div className="adaptive-tight-mt mt-3.5 space-y-2.5">
                      {workingPrinciples.map((principle) => (
                        <div key={principle} className="flex gap-3 text-sm leading-6 text-foreground">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                          <span>{principle}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="adaptive-card grid gap-6 rounded-[2.2rem] border border-line bg-soft px-6 py-7 sm:px-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
            <SectionHeader
              eyebrow="关于我"
              title="我喜欢做那些必须在真实世界里可靠运行的完整系统。"
              description="我的工作位于软件、具身交互与应用型 AI 的交叉点。我在意执行质量、技术深度、体验清晰度，以及如何把有挑战性的系统做得真正可用。"
            />
            <div className="adaptive-card-sm rounded-[1.5rem] border border-line bg-white p-5">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
                {ui.labels.throughLine}
              </p>
              <p className="mt-3 text-base leading-7 text-muted">
                从沉浸式运动平台，到业务运营软件，再到知识助手，这些工作的共同主线都是把技术深度转化为真正可用的系统。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="adaptive-panel home-snap-panel mx-auto flex w-full max-w-6xl items-center px-6 py-12 lg:px-8">
        <div className="w-full">
          <FadeIn>
            <SectionHeader
              eyebrow="代表项目"
              title="精选项目"
              description="几项最能代表我如何在机器人、生产系统与 AI 产品工程之间展开工作的项目。"
            />
          </FadeIn>
          <div className="adaptive-dense-grid mt-8 grid gap-5 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <FadeIn key={project.slug} delay={index * 0.06}>
                <ProjectCard project={project} locale="zh" />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="adaptive-panel home-snap-panel mx-auto flex w-full max-w-6xl items-center px-6 py-12 lg:px-8">
        <div className="w-full">
          <FadeIn>
            <SectionHeader
              eyebrow="经历"
              title="这些工作的角色与背景"
              description="我更偏好那些同时要求技术深度、产品思维与执行责任感的工作。"
            />
          </FadeIn>
          <div className="adaptive-dense-grid mt-8 grid gap-5">
            {experience.map((item, index) => (
              <FadeIn key={item.company} delay={index * 0.05}>
                <ExperienceCard {...item} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="adaptive-panel home-snap-panel mx-auto flex w-full max-w-6xl items-center px-6 py-12 lg:px-8">
        <div className="w-full">
          <FadeIn>
            <SectionHeader
              eyebrow="研究与认可"
              title="技术上的积累与认可，保持简洁但清楚"
              description="这些论文与奖项反映了我对实时交互、机器人系统与技术驱动工程实践的持续兴趣。"
            />
          </FadeIn>
          <div className="adaptive-dense-grid mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <FadeIn>
              <article className="adaptive-card rounded-[2rem] border border-line bg-white p-6">
                <p className="text-sm font-medium text-accent">{ui.labels.publication}</p>
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
              <article className="adaptive-card rounded-[2rem] border border-line bg-white p-6">
                <p className="text-sm font-medium text-accent">{ui.labels.awards}</p>
                <div className="mt-4 space-y-4">
                  {research.awards.map((award) => (
                    <div key={award} className="adaptive-card-sm rounded-2xl bg-soft px-4 py-4">
                      <p className="text-base leading-7 text-foreground">{award}</p>
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
          <div className="adaptive-tight-mt mt-6">
            <FadeIn delay={0.12}>
              <article className="adaptive-card rounded-[2rem] border border-line bg-white p-6 lg:max-w-[58rem]">
                <p className="text-sm font-medium text-accent">{ui.labels.publication}</p>
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

      <section className="adaptive-panel home-snap-panel mx-auto flex w-full max-w-6xl items-center px-6 py-12 lg:px-8">
        <div className="w-full">
          <FadeIn>
            <SectionHeader
              eyebrow="问问我的工作"
              title="一个未来可用于理解项目、决策与技术工作的界面"
              description="它会成为这个网站的下一层，帮助访客借助 grounded assistant 更快理解我的项目、工程取舍与长期主线。"
            />
          </FadeIn>
          <div className="mt-8">
            <FadeIn>
              <ChatPlaceholder questions={assistantQuestions} locale="zh" />
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
