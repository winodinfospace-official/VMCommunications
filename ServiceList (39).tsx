import type { Service } from "@/data/services";

export default function ServiceList({ services }: { services: Service[] }) {
  return (
    <div>
      {services.map((s) => (
        <div
          key={s.num}
          className="service-row group border-t border-ink/10 last:border-b py-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 transition-[background-color,padding] duration-300 hover:bg-ink/[0.03] hover:pl-3"
        >
          <span className="font-display text-ink/30 text-sm w-8 shrink-0 group-hover:text-gold transition-colors">{s.num}</span>
          <span className="font-display text-xl sm:text-2xl text-ink font-light sm:w-72 shrink-0">{s.title}</span>
          <span className="text-ink/50 text-sm flex-1">{s.desc}</span>
          <span className="hidden sm:block text-gold shrink-0 opacity-0 -translate-x-1.5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </span>
        </div>
      ))}
    </div>
  );
}
