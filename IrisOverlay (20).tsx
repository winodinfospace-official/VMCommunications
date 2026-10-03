"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function IrisOverlay() {
  const [done, setDone] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => setDone(true), 1900);
    return () => clearTimeout(t);
  }, [reduceMotion]);

  if (done) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-navy pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{ duration: 1.9, times: [0, 0.45, 1], ease: "easeIn" }}
    >
      <motion.div
        className="rounded-full border border-gold"
        style={{ boxShadow: "0 0 40px rgba(198,161,91,0.35)" }}
        initial={{ width: 40, height: 40, opacity: 0 }}
        animate={{ width: [40, 2400], height: [40, 2400], opacity: [0, 1, 1] }}
        transition={{ duration: 1.1, ease: [0.6, 0, 0.15, 1] }}
      />
    </motion.div>
  );
}
