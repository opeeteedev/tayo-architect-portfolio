"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center bg-[#0A0A0B] text-[#F5F5F7] p-6"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="text-center space-y-4"
      >
        <span className="text-9xl font-serif font-light text-[#D4AF37]">500</span>

        <h1 className="text-4xl md:text-5xl font-serif font-medium text-[#D4AF37] leading-tight">
          Something broke on my end.
        </h1>

        <p className="text-lg text-[#9CA3AF] max-w-md mx-auto leading-relaxed">
          A system error occurred. Let me know so I can fix it.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button
            onClick={reset}
            className="px-8 py-4 bg-accent-gold text-background font-semibold text-base rounded-full hover:bg-accent-gold/90 transition-all shadow-[0_0_30px_rgba(212,175,55,0.4)]"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-8 py-4 border-2 border-accent-cyan text-accent-cyan font-semibold text-base rounded-full hover:bg-accent-cyan/10 transition-all"
          >
            Return Home
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
