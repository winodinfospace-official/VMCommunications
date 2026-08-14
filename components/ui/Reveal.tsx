"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Default to VISIBLE. This is what renders on the server and on first
  // paint, so content is never hidden behind JavaScript that hasn't run
  // yet — no blank hero, no blank headings, on any device or connection.
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Only content that starts BELOW the fold gets the fade-up animation.
    // Anything already on screen at load stays visible the whole time.
    const rect = el.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight * 0.9;
    if (alreadyInView) return;

    setVisible(false);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);

    // Safety net: if the observer never fires, show the content anyway.
    // Content should never be able to get permanently stuck invisible.
    const fallback = setTimeout(() => setVisible(true), 1200);

    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
