import type { MetadataRoute } from "next";
import { getSiteOrigin, isIndexable } from "@/lib/site-metadata";

export default function robots(): MetadataRoute.Robots {
  const origin = getSiteOrigin();
  if (!origin || !isIndexable()) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", origin).href,
  };
}
