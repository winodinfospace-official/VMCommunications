import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-charcoal pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-12 pb-16 border-b border-ivory/10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <Image src="/logo.jpg" alt="Vision Media Communications" width={40} height={40} className="h-10 w-10 object-contain rounded-full" />
              <span className="font-display text-ivory text-sm tracking-[0.15em]">
                VISION MEDIA
                <br />
                <span className="text-gold text-[10px] tracking-[0.3em]">COMMUNICATIONS</span>
              </span>
            </div>
            <p className="text-ivory/50 text-sm leading-relaxed max-w-xs">
              Creative communication and integrated digital, media and IEC solutions for government, NGO, education and private-sector partners.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="text-ivory text-xs tracking-[0.2em] mb-5">QUICK LINKS</p>
            <ul className="space-y-3 text-ivory/55 text-sm">
              <li><Link href="/about" className="hover:text-gold transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors">Services</Link></li>
              <li><Link href="/government-iec" className="hover:text-gold transition-colors">Government IEC</Link></li>
              <li><Link href="/careers" className="hover:text-gold transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-ivory text-xs tracking-[0.2em] mb-5">CONTACT</p>
            <ul className="space-y-3 text-ivory/55 text-sm">
              <li><Link href="/contact" className="hover:text-gold transition-colors">Get in Touch</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-ivory text-xs tracking-[0.2em] mb-5">GET IN TOUCH</p>
            <ul className="space-y-3 text-ivory/55 text-sm">
              <li>#T4/D, 1st Main Road, Peenya Police Station Road, Peenya Industrial Area, 1st Stage, Peenya, Bengaluru - 560 058</li>
              <li>+91 93435 43773</li>
              <li>+91 99646 01753</li>
              <li>visionmediacommunications2026@gmail.com</li>
            </ul>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-ivory/50 hover:text-gold transition-colors">IG</a>
              <a href="#" aria-label="LinkedIn" className="text-ivory/50 hover:text-gold transition-colors">LI</a>
              <a href="#" aria-label="YouTube" className="text-ivory/50 hover:text-gold transition-colors">YT</a>
            </div>
          </div>
        </div>
        <p className="text-ivory/35 text-xs mt-8">
          © {new Date().getFullYear()} Vision Media Communications. All rights reserved. — Content pending final client sign-off.
        </p>
      </div>
    </footer>
  );
}
