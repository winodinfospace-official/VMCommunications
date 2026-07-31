import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = { title: "Contact — Vision Media Communications" };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="GET IN TOUCH" title="Let's talk." description="Tell us about your project and we'll get back to you." />

      <section className="bg-ivory py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-10">
            <Reveal>
              <p className="text-blue text-xs tracking-[0.3em] mb-3">OFFICE</p>
              <p className="text-ink/70 text-[15px]">Office Address — Placeholder, to be supplied by client</p>
            </Reveal>
            <Reveal delay={60}>
              <p className="text-blue text-xs tracking-[0.3em] mb-3">PHONE</p>
              <p className="text-ink/70 text-[15px]">+91 XXXXX XXXXX — Placeholder</p>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-blue text-xs tracking-[0.3em] mb-3">EMAIL</p>
              <p className="text-ink/70 text-[15px]">hello@visionmediacommunications.example — Placeholder</p>
            </Reveal>
            <Reveal delay={180} className="aspect-video bg-navy/5 border border-ink/10 flex items-center justify-center">
              <p className="text-ink/35 text-xs tracking-[0.2em]">MAP EMBED — PLACEHOLDER (add once address confirmed)</p>
            </Reveal>
          </div>

          <Reveal delay={80} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
