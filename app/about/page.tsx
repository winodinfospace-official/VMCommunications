import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Button from "@/components/ui/Button";

export const metadata: Metadata = { title: "About — Vision Media Communications" };

const partners = [
  {
    name: "Hanumatharaja Y K",
    role: "Proprietor",
    photo: "/team/hanumantharaja.jpg",
    bio: "",
  },
  {
    name: "Dr. Shalini R",
    role: "Proprietor",
    photo: "/team/shalini.jpg",
    bio: "Communications and digital media professional with expertise in strategic communication, IEC campaigns, content, research and social media.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT VISION MEDIA"
        title={<>Creative communication.<br />Measurable impact.</>}
        description="Vision Media Communications is a creative communication company delivering integrated digital, media and IEC solutions for government departments, NGOs, educational institutions and private organizations."
      />

      <section className="bg-ivory py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
          <Reveal className="bg-navy p-10 lg:p-14">
            <p className="text-gold text-xs tracking-[0.3em] mb-5">VISION</p>
            <p className="font-display text-2xl lg:text-3xl text-ivory font-light leading-snug">
              To become a trusted communication partner delivering innovative digital, media and IEC
              solutions that create measurable social and business impact.
            </p>
          </Reveal>
          <Reveal delay={80} className="bg-charcoal p-10 lg:p-14">
            <p className="text-gold text-xs tracking-[0.3em] mb-5">MISSION</p>
            <ul className="space-y-4 text-ivory/80 text-[15px] leading-relaxed">
              <li>Deliver innovative communication solutions.</li>
              <li>Build meaningful public engagement.</li>
              <li>Support awareness and behaviour change campaigns.</li>
              <li>Provide quality creative and digital services.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <SectionEyebrow>OUR APPROACH</SectionEyebrow>
            <h2 className="font-display text-4xl lg:text-5xl text-ink font-light max-w-2xl">
              Strategy first. Craft always.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-10 mt-14">
            {[
              { t: "Understand", d: "We start by understanding the audience, the message, and the outcome the client needs." },
              { t: "Create", d: "Strategy, writing, design and production come together as one connected process, not separate handoffs." },
              { t: "Deliver", d: "Every project is managed end-to-end, with clear timelines and accountable project management." },
            ].map((item, i) => (
              <Reveal key={item.t} delay={i * 80}>
                <p className="font-display text-2xl text-ink mb-3">{item.t}</p>
                <p className="text-ink/60 text-[15px] leading-relaxed">{item.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <SectionEyebrow>LEADERSHIP</SectionEyebrow>
            <h2 className="font-display text-4xl lg:text-5xl text-ink font-light max-w-2xl">
              Partners.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-10 mt-14 max-w-3xl">
            {partners.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-navy">
                  <Image src={p.photo} alt={p.name} fill className="object-cover" />
                </div>
                <p className="font-display text-xl text-ink">{p.name}</p>
                <p className="text-gold text-xs tracking-[0.2em] mt-1 mb-3">{p.role.toUpperCase()}</p>
                {p.bio && <p className="text-ink/60 text-sm leading-relaxed">{p.bio}</p>}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <SectionEyebrow tone="gold">WHY VISION MEDIA</SectionEyebrow>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10 mt-6">
            {["Creative Team", "Government IEC Expertise", "End-to-End Media Production", "Professional Project Management", "Result-Oriented Campaigns"].map((item, i) => (
              <Reveal key={item} delay={i * 60}>
                <p className="font-display text-ivory text-2xl leading-tight">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy grain relative py-28 overflow-hidden">
        <div className="absolute inset-0 hero-bg opacity-90" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl text-ivory font-light">Let&apos;s build something credible.</h2>
            <div className="mt-8">
              <Button href="/contact">Start a Project</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
