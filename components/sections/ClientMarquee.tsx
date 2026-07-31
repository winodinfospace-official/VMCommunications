import { clients } from "@/data/clients";

function Row({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex items-center gap-16 pr-16" aria-hidden={ariaHidden}>
      {clients.map((c, i) => (
        <div
          key={`${c.name}-${i}`}
          className="flex items-center justify-center h-16 w-48 border border-ink/10 text-ink/35 text-xs tracking-widest shrink-0 px-4 text-center"
        >
          {c.name.toUpperCase()}
        </div>
      ))}
    </div>
  );
}

export default function ClientMarquee() {
  return (
    <div className="relative overflow-hidden">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        <Row />
        <Row ariaHidden />
      </div>
    </div>
  );
}
