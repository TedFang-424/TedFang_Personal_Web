import type { MetadataRoute } from "next";
import { projects, siteUrl } from "@/content/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) {
    return [];
  }

  const staticRoutes = [
    "",
    "/projects",
    "/resume",
    "/research",
    "/ask-my-work",
    "/contact",
    "/zh",
    "/zh/projects",
    "/zh/resume",
    "/zh/research",
    "/zh/ask-my-work",
    "/zh/contact",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
    })),
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified: new Date(),
    })),
    ...projects.map((project) => ({
      url: `${siteUrl}/zh/projects/${project.slug}`,
      lastModified: new Date(),
    })),
  ];
}
