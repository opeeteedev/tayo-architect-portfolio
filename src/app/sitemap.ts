import { MetadataRoute } from "next";
import { portfolioProjects } from "@/data/portfolio";
import { insights } from "@/data/portfolio";

const baseUrl = "https://tayo-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = portfolioProjects.map((project) => ({
    url: `${baseUrl}/work/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const insightUrls = insights.map((insight) => ({
    url: `${baseUrl}/insights/${insight.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectUrls,
    ...insightUrls,
  ];
}