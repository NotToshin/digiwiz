import type { MetadataRoute } from "next";
import { services } from "@/content/capabilities";
import { getSiteOrigin, isIndexable } from "@/lib/site-metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteOrigin();
  if (!origin || !isIndexable()) return [];
  const paths = ["/", "/services", "/industries", "/work", "/about", "/contact",
    ...services.map(({ slug }) => `/services/${slug}`)];
  return paths.map((path) => ({ url: new URL(path, origin).href }));
}
