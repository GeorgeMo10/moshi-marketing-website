import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICE_SLUGS } from "@/lib/services";
import { WORKFLOW_SLUGS } from "@/lib/automations";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE.url}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/automations`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/crm`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/how-it-works`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE.url}/results`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...["privacy", "terms"].map((slug) => ({
      url: `${SITE.url}/${slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
    ...WORKFLOW_SLUGS.map((slug) => ({
      url: `${SITE.url}/automations/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...SERVICE_SLUGS.map((slug) => ({
      url: `${SITE.url}/services/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
