"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/government-iec", label: "Government IEC" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/clients", label: "Clients" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-400 ${
          scrolled ? "bg-navy/95 backdrop-blur-md border-b border-gold/15" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image src="/logo.jpg" alt="Vision Media Communications" width={40} height={40} className="h-10 w-10 object-contain rounded-full" priority />
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-display text-ivory text-sm tracking-[0.15em] font-medium">VISION MEDIA</span>
              <span className="text-gold text-[10px] tracking-[0.3em]">COMMUNICATIONS</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-wide text-ivory/85">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="nav-link">
                {l.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact" className="btn-gold hidden lg:inline-flex bg-gold text-navy text-[13px] font-medium px-5 py-2.5 tracking-wide">
            <span>Start a Project</span>
          </Link>

          <button
            className="lg:hidden text-ivory"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-navy flex flex-col justify-center px-8 transition-transform duration-500 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex flex-col gap-6 text-2xl font-display text-ivory">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          className="btn-gold bg-gold text-navy text-sm font-medium px-6 py-3 tracking-wide inline-flex w-fit mt-10"
        >
          <span>Start a Project</span>
        </Link>
      </div>
    </>
  );
}
