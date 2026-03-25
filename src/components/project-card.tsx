import Link from "next/link";
import type { Locale } from "@/content/i18n";
import { withLocalePath } from "@/content/i18n";
import { TagPill } from "@/components/tag-pill";
import type { Project } from "@/content/portfolio";
import { getPortfolioContent } from "@/content/site-content";

type ProjectCardProps = {
  project: Project;
  locale?: Locale;
};

export function ProjectCard({ project, locale = "en" }: ProjectCardProps) {
  const { ui } = getPortfolioContent(locale);

  return (
    <Link
      href={withLocalePath(`/projects/${project.slug}`, locale)}
      className="adaptive-card group flex h-full flex-col justify-between rounded-[2rem] border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/45 hover:shadow-[0_28px_70px_-45px_rgba(200,93,134,0.45)]"
    >
      <div className="adaptive-stack space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-sm font-medium text-accent">{project.category}</p>
            <h3 className="text-xl font-semibold tracking-tight text-foreground">
              {project.title}
            </h3>
          </div>
          <span className="text-lg text-accent transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
        <p className="text-base leading-7 text-muted">{project.shortSummary}</p>
        <div className="adaptive-card-sm adaptive-dense-grid grid gap-3 rounded-[1.4rem] bg-soft p-4 text-sm text-muted sm:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-accent">{ui.labels.role}</p>
            <p className="mt-2 text-sm text-foreground">{project.role}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-accent">{ui.labels.status}</p>
            <p className="mt-2 text-sm text-foreground">
              {project.status ?? ui.labels.completed}
            </p>
          </div>
          <div className="sm:col-span-2">
            <p className="text-xs uppercase tracking-[0.18em] text-accent">
              {ui.labels.technologies}
            </p>
            <p className="mt-2 text-sm text-foreground">
              {project.technologies.slice(0, 4).join(", ")}
            </p>
          </div>
        </div>
      </div>
      <div className="adaptive-tight-mt mt-8 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <TagPill key={tag}>{tag}</TagPill>
        ))}
      </div>
    </Link>
  );
}
