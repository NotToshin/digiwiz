import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
export function Hero() {
  return <>
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="red-dot" aria-hidden="true" />Digital agency for growing businesses</p>
        <h1 id="hero-title">WE MAKE<br />DIGITAL<br /><span>MAGIC.</span></h1>
        <p className="lede">Custom software, websites, branding and marketing built around what your business needs next.</p>
        <div className="actions"><ButtonLink href="/contact">Start a project <span aria-hidden="true">↗</span></ButtonLink><ButtonLink href="/work" variant="secondary">Explore our work <span aria-hidden="true">↓</span></ButtonLink></div>
      </div>
      <figure className="sculpture hero-art">
        <span className="hero-trace" aria-hidden="true" />
        <Image
          src="/assets/folded-signal.svg"
          width={520}
          height={540}
          alt="Abstract DW-inspired artwork in violet and silver with a red accent"
          unoptimized
          preload
        />
      </figure>
    </section>
    <div className="hero-bottom"><span>Software / Web / Brand / Marketing</span><a href="#manifesto">Discover the approach <span aria-hidden="true">↓</span></a></div>
  </>;
}
