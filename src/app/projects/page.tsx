import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { PageIntro } from "@/components/page-intro";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects from Dazheng Ted Fang across robotics, production software, and applied AI.",
};

const groupedProjects = {
  "Robotics / XR": projects.filter((project) =>
    ["hex-core", "ros-teleoperation"].includes(project.slug),
  ),
  "Production Software": projects.filter((project) => project.slug === "ted-tech"),
  "Applied AI": projects.filter(
    (project) => project.slug === "engineering-knowledge-assistant",
  ),
};

export default function ProjectsPage() {
  return (
    <div className="pb-20">
      <PageIntro
        eyebrow="Projects"
        title="Systems-oriented work across robotics, software, and applied AI"
        description="A curated project archive focused on real systems, production constraints, and technically grounded product thinking."
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
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </section>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
