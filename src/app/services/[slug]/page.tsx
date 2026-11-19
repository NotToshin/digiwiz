import { pageMetadata } from "@/lib/site-metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CapabilityContact, CapabilityIntro, ServiceGrid } from "@/components/sections/capability-layout";
import { industries, services } from "@/content/capabilities";

type PageProps = { params: Promise<{ slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

async function getService(params: PageProps["params"]) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  return service;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = await getService(params);
  return pageMetadata(`/services/${service.slug}`, `${service.name} | DIGIWIZ`, service.description);
}

export default async function ServicePage({ params }: PageProps) {
  const service = await getService(params);
  const examples = industries.filter((industry) => industry.service.slug === service.slug);
  return (
    <>
      <CapabilityIntro section={service.category} title={service.name} parent={{ href: "/services", label: "All services" }}>
        {service.description}
      </CapabilityIntro>
      <section className="section split">
        <h2>What we can build</h2>
        <p className="note">{service.scope}</p>
      </section>
      <section className="section capability-brief">
        <h2>What to bring to the brief</h2>
        <ul className="brief-list">
          {service.questions.map((question) => <li key={question}>{question}</li>)}
        </ul>
      </section>
      {examples.length > 0 && (
        <section className="section">
          <h2>Project ideas by industry</h2>
          <ul className="capability-links">
            {examples.map((industry) => <li key={industry.slug}><Link className="text-link" href={`/industries#${industry.slug}`}>{industry.name}</Link></li>)}
          </ul>
        </section>
      )}
      <section className="section">
        <h2>Other services</h2>
        <ServiceGrid items={services.filter((item) => item.slug !== service.slug)} />
      </section>
      <CapabilityContact href="/industries" label="Explore industries" />
    </>
  );
}
