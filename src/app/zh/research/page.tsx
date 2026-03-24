import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { PageIntro } from "@/components/page-intro";
import { getPortfolioContent } from "@/content/site-content";

export const metadata: Metadata = {
  title: "研究",
  description: "方大政的论文、奖项与技术认可。",
};

export default function ResearchZhPage() {
  const { research, ui } = getPortfolioContent("zh");
  const [treadmillPublication, vanderbiltPublication] = research.publications;

  return (
    <div className="pb-20">
      <PageIntro
        eyebrow={ui.pageIntros.research.eyebrow}
        title={ui.pageIntros.research.title}
        description={ui.pageIntros.research.description}
      />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 lg:px-8">
        <FadeIn>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-[2rem] border border-line bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
                {ui.labels.publication}
              </p>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
                {treadmillPublication.title}
              </h2>
              <p className="mt-3 text-base text-muted">
                {treadmillPublication.venue}, {treadmillPublication.year}
              </p>
              <p className="mt-4 text-base leading-8 text-muted">
                {treadmillPublication.summary}
              </p>
              <a href={treadmillPublication.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-medium text-accent hover:text-accent-strong">
                {ui.buttons.viewPublication}
              </a>
            </article>

            <section className="rounded-[2rem] border border-line bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
                {ui.labels.awards}
              </p>
              <div className="mt-5 space-y-4">
                {research.awards.map((award) => (
                  <div key={award} className="rounded-2xl bg-soft px-4 py-4">
                    <p className="text-base leading-7 text-foreground">{award}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-base leading-8 text-muted">
                这组奖项和认可与跑步机及沉浸式交互方向紧密相关，体现了我在具身接口与系统工程结合上的研究实践。
              </p>
            </section>
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <article className="rounded-[2rem] border border-line bg-white p-6 lg:max-w-[58rem]">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
              {ui.labels.publication}
            </p>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
              {vanderbiltPublication.title}
            </h2>
            <p className="mt-3 text-base text-muted">
              {vanderbiltPublication.venue}, {vanderbiltPublication.year}
            </p>
            <p className="mt-4 text-base leading-8 text-muted">
              {vanderbiltPublication.summary}
            </p>
            <a href={vanderbiltPublication.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-medium text-accent hover:text-accent-strong">
              {ui.buttons.viewPublication}
            </a>
          </article>
        </FadeIn>
      </div>
    </div>
  );
}
