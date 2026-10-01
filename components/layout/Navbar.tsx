"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/government-iec", label: "Government IEC" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const f = () => setScrolled(window.scrollY > 30); window.addEventListener("scroll", f); return () => window.removeEventListener("scroll", f); }, []);
  return <>
    <header className={`vm-nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="vm-nav-inner">
        <Link href="/" className="vm-brand"><Image src="/logo.jpg" alt="Vision Media Communications" width={46} height={46} priority /><span>VISION MEDIA<small>COMMUNICATIONS</small></span></Link>
        <nav className="vm-nav-links">{links.map(l => <Link key={l.href} href={l.href}>{l.label}</Link>)}</nav>
        <Link href="/contact" className="vm-nav-cta">Start a Project ↗</Link>
        <button className="vm-menu" onClick={() => setOpen(v => !v)} aria-label="Open menu">☰</button>
      </div>
    </header>
    <div className={`vm-mobile-menu ${open ? "open" : ""}`}><nav>{links.map(l => <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>)}</nav><Link href="/contact" onClick={() => setOpen(false)} className="vm-btn vm-btn-primary">Start a Project ↗</Link></div>
  </>;
}
