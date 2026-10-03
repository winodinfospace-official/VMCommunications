"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/government-iec", label: "Government IEC" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`vm-nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="vm-nav-inner">
          <Link href="/" className="vm-brand" aria-label="Vision Media Communications home">
            <Image src="/logo.jpg" alt="Vision Media Communications" width={46} height={46} priority />
            <span>VISION MEDIA<small>COMMUNICATIONS</small></span>
          </Link>

          <nav className="vm-nav-links" aria-label="Primary navigation">
            {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          </nav>

          <Link href="/contact" className="vm-nav-cta">Start a Project</Link>
          <button className="vm-menu" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(v => !v)}>
            {open ? "×" : "☰"}
          </button>
        </div>
      </header>

      <div className={`vm-mobile-menu ${open ? "open" : ""}`}>
        <nav>
          {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
        </nav>
        <Link href="/contact" onClick={() => setOpen(false)} className="vm-btn vm-btn-primary">Start a Project <span>↗</span></Link>
      </div>
    </>
  );
}
