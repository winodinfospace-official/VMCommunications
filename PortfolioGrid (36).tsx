"use client";

import { useState } from "react";
import { portfolioItems, portfolioCategories } from "@/data/portfolio";
import WorkGrid from "@/components/sections/WorkGrid";

export default function PortfolioGrid() {
  const [active, setActive] = useState<(typeof portfolioCategories)[number]>("All");

  const filtered = active === "All" ? portfolioItems : portfolioItems.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-12">
        {portfolioCategories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`text-xs tracking-[0.15em] px-4 py-2 border transition-colors ${
              active === c ? "bg-navy text-ivory border-navy" : "border-ink/20 text-ink/60 hover:border-ink/40"
            }`}
          >
            {c.toUpperCase()}
          </button>
        ))}
      </div>
      <WorkGrid items={filtered} />
    </div>
  );
}
