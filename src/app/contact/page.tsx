import { pageMetadata } from "@/lib/site-metadata";
import { CapabilityIntro } from "@/components/sections/capability-layout";
import { InquiryForm } from "./inquiry-form";
import { getInquiryDeliveryConfig } from "./delivery-config";

export const metadata = pageMetadata("/contact", "Contact | DIGIWIZ", "Tell DIGIWIZ what you want to build and what your project needs to do.");

export const dynamic = "force-dynamic";

export default function ContactPage() {
  const enabled = Boolean(getInquiryDeliveryConfig());
  return (
    <>
      <CapabilityIntro section="Contact" title="Start a project">
        Tell us what you want to change, who the project is for and any timing you have in mind. A short outline is enough to start.
      </CapabilityIntro>
      <section className="section" aria-label="Send a project inquiry">
        <InquiryForm enabled={enabled} />
      </section>
    </>
  );
}
