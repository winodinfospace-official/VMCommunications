import { notFound } from "next/navigation";
import Link from "next/link";
import { portfolioItems } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";

export function generateStaticParams() {
  return portfolioItems.map((p) => ({ slug: p.slug }));
}

export default function PortfolioDetailPage({ params }: { params: { slug: string } }) {
  const item = portfolioItems.find((p) => p.slug === params.slug);
  if (!item) notFound();

  return (
    <section className="hero-bg grain relative pt-44 pb-28">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <Reveal>
          <Link href="/portfolio" className="text-gold text-xs tracking-[0.2em]">← BACK TO PORTFOLIO</Link>
          <p className="text-gold text-xs tracking-[0.35em] mt-8 mb-4">{item.category.toUpperCase()}</p>
          <h1 className="font-display text-ivory text-4xl lg:text-5xl font-light leading-tight">{item.title}</h1>
          <div className="aspect-video bg-navy border border-ivory/10 mt-10 flex items-center justify-center">
            <p className="text-ivory/40 text-xs tracking-[0.2em]">PROJECT MEDIA</p>
          </div>
          <p className="text-ivory/65 leading-relaxed mt-10 max-w-xl">{item.description}</p>
        </Reveal>
      </div>
    </section>
  );
}
