"use client";

import { motion } from "motion/react";

export default function GrainOverlay() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03]"
      style={{
        backgroundImage: `url("https://example.com/noise.png")`,
        backgroundSize: "300px",
      }}
      animate={{
        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
      }}
      transition={{
        duration: 60,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "linear",
      }}
      aria-hidden="true"
    />
  );
}
