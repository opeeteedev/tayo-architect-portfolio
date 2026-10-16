"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-background text-text">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center space-y-8 max-w-md"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <span className="text-8xl md:text-12xl lg:text-16xl font-serif font-light text-text tracking-tight">
            404
          </span>
          <div
            className="absolute inset-0 bg-gradient-to-r from-accent-cyan/30 via-transparent to-accent-cyan/30 blur-3xl opacity-50 -z-10"
            aria-hidden="true"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-accent-gold leading-tight"
        >
          Lost in the architecture?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-text/60 max-w-xl mx-auto leading-relaxed"
        >
          The page you are looking for does not exist or has been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-10 py-4 bg-accent-gold text-background font-semibold text-base rounded-full hover:bg-accent-gold/90 transition-all shadow-[0_0_30px_rgba(212,175,55,0.4)]"
          >
            Return to Homepage
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}