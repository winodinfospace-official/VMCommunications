import Reveal from "@/components/ui/Reveal";

const stats = ["PROJECTS DELIVERED", "CAMPAIGNS EXECUTED", "VIDEOS PRODUCED", "CLIENTS SERVED"];

export default function StatBlock() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((label, i) => (
          <Reveal key={label} delay={i * 80} className="text-center lg:text-left">
            <p className="font-display text-5xl lg:text-6xl text-ink">XX+</p>
            <p className="mt-3 text-ink/60 text-xs tracking-[0.2em]">{label}</p>
          </Reveal>
        ))}
      </div>
      <p className="text-center lg:text-left max-w-7xl mx-auto px-6 lg:px-10 mt-6 text-ink/35 text-[11px] tracking-wide">
        Figures to be supplied by client — placeholders shown
      </p>
    </>
  );
}
