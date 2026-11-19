import { pageMetadata } from "@/lib/site-metadata";
import Link from "next/link";
import { CapabilityContact, CapabilityIntro } from "@/components/sections/capability-layout";
import { industries } from "@/content/capabilities";

export const metadata = pageMetadata("/industries", "Industries | DIGIWIZ", "Explore project ideas for nine sectors served by DIGIWIZ.");

export default function IndustriesPage() {
  return (
    <>
      <CapabilityIntro section="Sectors served" title="Industries">
        The right project depends on your customers and how your team works. These examples show where we would start across the sectors we serve.
      </CapabilityIntro>
      <section className="section">
        <h2>Project ideas by industry</h2>
        <ul className="capability-grid">
          {industries.map(({ slug, name, idea, service }) => (
            <li id={slug} className="capability-card" key={slug}>
              <h3>{name}</h3>
              <p className="note">{idea}</p>
              <Link className="text-link" href={`/services/${service.slug}`}>{service.name}<span aria-hidden="true">↗</span></Link>
            </li>
          ))}
        </ul>
      </section>
      <CapabilityContact href="/services" label="Explore all services" />
    </>
  );
}
