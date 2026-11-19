import Link from "next/link";
import { industries, services } from "@/content/capabilities";
import { processSteps } from "@/content/home";
import { ButtonLink } from "@/components/ui/button-link";

export function HomeSections() {
  return (
    <>
      <section id="manifesto" className="section split" aria-labelledby="manifesto-title">
        <p className="eyebrow">The approach</p>
        <div>
          <h2 id="manifesto-title" className="manifesto">Start with what people need to do.</h2>
          <p className="note">A visitor needs to find an answer. A team needs to finish a task. A customer needs a reason to choose you. We use those moments to decide what to design, build and measure.</p>
        </div>
      </section>

      <section id="services" className="section" aria-labelledby="services-title">
        <div className="section-head">
          <h2 id="services-title">What we make</h2>
          <Link className="text-link" href="/services">Explore all services</Link>
        </div>
        <div className="services">
          {services.map(({ slug, name, description }) => (
            <article className="card" key={slug}>
              <h3><Link href={`/services/${slug}`}>{name} <span aria-hidden="true">&#8599;</span></Link></h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="section" aria-labelledby="work-title">
        <div className="work-feature">
          <p className="eyebrow">DIGIWIZ flagship website</p>
          <h2 id="work-title">A closer look at the site you’re on.</h2>
          <p>See how we turned our visual identity into a responsive website and made motion part of the design.</p>
          <Link className="text-link" href="/work">Read the case study <span aria-hidden="true">&#8599;</span></Link>
        </div>
      </section>

      <section id="industries" className="section split" aria-labelledby="industries-title">
        <div>
          <h2 id="industries-title">Where we can help</h2>
          <p className="note">Browse project ideas based on the information customers look for and the work teams need to get done.</p>
        </div>
        <ul className="tags" aria-label="Industries">
          {industries.map(({ slug, name }) => <li key={slug}><Link href={`/industries#${slug}`}>{name}</Link></li>)}
        </ul>
      </section>

      <section id="approach" className="section" aria-labelledby="approach-title">
        <h2 id="approach-title">How a project takes shape</h2>
        <ol className="process">
          {processSteps.map(({ title, description }) => (
            <li key={title}><h3>{title}</h3><p className="note">{description}</p></li>
          ))}
        </ol>
      </section>

      <section id="contact" className="section">
        <div className="contact capability-contact">
          <h2>What should we make next?</h2>
          <div className="actions"><ButtonLink href="/contact">Start a project</ButtonLink></div>
        </div>
      </section>
    </>
  );
}
