import type { MetadataRoute } from "next";

const BASE_URL = "https://braceworks.net";

const routes = [
  "",
  "/about",
  "/services/cloud-security-posture-assessment",
  "/services/generative-ai-security",
  "/services/cloud-security-governance",
  "/methodology",
  "/insights",
  "/insights/five-principles-for-securing-cloud-and-ai-environments",
  "/insights/securing-agentic-ai-adoption",
  "/insights/defense-in-depth-for-llm-applications",
  "/resources",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
