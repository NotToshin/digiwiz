import Link from "next/link";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import type { Service } from "@/content/capabilities";

export function CapabilityIntro({ section, title, children, parent }: {
  section: string;
  title: string;
  children: ReactNode;
  parent?: { href: string; label: string };
}) {
  return (
    <header className="section capability-intro">
      {parent && <Link className="text-link" href={parent.href}>{parent.label}</Link>}
      <div className="capability-title">
        <p className="eyebrow"><span className="red-dot" aria-hidden="true" />{section}</p>
        <h1>{title}</h1>
      </div>
      <div className="capability-summary">
        <p className="lede">{children}</p>
      </div>
    </header>
  );
}

export function ServiceGrid({ items }: { items: readonly Service[] }) {
  return (
    <ul className="capability-grid">
      {items.map((service) => (
        <li className="capability-card" key={service.slug}>
          <h3><Link href={`/services/${service.slug}`}>{service.name}<span aria-hidden="true">↗</span></Link></h3>
          <p className="note">{service.description}</p>
        </li>
      ))}
    </ul>
  );
}

export function CapabilityContact({ href, label }: { href: string; label: string }) {
  return (
    <section className="contact capability-contact" aria-label="Project inquiries">
      <h2>Have a project in mind?</h2>
      <div className="actions">
        <ButtonLink href="/contact">Start a project</ButtonLink>
        <Link className="text-link" href={href}>{label}</Link>
      </div>
    </section>
  );
}
