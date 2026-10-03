import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Button from "@/components/ui/Button";

export const metadata: Metadata = { title: "Government IEC — Vision Media Communications" };

const journey = ["Research", "Strategy", "Content", "Creative", "Media", "Public Outreach", "Measurement"];

const capabilities = [
  { t: "Awareness Campaigns", d: "Communication built to inform the public on policy, services, and priorities." },
  { t: "Behaviour Change Communication", d: "Messaging designed around what actually shifts public behaviour, not just awareness." },
  { t: "Public Outreach", d: "On-ground and digital outreach that reaches audiences where they are." },
  { t: "Creative Development", d: "Visual and written creative built for clarity and public trust." },
  { t: "Media Production", d: "Film, audio, and visual production for public communication." },
  { t: "Digital Communication", d: "Social and digital-first delivery for wider, faster reach." },
  { t: "Campaign Documentation", d: "Structured documentation of campaign delivery and materials." },
];

export default function GovIECPage() {
  return (
    <>
      <PageHero
        eyebrow="GOVERNMENT IEC"
        title={<>Communication that<br />creates public impact.</>}
        description="IEC — Information, Education, Communication — is the discipline of translating policy and public priorities into messages people understand, trust, and act on."
      />

      <section className="bg-ivory py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <SectionEyebrow>THE COMMUNICATION JOURNEY</SectionEyebrow>
          </Reveal>
          <div className="flex flex-wrap items-center gap-3 lg:gap-0 mt-8">
            {journey.map((step, i) => (
              <div key={step} className="flex items-center">
                <Reveal delay={i * 60}>
                  <div className="border border-ink/15 px-5 py-3">
                    <span className="font-display text-ink text-sm">{step}</span>
                  </div>
                </Reveal>
                {i < journey.length - 1 && (
                  <span className="text-gold mx-3 hidden lg:inline">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy grain relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 hero-bg opacity-80" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <SectionEyebrow tone="gold">CAPABILITIES</SectionEyebrow>
            <h2 className="font-display text-4xl text-ivory font-light max-w-xl">Built for public-sector communication.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 mt-14">
            {capabilities.map((c, i) => (
              <Reveal key={c.t} delay={(i % 3) * 70}>
                <p className="font-display text-ivory text-xl mb-2">{c.t}</p>
                <p className="text-ivory/55 text-sm leading-relaxed">{c.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <SectionEyebrow>WHO WE WORK WITH</SectionEyebrow>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {["Government Departments", "Public Institutions", "NGOs", "Educational Institutions"].map((a, i) => (
              <Reveal key={a} delay={i * 60} className="border border-ink/10 p-6 text-center">
                <p className="font-display text-ink text-lg">{a}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={240} className="mt-14 text-center">
            <Button href="/contact" variant="outline-dark">Talk to Us About an IEC Campaign</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
