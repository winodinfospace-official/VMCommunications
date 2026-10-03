import Link from "next/link";
import type { PortfolioItem } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";

export default function WorkGrid({ items }: { items: PortfolioItem[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <Reveal key={item.slug} delay={(i % 3) * 80}>
          <Link href={`/portfolio/${item.slug}`} className="work-card group block relative overflow-hidden">
            <div className="relative aspect-[4/5] bg-navy overflow-hidden">
              <div className="absolute inset-0 hero-bg opacity-95 transition-transform duration-700 ease-out group-hover:scale-[1.06]" />
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-opacity duration-400" />
              <div className="absolute top-5 left-5 text-ivory/60 text-[11px] tracking-[0.2em]">
                0{i + 1}
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-gold text-[10px] tracking-[0.25em] mb-1">{item.category.toUpperCase()}</p>
                <p className="font-display text-ivory text-lg">{item.title}</p>
              </div>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
