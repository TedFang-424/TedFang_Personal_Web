import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectTemplate } from "@/components/project-template";
import { getPortfolioContent } from "@/content/site-content";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const { projects } = getPortfolioContent("zh");
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { projects } = getPortfolioContent("zh");
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "项目" };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectZhPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const { projects } = getPortfolioContent("zh");
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectTemplate project={project} locale="zh" />;
}
