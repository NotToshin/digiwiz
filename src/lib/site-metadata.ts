import type { Metadata } from "next";

export function getSiteOrigin(): URL | undefined {
  const url = process.env.SITE_URL;
  if (!url) return;
  try {
    const parsed = new URL(url);
    if (parsed.protocol === "https:" && parsed.pathname === "/" &&
        !parsed.username && !parsed.password && !parsed.search && !parsed.hash) {
      return parsed;
    }
  } catch {
    return;
  }
}

export function isIndexable() {
  return process.env.ENABLE_INDEXING === "true" && Boolean(getSiteOrigin());
}

export function pageMetadata(path: string, title: string, description: string): Metadata {
  const origin = getSiteOrigin();
  const canonical = origin ? new URL(path, origin) : undefined;
  return {
    title,
    description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: { title, description, url: canonical, siteName: "DIGIWIZ", type: "website" },
  };
}
