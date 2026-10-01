import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return <footer className="vm-footer"><div className="vm-footer-inner">
    <div className="vm-footer-brand"><Link href="/" className="vm-brand"><Image src="/logo.jpg" alt="Vision Media Communications" width={46} height={46} /><span>VISION MEDIA<small>COMMUNICATIONS</small></span></Link><p>Creative communication and integrated digital, media and IEC solutions for government, NGO, education and private-sector partners.</p></div>
    <div><h4>EXPLORE</h4><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/government-iec">Government IEC</Link><Link href="/portfolio">Portfolio</Link><Link href="/careers">Careers</Link></div>
    <div><h4>CONTACT</h4><p>#T4/D, 1st Main Road, Peenya Police Station Road, Peenya Industrial Area, 1st Stage, Peenya, Bengaluru - 560 058</p><a href="tel:+919343543773">+91 93435 43773</a><a href="tel:+919964601753">+91 99646 01753</a><a href="mailto:visionmediacommunications2026@gmail.com">visionmediacommunications2026@gmail.com</a></div>
  </div><div className="vm-footer-bottom"><span>© {new Date().getFullYear()} Vision Media Communications. All rights reserved.</span><Link href="/contact">Start a Project ↗</Link></div></footer>;
}
