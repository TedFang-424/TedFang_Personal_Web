import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { PageIntro } from "@/components/page-intro";
import { ProjectCard } from "@/components/project-card";
import { getPortfolioContent } from "@/content/site-content";

export const metadata: Metadata = {
  title: "项目",
  description: "方大政的项目，覆盖机器人、生产软件与应用型 AI。",
};

export default function ProjectsZhPage() {
  const { projects, ui } = getPortfolioContent("zh");
  const groupedProjects = {
    "机器人 / XR": projects.filter((project) => ["hex-core", "ros-teleoperation"].includes(project.slug)),
    生产软件: projects.filter((project) => project.slug === "ted-tech"),
    "应用型 AI": projects.filter((project) => project.slug === "engineering-knowledge-assistant"),
  };

  return (
    <div className="pb-20">
      <PageIntro
        eyebrow={ui.pageIntros.projects.eyebrow}
        title={ui.pageIntros.projects.title}
        description={ui.pageIntros.projects.description}
      />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 lg:px-8">
        {Object.entries(groupedProjects).map(([group, groupProjects], index) => (
          <FadeIn key={group} delay={index * 0.05}>
            <section className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
                  {group}
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                  {group}
                </h2>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                {groupProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} locale="zh" />
                ))}
              </div>
            </section>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
