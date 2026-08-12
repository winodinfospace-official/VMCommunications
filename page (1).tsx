import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/services";

export const metadata: Metadata = { title: "Services — Vision Media Communications" };

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="WHAT WE DO"
        title={<>Thirteen disciplines.<br />One communication team.</>}
        description="A full-service capability set spanning strategy, creative, production and public outreach."
      />

      <section className="bg-ivory py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {services.map((s, i) => (
              <Reveal key={s.num} delay={(i % 4) * 60}>
                <div className="border-t border-ink/10 pt-6">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-display text-gold text-sm">{s.num}</span>
                    <h2 className="font-display text-2xl text-ink font-light">{s.title}</h2>
                  </div>
                  <p className="text-ink/60 text-[15px] leading-relaxed mb-4">{s.desc}</p>
                  <ul className="space-y-1.5">
                    {s.deliverables.map((d) => (
                      <li key={d} className="text-ink/45 text-xs tracking-wide flex items-center gap-2">
                        <span className="w-1 h-1 bg-gold rounded-full" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
