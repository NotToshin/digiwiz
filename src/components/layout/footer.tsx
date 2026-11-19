import Link from "next/link";

export function Footer() {
  return (
    <footer className="wrap site-footer">
      <div><strong>DIGIWIZ</strong><p>MAKE MAGIC ONLINE</p></div>
      <nav className="footer-links" aria-label="Footer">
        <Link href="/services">Services</Link>
        <Link href="/work">Work</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <a href="#main">Back to top <span aria-hidden="true">&#8593;</span></a>
    </footer>
  );
}
