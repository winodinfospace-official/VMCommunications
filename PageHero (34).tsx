import Reveal from "@/components/ui/Reveal";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="hero-bg grain relative pt-44 pb-20 lg:pt-52 lg:pb-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <p className="text-gold text-xs tracking-[0.35em] mb-6">{eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display text-ivory text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.05] max-w-3xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={160}>
            <p className="mt-8 text-ivory/65 leading-relaxed max-w-xl text-[15px]">{description}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
