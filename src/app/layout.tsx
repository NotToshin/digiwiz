import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from "next";
import { getSiteOrigin, isIndexable } from "@/lib/site-metadata";
import "@fontsource-variable/space-grotesk/wght.css";
import "@fontsource-variable/inter/wght.css";
import "./globals.css";
export const metadata: Metadata = {
  title: "DIGIWIZ | MAKE MAGIC ONLINE",
  description: "Software services, websites, branding and digital marketing from DIGIWIZ.",
  metadataBase: getSiteOrigin(),
  robots: { index: isIndexable(), follow: isIndexable() },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header /><main id="main" tabIndex={-1} className="wrap">{children}</main><Footer /></body></html>;
}
