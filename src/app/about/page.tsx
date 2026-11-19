import { pageMetadata } from "@/lib/site-metadata";
import Link from "next/link";
import { CapabilityContact, CapabilityIntro } from "@/components/sections/capability-layout";
import { services } from "@/content/capabilities";

export const metadata = pageMetadata("/about", "About | DIGIWIZ", "Learn about DIGIWIZ and its software, website, branding and digital marketing services.");

export default function AboutPage() {
  return (
    <>
      <CapabilityIntro section="Make magic online" title="About DIGIWIZ">
        DIGIWIZ brings design, development and marketing together for businesses that need to explain what they do, reach customers or make everyday work easier.
      </CapabilityIntro>
      <section className="section capability-brief">
        <div><h2>How we choose what to build</h2><p className="note">We start with the job the project needs to do. From there, we agree on priorities, map the experience and decide what is worth building first.</p></div>
        <ul className="brief-list">
          {services.map(({ slug, name }) => (
            <li key={slug}><Link className="text-link" href={`/services/${slug}`}>{name}</Link></li>
          ))}
        </ul>
      </section>
      <CapabilityContact href="/work" label="View our work" />
    </>
  );
}
