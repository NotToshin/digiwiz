import { pageMetadata } from "@/lib/site-metadata";
import { CapabilityContact, CapabilityIntro, ServiceGrid } from "@/components/sections/capability-layout";
import { services } from "@/content/capabilities";

export const metadata = pageMetadata("/services", "Services | DIGIWIZ", "Explore software, custom websites, WordPress, branding and digital marketing services from DIGIWIZ.");

export default function ServicesPage() {
  return (
    <>
      <CapabilityIntro section="Capabilities" title="Services">
        Build a website customers can use, a brand they can recognize, or a tool that saves your team time. Start with the problem you want to solve.
      </CapabilityIntro>
      <section className="section">
        <h2>Explore our services</h2>
        <ServiceGrid items={services} />
      </section>
      <CapabilityContact href="/industries" label="Explore industries" />
    </>
  );
}
