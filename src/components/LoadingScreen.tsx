"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loaded = sessionStorage.getItem("portfolio-loaded");

    if (loaded) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem("portfolio-loaded", "true");
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] bg-[#0A0A0B] flex items-center justify-center flex-col gap-6"
        >
          <motion.div
            className="font-serif text-7xl text-[#D4AF37]"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            TO
          </motion.div>
          <span className="text-sm tracking-[0.4em] text-[#9CA3AF] font-jetbrains-mono">
            TAYO OPEYEMI
          </span>
          <motion.div
            className="fixed bottom-0 left-0 h-[2px] bg-[#D4AF37] w-full transform-origin-left"
            animate={{ scaleX: [0, 1] }}
            transition={{ duration: 1.8, ease: "linear" }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
