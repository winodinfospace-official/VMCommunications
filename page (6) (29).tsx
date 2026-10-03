import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import PortfolioGrid from "@/components/sections/PortfolioGrid";

export const metadata: Metadata = { title: "Portfolio — Vision Media Communications" };

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR WORK"
        title="Ideas transformed into impact."
        description="Sample/demo projects shown below — replace with real project assets and case studies."
      />
      <section className="bg-ivory py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <PortfolioGrid />
        </div>
      </section>
    </>
  );
}
