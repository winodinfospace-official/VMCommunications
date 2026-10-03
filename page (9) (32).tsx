import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { clients, clientGroups } from "@/data/clients";

export const metadata: Metadata = { title: "Clients — Vision Media Communications" };

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="CLIENTS"
        title="Trusted across sectors."
        description="Sample/demo client entries shown below — replace with real client logos and names once supplied."
      />
      <section className="bg-ivory py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-16">
          {clientGroups.map((group) => (
            <Reveal key={group}>
              <SectionEyebrow>{group.toUpperCase()}</SectionEyebrow>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                {clients
                  .filter((c) => c.group === group)
                  .map((c) => (
                    <div
                      key={c.name}
                      className="flex items-center justify-center h-24 border border-ink/10 text-ink/40 text-xs tracking-widest text-center px-4"
                    >
                      {c.name.toUpperCase()}
                    </div>
                  ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
