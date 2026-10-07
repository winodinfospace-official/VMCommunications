"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// The three hero blocks drift at different speeds while the page scrolls.
export default function HeroArt() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yOne = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -70]);
  const yTwo = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const yThree = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -150]);

  return (
    <div ref={ref} className="vm-hero-art" aria-label="Vision Media Communications creative media production">
      <motion.div style={{ y: yOne }} className="vm-art-card vm-art-one">
        <p className="vm-art-note">Communication that connects.</p>
        <span>Media</span>
      </motion.div>
      <motion.div style={{ y: yTwo }} className="vm-art-card vm-art-two"><span>Story</span></motion.div>
      <motion.div style={{ y: yThree }} className="vm-art-card vm-art-three"><span>IEC</span></motion.div>
    </div>
  );
}
