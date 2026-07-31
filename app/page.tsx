import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import ServiceList from "@/components/sections/ServiceList";
import WorkGrid from "@/components/sections/WorkGrid";
import ClientMarquee from "@/components/sections/ClientMarquee";
import StatBlock from "@/components/sections/StatBlock";
import { services } from "@/data/services";
import { portfolioItems } from "@/data/portfolio";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-bg grain relative min-h-screen flex items-end pb-20 pt-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <Reveal>
            <p className="text-gold text-xs tracking-[0.35em] mb-6">
              CREATIVE COMMUNICATION &nbsp;·&nbsp; MEDIA PRODUCTION &nbsp;·&nbsp; GOVERNMENT IEC
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-ivory text-[13vw] leading-[0.95] sm:text-[9vw] lg:text-[6.2vw] font-light tracking-tight">
              Empowering Brands.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-goldlight via-gold to-blue">
                Connecting
              </span>{" "}
              People.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-10 max-w-xl">
              <p className="text-ivory/70 text-base leading-relaxed">
                Vision Media Communications delivers integrated Digital Marketing, Social Media Management,
                IEC Campaigns, Branding, Advertising, Publishing, Content Creation, Video Production, and
                Public Outreach solutions.
              </p>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Button href="/portfolio" variant="gold">Explore Our Work</Button>
              <Button href="/contact" variant="outline">Talk to Us</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-ivory py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-6">
            <SectionEyebrow>WHO WE ARE</SectionEyebrow>
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.1] text-ink font-light">
              Creative Communication.
              <br />
              Measurable Impact.
            </h2>
            <p className="mt-8 text-ink/70 leading-relaxed text-[15px] max-w-md">
              Vision Media Communications is a creative communication company delivering integrated digital,
              media and IEC solutions for government departments, NGOs, educational institutions and private
              organizations.
            </p>
            <p className="mt-5 text-ink/70 leading-relaxed text-[15px] max-w-md">
              We build meaningful public engagement, support awareness and behaviour-change campaigns, and
              provide quality creative and digital services — from strategy through to final delivery.
            </p>
            <a href="/about" className="mt-9 inline-flex items-center gap-2 text-ink text-sm font-medium border-b border-gold pb-1">
              Discover Vision Media
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-6 lg:pl-8">
            <div className="relative aspect-[4/5] bg-navy overflow-hidden">
              <div className="absolute inset-0 hero-bg opacity-95" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border border-gold/50 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border border-gold" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 border-t border-ivory/15 pt-4">
                <p className="text-ivory/50 text-[11px] tracking-[0.2em]">MEDIA & CAMPAIGN VISUAL — PLACEHOLDER</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-ivory pb-28 lg:pb-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <SectionEyebrow>WHAT WE DO</SectionEyebrow>
              <h2 className="font-display text-4xl lg:text-5xl leading-[1.1] text-ink font-light max-w-xl">
                Thirteen disciplines. One communication team.
              </h2>
            </div>
            <p className="text-ink/60 text-sm max-w-sm">
              A full-service capability set spanning strategy, creative, production and public outreach —
              built to scale from a single film to a multi-channel IEC campaign.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <ServiceList services={services} />
          </Reveal>
        </div>
      </section>

      {/* GOVERNMENT IEC */}
      <section className="bg-navy grain relative py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 hero-bg opacity-80" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="grid lg:grid-cols-12 gap-14 items-start">
            <div className="lg:col-span-6">
              <SectionEyebrow tone="gold">GOVERNMENT IEC</SectionEyebrow>
              <h2 className="font-display text-4xl lg:text-[3.2rem] leading-[1.08] text-ivory font-light">
                Communication that
                <br />
                creates public impact.
              </h2>
              <p className="mt-8 text-ivory/65 leading-relaxed text-[15px] max-w-md">
                IEC — Information, Education, Communication — is the discipline of translating policy and
                public priorities into messages people understand, trust, and act on. Vision Media develops
                communication campaigns that support public awareness, engagement, and behaviour change for:
              </p>
              <ul className="mt-7 space-y-3 text-ivory/85 text-sm">
                {["Government Departments", "Public Institutions", "NGOs", "Educational Institutions"].map((a) => (
                  <li key={a} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                    {a}
                  </li>
                ))}
              </ul>
              <a href="/government-iec" className="mt-10 inline-flex items-center gap-2 text-ivory text-sm font-medium border-b border-gold pb-1">
                Explore Government IEC
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
            </div>
            <div className="lg:col-span-6 lg:pl-6">
              <div className="border-l border-gold/30 pl-8 space-y-7">
                {["Research", "Strategy", "Content", "Creative", "Media", "Public Outreach", "Measurement"].map((step, i) => (
                  <div key={step} className="flex items-baseline gap-4">
                    <span className="font-display text-gold/70 text-sm">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-ivory text-lg font-display">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="bg-ivory py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <SectionEyebrow>OUR WORK</SectionEyebrow>
              <h2 className="font-display text-4xl lg:text-5xl leading-[1.1] text-ink font-light">Ideas transformed into impact.</h2>
            </div>
            <a href="/portfolio" className="text-ink text-sm font-medium border-b border-gold pb-1 w-fit">View All Work</a>
          </Reveal>
          <WorkGrid items={portfolioItems.slice(0, 6)} />
        </div>
      </section>

      {/* WHY VISION MEDIA */}
      <section className="bg-charcoal py-24 lg:py-32">
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

      {/* IMPACT */}
      <section className="bg-ivory py-24 lg:py-32 border-b border-ink/10">
        <StatBlock />
      </section>

      {/* CLIENTS */}
      <section className="bg-ivory py-24 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12">
          <Reveal>
            <SectionEyebrow>CLIENTS</SectionEyebrow>
            <h2 className="font-display text-3xl lg:text-4xl text-ink font-light">Trusted across sectors.</h2>
          </Reveal>
        </div>
        <Reveal>
          <ClientMarquee />
        </Reveal>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-ivory pb-28 lg:pb-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="border border-ink/10 p-10 lg:p-16 relative">
            <span className="font-display text-7xl text-gold/30 absolute top-6 left-8 select-none">&ldquo;</span>
            <p className="font-display text-2xl lg:text-3xl text-ink font-light leading-snug max-w-2xl relative">
              Client testimonial placeholder — real feedback from Vision Media Communications clients will be
              featured here once supplied.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-navy/10" />
              <div>
                <p className="text-ink text-sm font-medium">Client Name — Placeholder</p>
                <p className="text-ink/50 text-xs">Organization / Title — Placeholder</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-navy grain relative py-32 lg:py-44 overflow-hidden">
        <div className="absolute inset-0 hero-bg opacity-90" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <p className="text-gold text-xs tracking-[0.35em] mb-6">LET&apos;S TALK</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ivory font-light leading-[1.05]">
              Let&apos;s create
              <br />
              meaningful impact.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 text-ivory/60 max-w-md mx-auto">Let&apos;s turn ideas into communication that connects with people.</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
              <Button href="/contact" variant="gold">Start a Project</Button>
              <Button href="/contact" variant="outline">Contact Us</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
