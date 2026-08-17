import type { MetadataRoute } from "next";
import { GUIDES, SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: { path: string; changeFrequency: "daily" | "weekly" | "monthly"; priority: number }[] = [
    { path: "", changeFrequency: "daily", priority: 1 },
    { path: "/scans", changeFrequency: "daily", priority: 0.9 },
    { path: "/guides", changeFrequency: "weekly", priority: 0.7 },
    { path: "/glossary", changeFrequency: "monthly", priority: 0.6 },
    { path: "/faq", changeFrequency: "monthly", priority: 0.6 },
    { path: "/about", changeFrequency: "monthly", priority: 0.4 },
    { path: "/how-it-works", changeFrequency: "monthly", priority: 0.7 },
    { path: "/how-to-use", changeFrequency: "monthly", priority: 0.6 },
    { path: "/setup", changeFrequency: "monthly", priority: 0.6 },
    { path: "/privacy", changeFrequency: "monthly", priority: 0.2 },
    { path: "/disclaimer", changeFrequency: "monthly", priority: 0.3 },
    { path: "/terms", changeFrequency: "monthly", priority: 0.2 },
  ];

  const entries: MetadataRoute.Sitemap = staticPages.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  for (const g of GUIDES) {
    entries.push({
      url: `${SITE_URL}/guides/${g.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
