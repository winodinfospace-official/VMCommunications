import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="vm-footer">
      <div className="vm-footer-inner">
        <div className="vm-footer-brand">
          <Link href="/" className="vm-brand">
            <Image src="/logo.jpg" alt="Vision Media Communications" width={46} height={46} />
            <span>Vision Media<small>Communications</small></span>
          </Link>
          <p>Creative communication and integrated digital, media and IEC solutions for government, NGO, education and private-sector partners.</p>
        </div>

        <div>
          <h4>Quick links</h4>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/government-iec">Government IEC</Link>
          <Link href="/careers">Careers</Link>
        </div>

        <div>
          <h4>Contact</h4>
          <Link href="/contact">Get in Touch</Link>
          <p>For project enquiries, partnerships and communication requirements, speak with our team.</p>
        </div>

        <div>
          <h4>Get in touch</h4>
          <p>#T4/D, 1st Main Road, Peenya Police Station Road, Peenya Industrial Area, 1st Stage, Peenya, Bengaluru - 560 058</p>
          <p>+91 99646 01753<br />+91 93435 43773</p>
          <p>visionmediacommunications2026@gmail.com</p>
        </div>
      </div>
      <div className="vm-footer-bottom">
        <span>© {new Date().getFullYear()} Vision Media Communications. All rights reserved.</span>
        <span>Strategy, creativity, communication</span>
      </div>
    </footer>
  );
}
