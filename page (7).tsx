import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { jobOpenings } from "@/data/careers";

export const metadata: Metadata = { title: "Careers — Vision Media Communications" };

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="CAREERS"
        title="Work on communication that matters."
        description="We build a small, senior team across strategy, creative, and production."
      />

      <section className="bg-ivory py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <SectionEyebrow>OPEN POSITIONS</SectionEyebrow>
          </Reveal>

          {jobOpenings.length === 0 ? (
            <Reveal delay={80} className="border border-ink/10 p-10 lg:p-14 mt-6">
              <p className="font-display text-2xl text-ink font-light">No current openings.</p>
              <p className="text-ink/60 text-sm mt-4 max-w-md">
                Send us your profile for future opportunities — we&apos;ll reach out when a role opens that fits.
              </p>
              <a
                href="mailto:visionmediacommunications2026@gmail.com"
                className="inline-flex mt-8 text-ink text-sm font-medium border-b border-gold pb-1"
              >
                Send Your Profile
              </a>
            </Reveal>
          ) : (
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {jobOpenings.map((job) => (
                <Reveal key={job.title} className="border border-ink/10 p-8">
                  <p className="font-display text-xl text-ink mb-2">{job.title}</p>
                  <p className="text-ink/50 text-sm">{job.type} · {job.location}</p>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
