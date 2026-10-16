"use client";

import { useScroll, useSpring, motion } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[100] bg-[#D4AF37] origin-left"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}