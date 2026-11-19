import Image from "next/image";
import { pageMetadata } from "@/lib/site-metadata";
import { CapabilityContact, CapabilityIntro } from "@/components/sections/capability-layout";

export const metadata = pageMetadata("/work", "Work | DIGIWIZ", "A case study of the DIGIWIZ flagship website, from identity and motion to responsive development.");

export default function WorkPage() {
  return (
    <>
      <CapabilityIntro section="In-house project" title="The DIGIWIZ website">
        We designed our flagship site to explain what we do, show how we think and give people a clear way to start a project.
      </CapabilityIntro>
      <section className="section split">
        <div>
          <h2>From identity to interface</h2>
          <p className="note">The supplied logo sets the palette. The separate DW-inspired illustration takes those shapes into the hero, alongside large editorial type and a direct route to our services.</p>
        </div>
        <Image className="case-study-art" src="/assets/folded-signal.svg" width={520} height={540} alt="Violet and silver DW-inspired illustration" unoptimized />
      </section>
      <section className="section capability-brief">
        <h2>Design decisions</h2>
        <ul className="brief-list">
          <li><strong>Readable at a glance.</strong> Service pages explain what each engagement can cover and what to bring to the first conversation.</li>
          <li><strong>Built for smaller screens.</strong> Grids stack, links keep generous touch targets and the menu works with native controls.</li>
          <li><strong>Motion with a purpose.</strong> Headings enter in reading order, and section accents follow the scroll. The artwork stays fixed and motion respects visitor preferences.</li>
        </ul>
      </section>
      <CapabilityContact href="/services" label="Explore our services" />
    </>
  );
}
