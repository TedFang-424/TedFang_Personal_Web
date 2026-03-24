import { TagPill } from "@/components/tag-pill";
import type { Locale } from "@/content/i18n";
import type { Project } from "@/content/portfolio";
import { getPortfolioContent } from "@/content/site-content";

type ProjectTemplateProps = {
  project: Project;
  locale?: Locale;
};

function SectionBlock({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) {
  return (
    <section className="grid gap-5 border-t border-line py-8 lg:grid-cols-[200px_minmax(0,1fr)]">
      <h2 className="text-lg font-semibold tracking-tight text-foreground">{title}</h2>
      <div className="space-y-4 text-base leading-8 text-muted">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

export function ProjectTemplate({ project, locale = "en" }: ProjectTemplateProps) {
  const { ui } = getPortfolioContent(locale);

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-20 lg:px-8 lg:py-24">
      <div className="rounded-[2.4rem] border border-line bg-white p-8 shadow-[0_30px_90px_-70px_rgba(200,93,134,0.45)] sm:p-12">
        <div className="space-y-8">
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="font-medium text-accent">{project.category}</span>
              {project.status ? <TagPill>{project.status}</TagPill> : null}
            </div>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {project.title}
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-muted">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <TagPill key={tech}>{tech}</TagPill>
              ))}
            </div>
          </div>

          <section className="grid gap-4 rounded-[1.8rem] bg-soft p-6 lg:grid-cols-3">
            <div>
              <p className="text-sm text-muted">{ui.labels.role}</p>
              <p className="mt-2 text-base font-medium text-foreground">{project.role}</p>
            </div>
            <div>
              <p className="text-sm text-muted">{ui.labels.focus}</p>
              <p className="mt-2 text-base font-medium text-foreground">
                {project.tags.join(" · ")}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted">{ui.labels.status}</p>
              <p className="mt-2 text-base font-medium text-foreground">
                {project.status ?? ui.labels.completed}
              </p>
            </div>
          </section>

          <SectionBlock title={locale === "zh" ? "概述" : "Overview"} paragraphs={[project.overview]} />
          <SectionBlock title={locale === "zh" ? "问题背景" : "Problem / Context"} paragraphs={project.context} />
          <SectionBlock title={locale === "zh" ? "我构建了什么" : "What I Built"} paragraphs={project.built} />
          <SectionBlock
            title={locale === "zh" ? "技术栈" : "Technologies"}
            paragraphs={[project.technologies.join(", ")]}
          />
          <SectionBlock
            title={locale === "zh" ? "关键工程决策" : "Key Engineering Decisions"}
            paragraphs={project.decisions}
          />
          <SectionBlock title={locale === "zh" ? "结果 / 意义" : "Outcome / Significance"} paragraphs={project.outcome} />
          {project.futureWork ? (
            <SectionBlock title={locale === "zh" ? "后续工作" : "Future Work"} paragraphs={project.futureWork} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
