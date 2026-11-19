import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/content/home";
export function Header() {
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <header className="site-header">
      <div className="wrap nav">
        <Link href="/" className="logo" aria-label="DIGIWIZ home">
          <Image src="/assets/digiwiz-logo.png" width={335} height={46} alt="DIGIWIZ - MAKE MAGIC ONLINE" unoptimized priority />
        </Link>
        <nav className="desktop-nav" aria-label="Primary">
          {navigation.map((item) => <Link key={item.href} href={item.href} className={item.href === "/contact" ? "button" : undefined}>{item.label}</Link>)}
        </nav>
        <details className="mobile-menu">
          <summary>Menu <span className="menu-symbol" aria-hidden="true">+</span></summary>
          <nav aria-label="Mobile">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}<span aria-hidden="true">↗</span></a>)}</nav>
        </details>
      </div>
    </header>
  </>;
}
