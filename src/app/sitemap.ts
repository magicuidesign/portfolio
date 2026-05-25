import { MetadataRoute } from "next";
import { DATA } from "@/data/resume";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: DATA.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${DATA.url}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${DATA.url}/projects/brainsort`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
