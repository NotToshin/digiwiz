import { pageMetadata } from "@/lib/site-metadata";
import { Hero } from "@/components/sections/hero";
import { HomeSections } from "@/components/sections/home-sections";
export const metadata = pageMetadata("/", "DIGIWIZ | MAKE MAGIC ONLINE", "Software services, websites, branding and digital marketing from DIGIWIZ.");

export default function Home() {
  return <><Hero /><HomeSections /></>;
}
